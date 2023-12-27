export interface ICertificationResponse {
  query: string
  result: ICertification[]
}

export interface ICertification {
  _id: string
  emitionDate: Date
  _rev: string
  _createdAt: Date
  slug: ISlug
  _type: string
  sanityTitle: string
  _updatedAt: Date
  degree: ILanguages
  institution: ILanguages
}

export interface ILanguages {
  es: string
  en: string
}

export interface ISlug {
  _type: string
  current: string
}
