export interface Project {
  name: string,
  from: Date,
  to?: Date,
  sector: string,
  technologies: string[],
  target: string,
  role: string,
  tasks: string[]
}
