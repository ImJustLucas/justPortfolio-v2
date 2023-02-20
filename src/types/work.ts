export interface WorkType {
  header: WorkHeaderType
  description: string
  url: string
  tags: WorkTagsType
}

export interface WorkHeaderType {
  title: string
  description: string
  image: string
  date: string
}

export interface WorkTagsType {
  [key: string]: string
}
