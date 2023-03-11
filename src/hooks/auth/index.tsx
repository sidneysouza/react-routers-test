import React, { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface ILogin {
  username: string;
  password: string;
}
type AuthContextProps = {
  login: ({ username, password }: ILogin) => void;
  logout: () => void;
  // cookies: { [x: string]: any };
  isAuthenticated: () => boolean;
};

type AuthProviderProps = {
  children: JSX.Element;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [cookies, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();

  const login = async ({ username, password }: ILogin) => {
    if (username === "admin" && password === "123") {
      setCookies("reactrouter.token", "Aqu1v4UmT0k3n", {});
      navigate("/dashboard");
    } else {
      throw new Error("Usuário e/ou senha inválidos.");
    }
  };

  const logout = () => {
    removeCookie("reactrouter.token");
    navigate("/login");
  };

  const isAuthenticated = (): boolean => {
    return !!cookies["reactrouter.token"];
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
    }),
    [cookies]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
