export default function CardProjects(project) {
  const { name, description, image, gitHub, techs } = project.project;
  return (
    <div className="card flex flex-row justify-between bg-backgound-header rounded-3xl mt-10">
      <div className="card-image">
        <img src={image} alt="foto"/>
      </div>
      <div className='flex flex-col'>
        <h1 className='mt-5 mb-10'>{ name }</h1>
        <p className='mb-10'>{ description }</p>
        <p>{ `Tecnologias utilizadas: ${techs}` }</p>
        <a href={ gitHub } target="_blank" rel="noreferrer">Acesse o repositório do projeto aqui</a>
      </div>
    </div>
  )
}
