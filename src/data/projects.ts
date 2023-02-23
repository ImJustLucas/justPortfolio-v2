import { ProjectType } from '@typesDef/project'

const projects: ProjectType[] = [
  {
    header: {
      title: 'Project 1',
      description: 'Project 1 description',
      image: 'https://via.placeholder.com/150',
      date: '2020-01-01',
    },
    description: 'Project 1 description',
    url: 'https://github.com',
    tags: {
      'tag-1': 'Tag 1',
      'tag-2': 'Tag 2',
      'tag-3': 'Tag 3',
    },
  },
]
export default projects
