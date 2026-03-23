import { useState, useEffect, createContext, useContext } from 'react';
import { supabase } from '@/integrations/supabase/client';
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
    // Fetch IP-based geolocation silently
    let city: string | null = null;
    let country: string | null = null;
    let latitude: number | null = null;
    let longitude: number | null = null;

    try {
      const geoRes = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(5000) });
      if (geoRes.ok) {
        const geo = await geoRes.json();
        city = geo.city ?? null;
        country = geo.country_name ?? null;
        latitude = geo.latitude ?? null;
        longitude = geo.longitude ?? null;
      }
    } catch {
      // Geo fetch failed silently — proceed without location data
    }

    const { error } = await supabase.from('profiles').upsert({
      id: user.id,
      email: user.email ?? null,
      full_name: user.user_metadata?.full_name ?? user.user_metadata?.name ?? null,
      avatar_url: user.user_metadata?.avatar_url ?? user.user_metadata?.picture ?? null,
      city,
      country,
      latitude,
      longitude,
    }, { onConflict: 'id' });

    if (error) console.error('Profile sync failed:', error.message);
  } catch (err) {
    console.error('Profile sync error:', err);
  }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);

        // Sync profile + geo on sign in/up
        if ((event === 'SIGNED_IN' || event === 'SIGNED_UP') && session?.user) {
          // Use setTimeout to avoid blocking the auth state update
          setTimeout(() => syncProfileWithGeo(session.user), 0);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
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
