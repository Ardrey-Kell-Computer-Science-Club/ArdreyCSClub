"use client";

import React from "react";


type AdminContextType = {
  isAdmin: boolean;
  setIsAdmin: (v: boolean) => void;
};

export const AdminContext = React.createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = React.useState<boolean>(() => {
    try {
      return localStorage.getItem("akcs_admin") === "1";
    } catch {
      return false;
    }
  });

  React.useEffect(() => {
    try {
      if (isAdmin) localStorage.setItem("akcs_admin", "1");
      else localStorage.removeItem("akcs_admin");
    } catch {
      // ignore
    }
  }, [isAdmin]);

  const value = React.useMemo(() => ({ isAdmin, setIsAdmin }), [isAdmin]);

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

