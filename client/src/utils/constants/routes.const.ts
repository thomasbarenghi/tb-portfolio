const Routes = {
  HOME: (lang: LangType) => `/${lang}`,
  WORK: (lang: LangType) => `/${lang}/work`,
  RESUME: (lang: LangType) => `/${lang}/resume`
}

export const Paths = {
  HOME: '/[lang]',
  WORK: '/[lang]/work',
  RESUME: '/[lang]/resume'
}

export default Routes
