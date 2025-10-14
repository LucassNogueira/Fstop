'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/shared/utils/firebase';
import { UserDocument } from '@/shared/types/f1Types';

interface AuthContextType {
  user: User | null;
  userDoc: UserDocument | null;
  setUserDoc: React.Dispatch<React.SetStateAction<UserDocument | null>>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userDoc: null,
  setUserDoc: () => {},
  loading: true,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [userDoc, setUserDoc] = useState<UserDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !auth) {
      setLoading(false);
      return;
    }

    // Set a maximum timeout for auth initialization
    const timeoutId = setTimeout(() => {
      if (loading) {
        console.warn('Auth initialization timeout - continuing without user');
        setLoading(false);
      }
    }, 5000); // 5 second maximum timeout

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      clearTimeout(timeoutId); // Clear timeout since auth resolved
      setUser(currentUser);

      if (currentUser && db) {
        try {
          // Fetch user document with a timeout
          const docRef = doc(db, 'Users', currentUser.uid);
          const docPromise = getDoc(docRef);
          const timeoutPromise = new Promise<null>((resolve) => 
            setTimeout(() => resolve(null), 3000)
          );
          
          const result = await Promise.race([docPromise, timeoutPromise]);
          
          if (result && result.exists()) {
            setUserDoc(result.data() as UserDocument);
          } else if (!result) {
            console.warn('User document fetch timeout');
          }
        } catch (error) {
          console.error('Error fetching user document:', error);
        }
      } else {
        setUserDoc(null);
      }

      setLoading(false);
    });

    return () => {
      clearTimeout(timeoutId);
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, userDoc, setUserDoc, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

