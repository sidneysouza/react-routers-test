import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export function LoginPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login({ username, password });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
          placeholder="usuário"
          value={username}
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="senha"
          value={password}
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
