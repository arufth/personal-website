
export interface ProjectType {
  id: number
  name: string
  subtitle: string
  description: string
  keywords: string[]
  status: string
  github: string
  demo: string
  image: string
}

export interface ProjectsType {
  projects: ProjectType[]
}

// export interface Image {
//   id: number
//   title: string
//   description: string
//   url: string
// }

// export interface Images {
//   images: Image[]
// }
