import { useAuth } from "../../hooks/auth";

export function Dashboard() {
  const { cookies, logout } = useAuth();
  console.log(cookies);
  return (
    <>
      <h1>Dashboard Home</h1>
      <button onClick={logout}>Sair</button>
    </>
  );
}
