export const sortProjects = (projects: any, featured: boolean) => {
  let sortedProjects = [...projects] // Hacemos una copia del arreglo original

  if (featured) {
    sortedProjects = sortedProjects.filter((item: any) => item.featured)
  }

  sortedProjects.sort((a: any, b: any) => {
    // Convertimos las fechas a objetos Date
    const dateA = new Date(a.completionDate)
    const dateB = new Date(b.completionDate)

    // Comparamos las fechas y retornamos el resultado de la comparación
    return dateB.getTime() - dateA.getTime()
  })

  return sortedProjects
}
