import React from "react";
import { AuthProvider } from "./auth";

type AuthProviderProps = {
  children: JSX.Element;
};

const AppProvider = ({ children }: AuthProviderProps) => (
  <>
    <AuthProvider>{children}</AuthProvider>
  </>
);

export default AppProvider;
