import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Bem vindo!</h1>
      <Link to="/login">Entrar</Link>
    </>
  );
}
