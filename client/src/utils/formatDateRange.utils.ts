/* eslint-disable @typescript-eslint/indent */
export const formatDateRange = (
  startDate: Date,
  endDate: Date | null,
  language: LangType,
  isCurrent?: boolean
): string => {
  // Get month and year names in the specified language
  const presentString = language === 'en' ? 'Present' : 'Actualidad'
  const monthFormatOptions: Intl.DateTimeFormatOptions = { month: 'short' }
  const yearFormatOptions: Intl.DateTimeFormatOptions = { year: 'numeric' }

  const startMonth = new Intl.DateTimeFormat(
    language,
    monthFormatOptions
  ).format(startDate)
  const endMonth = isCurrent
    ? presentString
    : endDate
    ? new Intl.DateTimeFormat(language, monthFormatOptions).format(endDate)
    : ''

  const startYear = new Intl.DateTimeFormat(language, yearFormatOptions).format(
    startDate
  )
  const endYear = isCurrent
    ? ''
    : endDate
    ? new Intl.DateTimeFormat(language, yearFormatOptions).format(endDate)
    : ''

  // Format the result
  const result: string =
    `${startMonth} ${startYear} - ${endMonth} ${endYear}`.trim()

  return result
}

export const formatDate = (date: Date, language: string): string => {
  // Get month and year names in the specified language
  const monthFormatOptions: Intl.DateTimeFormatOptions = { month: 'short' }
  const yearFormatOptions: Intl.DateTimeFormatOptions = { year: 'numeric' }

  const month = new Intl.DateTimeFormat(language, monthFormatOptions).format(
    date
  )
  const year = new Intl.DateTimeFormat(language, yearFormatOptions).format(date)

  // Format the result
  const result: string = `${month} ${year}`

  return result
}
