import { createContext, useState } from 'react';

type User = {
  email: string;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: string) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const userData = await response.json();
    setUser(userData);
  }

  async function logout() {
    await fetch('/api/logout', { method: 'POST' });
    setUser(null);
  }

  async function register(email: string, password: string) {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const userData = await response.json();
    setUser(userData);
  }

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};