import { useState } from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import CardProjects from '../Components/ProjectCard';
import projects from '../utils/Projects';

export default function ProjectsPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-background-black">
      <Header />
      <div className="flex flex-col items-center justify-center py-28">
        <h1 className="text-2xl font-bold text-white-title mt-10">Conheça meus projetos</h1>
        <div className='flex flex-row'>
          <button
            className='mr-5 text-gray-text'
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >{"<"}</button>
          <CardProjects project={projects[count]}/>
          <button
            className='ml-5 text-gray-text'
            onClick={() => {
              if (count < 3) {
                setCount(count + 1);
              } 
            }}
          >{">"}</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}