import { StaticImageData } from 'next/image'

export interface ProjectType {
  header: ProjectHeaderType
  description: string
  url: string
  tags: ProjectTagsType[]
  role: string
}

export interface ProjectHeaderType {
  title: string
  description: string
  image: StaticImageData
  date: string
}

export interface ProjectTagsType {
  [key: string]: string
}
