import { supabase } from '@/integrations/supabase/client';

export type StoredMessage = {
  role: 'user' | 'assistant';
  content: string;
  id: string;
  isError?: boolean;
  imageUrl?: string;
};

const MAX_LOAD = 60; // last 60 messages per persona

/**
 * Load the last N messages for a given user + persona, oldest-first.
 */
export async function loadChatHistory(
  userId: string,
  persona: string
): Promise<StoredMessage[]> {
  const { data, error } = await supabase
    .from('chat_history')
    .select('id, role, content, image_url, is_error, client_message_id, created_at')
    .eq('user_id', userId)
    .eq('persona', persona)
    .order('created_at', { ascending: false })
    .limit(MAX_LOAD);

  if (error) {
    console.warn('loadChatHistory failed:', error.message);
    return [];
  }

  return (data ?? [])
    .slice()
    .reverse()
    .map((row) => ({
      id: row.client_message_id || row.id,
      role: row.role as 'user' | 'assistant',
      content: row.content,
      ...(row.image_url ? { imageUrl: row.image_url } : {}),
      ...(row.is_error ? { isError: true } : {}),
    }));
}

/**
 * Persist a single message for a user + persona.
 * Errors are swallowed (chat must keep working even if the DB write fails).
 */
export async function saveChatMessage(
  userId: string,
  persona: string,
  message: StoredMessage
): Promise<void> {
  // Don't persist images (they're large data: URLs); store a placeholder only
  const isDataUrl = message.imageUrl?.startsWith('data:');
  const { error } = await supabase.from('chat_history').insert({
    user_id: userId,
    persona,
    role: message.role,
    content: message.content,
    image_url: isDataUrl ? null : message.imageUrl ?? null,
    is_error: !!message.isError,
    client_message_id: message.id,
  });
  if (error) console.warn('saveChatMessage failed:', error.message);
}

/**
 * Delete all stored messages for a user + persona.
 */
export async function clearChatHistory(
  userId: string,
  persona: string
): Promise<void> {
  const { error } = await supabase
    .from('chat_history')
    .delete()
    .eq('user_id', userId)
    .eq('persona', persona);
  if (error) console.warn('clearChatHistory failed:', error.message);
}
