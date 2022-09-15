export default function CardProjects(project) {
  const { name, description, image, gitHub, techs } = project.project;
  return (
    <div className="card flex flex-row justify-between bg-backgound-header rounded-3xl mt-10 text-xl text-gray-text font-semibold">
      <div className="w-1/2 flex justify-center mr-10 pl-7 pb-6 pt-6">
        <img src={image} alt="foto" className='rounded-md'/>
      </div>
      <div className='flex flex-col'>
        <h1 className='mt-5 mb-10 text-white-title'>{ name }</h1>
        <p className='mb-10'>{ description }</p>
        <p>{ `Tecnologias utilizadas: ${techs}` }</p>
        <a
          className='mt-20 hover:text-purple-bottom delay-100 cursor-pointer mb-10'
          href={ gitHub }
          target="_blank"
          rel="noreferrer"
        >
          Acesse o repositório do projeto aqui
        </a>
      </div>
    </div>
  )
}
