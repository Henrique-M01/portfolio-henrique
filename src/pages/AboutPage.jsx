import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import logosTech from "../images/logosTech.png";

export default function AboutPage() {

  const navigate = useNavigate();
  const URL = "https://www.betrybe.com/?utm_source=google&utm_medium=cpc&utm_campaign=pmax&utm_content=ad1&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNEPVG1paGkptdTEP8RNwzruDKZLAT-LQ_ga8O8l10PJo-cjBfbWI2RoCpHsQAvD_BwE";

  return (
    <div className="bg-background-black">
      <Header />
      <div className="flex justify-center">
        <p className="pt-60 ml-20 text-2xl text-gray-text font-semibold max-w-3xl">
          Prazer! Me chamo Henrique Martins.<br /> <br />
          Tenho 21 anos, sou estudante de programação na
          <a target="_blank" href={ URL } rel="noreferrer" className="hover:text-purple-bottom delay-100"> Trybe </a>
           onde atualmente estou estudando backend utilizando Node.Js com o express, TypeScript, Banco de dados
          (MySQL) e NoSQL(MongoDB). Já passei pelo bloco de frontend assim como o de fundamentos, onde pude conhecer JavaScript
          utilizando React.Js juntamente com Redux e/ou context-API. Possuo conhecimentos em HTML e CSS.<br /> <br />
          Juntamente a isso, me apliquei a um bootcamp na área de dados, conhecendo o famoso Python e dando aquela pincela em servidores cloud
          como (AWS, Azure, Google Cloud).<br /> <br />
          Estou em busca da minha primeira oportunidade na área de tecnologia e gostaria de poder com você, que tal me conhecer melhor?
          <br />
          <button
            onClick={() => navigate('/contact')}
            className="mt-5 ml-5 bg-purple-bottom py-3 px-16 rounded-xl text-white-title hover:bg-purple-800 delay-100"
          >
            Fale Comigo!
          </button>
        </p>
        <img
          className="w-1/3 h-1/3 pt-48 mb-48 mr-20 ml-20"
          src={ logosTech }
          alt="Imagens de logotipos de tecnologias"
        />
      </div>
      <Footer />
    </div>
  )
}