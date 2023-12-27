export interface IEducationResponse {
  query: string
  result: IEducation[]
  ms: number
}

export interface IEducation {
  institution: ILanguages
  _createdAt: Date
  sanityTitle: string
  degree: ILanguages
  _updatedAt: Date
  slug: ISlug
  _type: string
  description: ILanguages
  _id: string
  _rev: string
  dates: IDates
}

export interface IDates {
  isCurrent: boolean
  endDate: Date
  startDate: Date
}

export interface ILanguages {
  en: string
  es: string
}

export interface ISlug {
  current: string
  _type: string
}
