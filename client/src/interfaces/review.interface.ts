export interface IReviewResponse {
  query: string
  result: IReview[]
  ms: number
}

export interface IReview {
  _updatedAt: Date
  sanityTitle: string
  emitionDate: Date
  _createdAt: Date
  authorImage: IAuthorImage | string
  _type: IResultType
  _id: string
  slug: ISlug
  author: string
  _rev: string
  content: ILanguages
  position: ILanguages
}

export enum IResultType {
  Reviews = 'reviews'
}

export interface IAuthorImage {
  _type: IAuthorImageType
  asset: IAsset
}

export enum IAuthorImageType {
  Image = 'image'
}

export interface IAsset {
  _ref: string
  _type: IAssetType
}

export enum IAssetType {
  Reference = 'reference'
}

export interface ILanguages {
  en: string
  es: string
}

export interface ISlug {
  current: string
  _type: ISlugType
}

export enum ISlugType {
  Slug = 'slug'
}
