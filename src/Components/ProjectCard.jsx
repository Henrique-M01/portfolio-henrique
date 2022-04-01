import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logosTech from "../images/logosTech.png";
import img from "../images/foto.png";

export default function CardProjects() {
  return (
    <Carousel className='h-screen flex flex-col justify-center py-24' width="50%" autoPlay={ true } infiniteLoop={ true }>
      <div>
        <img src={logosTech} alt="Logos de tecnologias" className='w-10' />
        <p>Logo sobre as techs</p>
      </div>
      <div>
        <img src={img} alt="Logos de tecnologias" />
        <p>Imagem do Henrique</p>
      </div>
    </Carousel>
  )
}