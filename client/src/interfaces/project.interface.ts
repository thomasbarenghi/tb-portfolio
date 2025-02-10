export interface IProjectResponse {
  query: string
  result: IProject[]
}

export interface IProjectSingleResponse {
  query: string
  result: IProject
}

export interface IProject {
  title: IDescription
  _rev: string
  slug: ISlug
  content: IDescription
  multimedia: IMultimedia
  completionDate: Date
  featured: boolean
  justDesign: boolean
  _type: string
  description: IDescription
  _id: string
  links: ILinks
  _updatedAt: Date
  _createdAt: Date
  technologies: ITechnologies
}

export interface ISlug {
  _type: string
  current: string
}

export interface IDescription {
  en: string
  es: string
}

export interface ILinks {
  deployLink?: string
  githubLink?: string
}

export interface IMultimedia {
  mainImage: IImage | string
  coverImage: IImage | string
  gallery: IGallery[] | string[]
}

export interface IImage {
  asset: IAsset
  _type: string
}

export interface IAsset {
  _ref: string
  _type: string
}

export interface IGallery {
  _type: string
  _key: string
  asset: IAsset
}

export interface ITechnologies {
  backTecnologies: string
  databaseTecnologies: string
  frontTecnologies: string
}
