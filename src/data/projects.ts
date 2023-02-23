import { ProjectType } from '@typesDef/project'

const projects: ProjectType[] = [
  {
    header: {
      title: 'The Tricks Network',
      description: 'Share the action, live your passion',
      image: 'https://via.placeholder.com/100',
      date: '2021 - 202X',
    },
    url: 'https://thetricksnetwork.com/platforms/tricks-social/',
    tags: [
      { name: 'nuxt' },
      { name: 'strapi' },
      { name: 'JavaScript' },
      { name: 'Vue.js' },
      { name: 'Node.js' },
    ],
    role: 'Web Developer',
    description:
      'Réalisation réseau social destiné au sport extrêmes sur les plateformes web et mobile',
  },
  {
    header: {
      title: 'MUSY',
      description: 'Ton nouveau terrain de jeu musical',
      image: 'https://via.placeholder.com/100',
      date: '2023 - 202X',
    },
    url: 'https://musy.app',
    tags: [{ name: 'nuxt 3' }, { name: 'TypeScript' }],
    role: 'Creator, President, Developer',
    description:
      "Musy est un jeu en ligne innovant sur le thème de la musique, nous proposons des blindtests, des questions de culture musicale mettant en compétitions les joueurs, et d'autres mini-jeux.",
  },
]
export default projects
