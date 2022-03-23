import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="z-10 fixed flex justify-between bg-backgound-header w-full">
      <Link to="/" className="ml-28 text-4xl font-semibold font-sans text-white-title my-8 hover:text-purple-bottom delay-100">{"<Henrique />"}</Link>
      <nav className="mr-28 my-9 text-2xl text-white-title font-sans font-medium">
        <Link to="/about" className="mr-8 z-10 hover:text-purple-bottom delay-100">Sobre</Link>
        <Link to="/projects" className="mr-8 z-10 hover:text-purple-bottom delay-100">Projetos</Link>
        <Link to="/contact" className="z-10 hover:text-purple-bottom delay-100">Contato</Link>
      </nav>
    </header>
  )
}