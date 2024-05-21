import React, { useContext, createContext } from "react";
import useStorage from "@/lib/useStorage";
import { useRouter } from "next/router";

type AuthType = {
  setUpLogin: (data: { access: string; refresh: string }) => void;
  logOut: () => void;
  isAccess: string;
};

export const AuthContext = createContext<AuthType | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const { getItem, setItem, removeItem } = useStorage();
  const router = useRouter();

  const isAccess = getItem("access-token");

  const logOut = () => {
    removeItem("access-token");
    removeItem("refresh-token");
    router.reload();
  };

  const setUpLogin = (data: { access: string; refresh: string }) => {
    setItem("access-token", JSON.stringify(data?.access));
    setItem("refresh-token", JSON.stringify(data?.refresh));
  };

  const value: AuthType = {
    setUpLogin,
    logOut,
    isAccess,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;