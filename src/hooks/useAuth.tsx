import { useState, useEffect, createContext, useContext, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { syncAnalyticsProfile } from '@/lib/analytics';
import type { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signOut: async () => {},
});

async function syncProfileWithGeo(user: User) {
  try {
    // Upsert basic profile data first
    const { error } = await supabase.from('profiles').upsert({
      id: user.id,
      email: user.email ?? null,
      full_name: user.user_metadata?.full_name ?? user.user_metadata?.name ?? null,
      avatar_url: user.user_metadata?.avatar_url ?? user.user_metadata?.picture ?? null,
    } as any, { onConflict: 'id' });

    if (error) console.error('Profile sync failed:', error.message);

    // Sync profile to analytics dashboard
    await syncAnalyticsProfile({ id: user.id, email: user.email, created_at: user.created_at });

    // Call edge function for server-side geo lookup (avoids CORS)
    try {
      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;
      if (token) {
        await supabase.functions.invoke('geo-lookup', {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
    } catch {
      // Geo lookup failed silently
    }
  } catch (err) {
    console.error('Profile sync error:', err);
  }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const lastSyncedTokenRef = useRef<string | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);

        // Sync profile + geo on sign in/up
        if (event === 'SIGNED_OUT') {
          lastSyncedTokenRef.current = null;
        }

        if ((event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') && session?.user) {
          const syncToken = session.access_token ?? session.user.id;
          if (lastSyncedTokenRef.current === syncToken) return;
          lastSyncedTokenRef.current = syncToken;

          // Use setTimeout to avoid blocking the auth state update
          setTimeout(() => {
            void syncProfileWithGeo(session.user);
          }, 0);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      if (session?.user) {
        const syncToken = session.access_token ?? session.user.id;
        if (lastSyncedTokenRef.current !== syncToken) {
          lastSyncedTokenRef.current = syncToken;
          void syncProfileWithGeo(session.user);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
