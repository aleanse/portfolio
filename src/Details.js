// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
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
  tagline: "desenvolvedor Back-end em busca de constante evolução",
  img: aleanse,
  about: `Olá! Meu nome é Aleanse dos Santos Lima Rego, e sou apaixonado pela tecnologia.Em constante busca por evolução,desenvolvi uma paixão pelo mundo da programação e da computação, e essa paixão só cresceu  ao longo dos anos.

  Meu fascínio pela tecnologia me levou a explorar diversas áreas dentro da programação, em especial desenvolvimento web e back-end.Estou sempre ansioso para aprender novas linguagens de programação, frameworks e tecnologias emergentes.
  
  Acredito que a chave para o sucesso na indústria da tecnologia é a constante evolução e aprendizado. Por isso, estou sempre procurando oportunidades para aprimorar minhas habilidades e me manter atualizado com as últimas tendências e práticas recomendadas.
  
  Além do meu interesse pela parte técnica, também valorizo a colaboração e o trabalho em equipe. Acredito que a melhor maneira de alcançar resultados excepcionais é através da troca de conhecimento e da colaboração com colegas talentosos.
  Estou empolgado com as oportunidades que o futuro da tecnologia nos reserva e mal posso esperar para fazer parte dessa jornada emocionante!
  
  `,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Bolsista Jovem Tech : programa de estudo com objetivo de formar jovens programadores. ",
    Company: `pulse`,
    Location: "São Luis MA",
    Type: "Full Time",
    Duration: "jan 2024 - jun 2024",
  },
  
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bacharelado Interdisciplina em Ciência e Tecnologia",
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
    description: `site de receitas onde voçê pode cadastrar suas receitas favoritas, alem de ver as receitas de outros usuarios e pesquisar receitas através de descrição ou ingrediente`,
    techstack: "Python/Django",
    previewLink: "https://google.com",
    githubLink: "https://github.com/aleanse/Recipe_website_with_Django",
  },
  {
    title: "Rede social com chat em tempo real",
    image: projectImage2,
    description: `rede social onde voçê pode seguir outras pessoas, fazer posts, ver numero de seguidores, editar perfil, e o principal, mandar mensagens em tempo real
    utilizando o método web-socket`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 3",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "aleanse_54@hotmail.com",
  phone: "98 987795451",
};
