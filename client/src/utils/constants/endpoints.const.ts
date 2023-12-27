const Endpoints = {
  WORK_EXPERIENCES:
    '?query=*[_type == "workExperience"] | order(dates.startDate desc)',
  EDUCATIONS: '?query=*[_type == "education"] | order(dates.startDate desc)',
  CERTIFICATIONS:
    '?query=*[_type == "certifications"] | order(emitionDate desc)',
  PROJECTS: '?query=*[_type == "portfolio"] | order(completionDate desc)',
  INDIVIDUAL_PROJECT: (slug: string) =>
    `?query=*[_type == "portfolio"][slug.current == "${slug}"]`
}

export default Endpoints
