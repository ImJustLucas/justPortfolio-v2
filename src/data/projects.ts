import { ProjectType } from '@typesDef/project'

import Musy from '@static/images/projects/musy.jpg'
import Tricks from '@static/images/projects/tricks.jpg'
import JustPortfolio from '@static/images/projects/justportfolio-v1.png'
import JustPortfolioV2 from '@static/images/projects/justportfolio-v2.png'

const projects: ProjectType[] = [
  {
    header: {
      title: 'The Tricks Network',
      description: 'Share the action, live your passion',
      image: Tricks,
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
      image: Musy,
      date: '2023 - 202X',
    },
    url: 'https://musy.app',
    tags: [{ name: 'nuxt 3' }, { name: 'TypeScript' }],
    role: 'President',
    description:
      "Musy est un jeu en ligne innovant sur le thème de la musique, nous proposons des blindtests, des questions de culture musicale mettant en compétitions les joueurs, et d'autres mini-jeux.",
  },
  {
    header: {
      title: 'Just Portfolio - v2',
      description: 'JustPortfolio v2 2023 imagined and created by @ImJustLucas',
      image: JustPortfolioV2,
      date: '2023',
    },
    url: 'https://lucasblti.fr',
    tags: [
      { name: 'Next' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Styled Component' },
    ],
    role: 'Creator, Developer',
    description:
      'JustPortfolio v2 is a magnificent portoflio imagined and created by Lucas BELLIER (@ImJustLucas).',
  },
  {
    header: {
      title: 'Just Portfolio - v1',
      description: 'JustPortfolio v1 2021 créé et imaginé par ImJustLucas',
      image: JustPortfolio,
      date: '2021',
    },
    url: 'https://justportfolio-2021.pages.dev/',
    tags: [
      { name: 'Nuxt' },
      { name: 'Vue' },
      { name: 'Sass' },
      { name: 'iTyped' },
    ],
    role: 'Creator, Developer',
    description:
      'JustPortfolio v1 is a portoflio imagined and created by Lucas BELLIER (@ImJustLucas)',
  },
]
export default projects
