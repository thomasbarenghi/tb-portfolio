const Endpoints = {
  PROJECTS: '?query=*[_type == "portfolio"]',
  INDIVIDUAL_PROJECT: (slug: string) =>
    `?query=*[_type == "portfolio"][slug.current == "${slug}"]`
}

export default Endpoints
