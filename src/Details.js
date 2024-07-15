// Enter all your detials in this file
// Logo images
import logogradient from "./assets/cover.png";
import logo from "./assets/logo2.svg";
// Profile Image
//import profile from "./assets/profile.jpg";
//import aleanse from "./assets/aleanse.jpg";
import aleanse from "./assets/aleanse.jpeg";
// Tech stack images
// import html from "./assets/techstack/html.png";
// import css from "./assets/techstack/css.png";
// import js from "./assets/techstack/js.png";
// import vscode from "./assets/techstack/vscode.png";
// import github from "./assets/techstack/github.png";
// import git from "./assets/techstack/git.png";
// import figma from "./assets/techstack/figma.png";
// import python from "./assets/techstack/python.png";
// import java from "./assets/techstack/java.png";
// import django from "./assets/techstack/django.png";
// import spring from "./assets/techstack/spring.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Aleanse dos Santos",
  tagline: "Desenvolvedor Back-end em busca de constante evolução",
  img: aleanse,
  about: `Olá! Meu nome é Aleanse dos Santos Lima Rego, sou apaixonado pela tecnologia. Em constante busca por evolução,desenvolvi uma paixão pelo mundo da programação e da computação, e essa paixão só cresceu  ao longo dos anos.

  Meu fascínio pela tecnologia me levou a explorar diversas áreas dentro da programação, em especial desenvolvimento web e back-end. Estou sempre ansioso para aprender novas linguagens de programação, frameworks e tecnologias emergentes.
  
  Acredito que para alcançar o sucesso na indústria da tecnologia é necessario a constante evolução e aprendizado. Por isso, estou sempre procurando oportunidades para aprimorar minhas habilidades e me manter atualizado com as últimas tecnologias e práticas recomendadas.
  
  Além do meu interesse pela parte técnica, também valorizo a colaboração e o trabalho em equipe. Acredito que a melhor maneira de alcançar resultados excepcionais é através da troca de conhecimento e da colaboração com colegas talentosos.
  Estou empolgado com as oportunidades que o futuro da tecnologia nos reserva e mal posso esperar para fazer parte dessa jornada emocionante!.
  
  `,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/aleanse",
  github: "https://www.github.com/aleanse",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Bolsista Jovem Tech : programa de estudo com objetivo de formar jovens programadores. ",
    Company: `pulse`,
    Location: "São Luis MA",
    Type: "Presencial",
    Duration: "jan 2024 - jun 2024",
  },
  
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bacharelado Interdisciplinar em Ciência e Tecnologia",
    Company: "UFMA",
    Location: "São luís MA ",
    Type: "Presencial",
    Duration: "out 2021 - jan 2025",
  },
  {
    Position: "Engenharia da Computação",
    Company: `UFMA`,
    Location: "São luís MA",
    Type: "Presencial",
    Duration: "out 2021 - out 2026",
  },
];

// Tech Stack and Tools
// export const techStackDetails = {
//   html: html,
//   css: css,
//   js: js,
//   vscode: vscode,
//   git: git,
//   github: github,
//   figma: figma,
//   java: java,
//   python: python,
//   django: django,
//   spring: spring,
// };

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Site de Receitas",
    image: projectImage1,
    description: `Site de receitas feito em Django. O site permite que os usuários se registrem, façam login e gerenciem suas contas, além de publicarem receitas com detalhes, como título, ingredientes, modo de preparo e imagens. A plataforma inclui uma função de busca avançada para encontrar receitas por nome, ingredientes ou categorias, ajudando os usuários a identificar as melhores opções. Um dashboard de administração está disponível para gerenciar usuários, receitas e categorias.Este projeto utiliza Django no backend, e MySQL como banco de dados`,
    techstack: "Python/Django",
    previewLink: "https://google.com",
    githubLink: "https://github.com/aleanse/Recipe_website_with_Django",
  },
  {
    title: "Rede social com chat em tempo real",
    image: projectImage2,
    description: `Rede social feita em Django, construida para conectar usuários e proporcionar uma experiência de interação e dinâmica. A plataforma permite que os usuários se registrem, façam login e gerenciem seus perfis, além de publicar postagens, comentar e curtir conteúdos de outros usuários. Uma das principais funcionalidades é o chat em tempo real, que possibilita conversas entre os usuários, A rede social também inclui um sistema de notificações para manter os usuários atualizados sobre as mensagens recebidas. Utilizei Django no backend, e MySQL como banco de dados(projeto em andamento)`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/aleanse",
  },
  {
    title: "Project title 3",
    image: projectImage3,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/aleanse",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/aleanse",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/aleanse",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/aleanse",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "aleanse_54@hotmail.com",
  phone: "98 987795451",
};
