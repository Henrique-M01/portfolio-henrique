import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import logosTech from "../images/logosTech.png";

export default function AboutPage() {

  const navigate = useNavigate();

  return (
    <div className="bg-background-black">
      <Header />
      <div className="flex justify-center">
        <p className="pt-40 ml-20 text-2xl text-gray-text font-semibold max-w-3xl">
          Prazer! Me chamo Henrique Martins.<br /> <br />
          Tenho 22 anos, sou Desenvolvedor Fullstack. <br /> <br />
          Atualmente estou finalizando o curso de desenvolvimento web da Trybe.
          Trabalho meio periodo em uma lancheria onde desenvolvo diversas softskils, como trabalho em equipe, liderança, resolução de conflitos, entre outras. <br /> <br />
          Nas horas vagas gosto de assistir a e-sports, cozinhar e aprender algo novo. <br /> <br />
          Estou em busca de uma oportunidade na área de tecnologia, que tal me conhecer melhor?
          <br />
          <button
            onClick={() => navigate('/contact')}
            className="mt-20 ml-5 bg-purple-bottom py-3 px-16 rounded-xl text-white-title hover:bg-purple-800 delay-100"
          >
            Fale Comigo!
          </button>
        </p>
        <img
          className="w-1/3 h-1/3 pt-48 mb-48 mr-20 ml-20 hover:animate-pulse"
          src={ logosTech }
          alt="Imagens de logotipos de tecnologias"
        />
      </div>
      <Footer />
    </div>
  )
}