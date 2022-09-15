import imageRecipeApp from '../images/recipe-app-foods.png';
import imageDeliveryApp from '../images/delivery-app.png';
import imageArticlesApp from '../images/app-scientific-articles.png';

const projects = [
  {
    name: 'Frontend: App de Receitas - Drinks and Foods',
    description: 'App de receitas de comidas e bebidas, desenvolvido em React, com o objetivo de consumir uma API de receitas. Implementamos algumas funcionalidades extras, como a possibilidade de favoritar receitas, compartilhar receitas, entre outras.',
    image: imageRecipeApp,
    gitHub: 'https://github.com/Henrique-M01/App_receitas',
    techs: 'Javascript, React, Redux, Context API, CSS, HTML, RTL e Metodologias Ágeis',
    deploy: 'https://drinks-and-foods.surge.sh/',
  },
  {
    name: 'Fullstack: App de delivery - Embreagados',
    description: 'Aplicação fullstack desenvolvida do zero, em time de 5 pessoas, com o objetivo de criar um delivery de bebidas. Utilizamos React no frontend, Node.js, autenticações com JWT no backend e MySQL no banco de dados.',
    image: imageDeliveryApp,
    gitHub: 'https://github.com/Henrique-M01/delivery_app',
    techs: 'Javascript, React, redux, CSS, HTML, Node.js, Express, MySQL, Sequelize, JWT e Metodologias Ágeis',
    deploy: false,
  },
  {
    name: 'Backend: API de jogos de campeonato',
    description: 'API desenvolvida em Node.js com Typescript, com o objetivo de criar um campeonato de jogos. Utilizamos o banco de dados MySQL e o ORM Sequelize para persistência dos dados.',
    image: 'https://files.tecnoblog.net/wp-content/uploads/2021/10/back-end.png',
    gitHub: 'https://github.com/Henrique-M01/trybe_futebol_clube',
    techs: 'Typescript, Node.js, Express, MySQL, Sequelize, JWT, Docker, Mocha, Chai e Sinon.',
    deploy: false,
  },
  {
    name: 'Frontend: App Artigos Científicos',
    description: 'Frontend desenvolvido para testar conhecimentos nas tecnologias utilizadas. Consumimos uma Api de artigos científicos, com o objetivo de favoritar artigos e implementar páginações.',
    image: imageArticlesApp,
    gitHub: 'https://github.com/Henrique-M01/challengeMettzer',
    techs: 'Javascript, React, CSS, HTML',
    deploy: 'https://challenge-mettzer-henrique.netlify.app',
  },
];

export default projects;
