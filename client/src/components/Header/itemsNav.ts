import Routes from '@/utils/constants/routes.const'

export interface ItemNav {
  name: string
  path: string
}

export const itemsNav = (lang: LangType, navigation: any) => [
  {
    name: navigation.home,
    path: Routes.HOME(lang)
  },
  {
    name: navigation.work,
    path: Routes.WORK(lang)
  },
  {
    name: navigation.resume,
    path: Routes.RESUME(lang)
  }
]
