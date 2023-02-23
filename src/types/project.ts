export interface ProjectType {
  header: ProjectHeaderType
  description: string
  url: string
  tags: ProjectTagsType
}

export interface ProjectHeaderType {
  title: string
  description: string
  image: string
  date: string
}

export interface ProjectTagsType {
  [key: string]: string
}
