export interface IWorkExpResponse {
  query: string
  result: IWorkExperience[]
  ms: number
}

export interface IWorkExperience {
  description: ILanguages
  sanityTitle: string
  slug: ISlug
  _updatedAt: Date
  _createdAt: Date
  _rev: string
  dates: IDates
  _type: string
  _id: string
  position: ILanguages
  company: ILanguages
}

export interface ILanguages {
  en: string
  es: string
}

export interface IDates {
  isCurrent: boolean
  startDate: Date
  endDate: Date
}

export interface ISlug {
  current: string
  _type: string
}
