import { TechType } from '@typesDef/tech'

import Nuxt from '@static/images/technologies/nuxt.svg'
import Next from '@static/images/technologies/next.svg'
import TS from '@static/images/technologies/typescript.svg'
import Vue from '@static/images/vuejs-logo.png'
import React from '@static/images/technologies/react.svg'
import Nest from '@static/images/technologies/nestjs.svg'

const Technologies: TechType[] = [
  {
    name: 'Nuxt',
    description:
      'Nuxt.js is a free and open source web application framework based on Vue.js & Node.js',
    image: Nuxt,
    date: 'since 2021',
  },
  {
    name: 'Next',
    description:
      'Next.js is a free and open source web application framework based on React.js developed by Vercel',
    image: Next,
    date: 'since 2023',
  },
  {
    name: 'Nest',
    description:
      'Nest.js is a progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    image: Nest,
    date: 'since 2023',
  },
  {
    name: 'TypeScript',
    description:
      'TypeScript is a free and open source programming language based on Javascript developed and maintained by Microsoft',
    image: TS,
    date: 'since 2022',
  },
  {
    name: 'Vue',
    description:
      'Vue.js is a free and open source web application framework based on Javascript',
    image: Vue,
    date: 'since 2021',
  },
  {
    name: 'React',
    description:
      'React is a free and open source web application framework based on Javascript',
    image: React,
    date: 'since 2022',
  },
]

export default Technologies
