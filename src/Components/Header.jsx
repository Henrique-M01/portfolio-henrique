import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">{"<Henrique />"}</Link>
      <nav>
        <Link to="/about">Sobre</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  )
}