import { StaticImageData } from 'next/image'

export interface TechType {
  name: string
  description: string
  image: string | StaticImageData
  date: string
}
