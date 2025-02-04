export interface ProjectType {
  title: string;
  description: string;
  libraries: Array<string>;
  image: string;
  link: string;
}

export const projects: Array<ProjectType> = [
  {
    title: "Minerva",
    description:
      "Aplicação WEB criada para diminuir o trabalho manual de planejamento escolar e facilitar o acesso dos pais à situação do aluno.",
    libraries: ["NextJS", "TypeScript", "Tanstack", "Tailwind"],
    image: "/images/minerva-01.jpg",
    link: "https://minerva-gamma.vercel.app",
  },
  {
    title: "Portfólio",
    description:
      "Aplicação WEB que expõe dados públicos de usuários do GitHub, através de sua API. Esse foi o primeiro projeto em que consumi uma API.",
    libraries: ["ReactJS", "Typescript", "CSS", "HTML"],
    image: "/images/portfolio-01.jpg",
    link: "#hero",
  },
  {
    title: "Desenvolvimento",
    description:
      "Lorem ipsum dolor sit amet. Aut similique vero non consequatur malaquitus eaque vel molestias esse. Hic exercitationem.",
    libraries: ["Em", "Breve", "Em", "Breve"],
    image: "/images/foto-desenvolvimento.jpg",
    link: "#projects",
  },
];
