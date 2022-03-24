import Footer from "../Components/Footer";
import Header from "../Components/Header";
import img from "../images/foto.png";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center bg-background-black h-screen">
        <div className="text-gray-text text-5xl font-bold px-10 max-w-4xl">
          <p>
            "Você é o único representante do seu sonho
            na face da terra. Se isso não fizer você correr, chapa.
            Eu não sei o que vai."
          </p>
          <p className="mt-4 ml-1">Emicida.</p>
        </div>
        <img
          className="relative z-1 w-1/4 min-w-min h-full rounded-b-full rotate-6 opacity-50 brightness-100"
          src={ img }
          alt="Foto do Henrique sorrindo"
        />
      </div>
      <Footer />
    </div>
   
  )
} 