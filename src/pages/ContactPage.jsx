import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import imgHangLose from '../images/img_hanglose (1).png';

export default function ContactPage() {
  return (
    <div>
      <Header />
      <div className="pt-28 bg-background-black">
        <h1 className="flex justify-center mt-24 text-5xl font-bold text-white-title">Fale comigo!</h1>
        <div className="flex justify-around">
          <div className="text-gray-text text-4xl font-semibold flex flex-col justify-center py-26 ml-28">
            <button
              onClick={ () => {
                navigator.clipboard.writeText('hickm018@gmail.com')
                alert('Email copiado com sucesso!')
              }}
              className="mb-10 flex items-center font-semibold hover:text-purple-800 delay-100"
            >
              <AiOutlineMail className="mr-2 w-10"/>
              hickm018@gmail.com
            </button>
            <a
              className="mb-10 flex items-center hover:text-purple-800 delay-100"
              href="https://contate.me/henrique_dev"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp className="mr-2 w-10"/>
              (55) 51 99777-4196
            </a>
            <a
              className="mb-5 flex items-center hover:text-purple-800 delay-100"
              href="https://www.venancioaires.rs.gov.br/"
              target="_blank"
              rel="noreferrer"
            >
              < BiMap className="mr-2 w-10"/>
              Venâncio Aires - RS
            </a>
          </div>
          <img
            className="rounded-b-full opacity-50 brightness-100 relative min-w-min h-full"
            alt="Imagem de Henrique Martins sorrindo"
            src={ imgHangLose }
          />
        </div>
        <div className="flex justify-center pb-20">
          <a
            className="hover:text-purple-800 delay-100 mr-20"
            href="https://www.linkedin.com/in/henrique-martins01/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={70} />
          </a>
          <a
            className="hover:text-purple-800 delay-100 mr-20"
            href="https://github.com/Henrique-M01"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={70}/>
          </a>
          <a
            className="hover:text-purple-800 delay-100"
            href="https://www.instagram.com/hmartinswd2/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={70}/>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}