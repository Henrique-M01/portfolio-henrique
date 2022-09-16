import { AiFillHeart } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="bg-background-black flex justify-center text-gray-500 font-medium py-5">
      <h1>Desenvolvido por Henrique Martins</h1>
      <p className="ml-10 flex items-center">Usando <AiFillHeart className='ml-1'/>, React.Js e Tailwind CSS</p>
    </footer>
  )
}