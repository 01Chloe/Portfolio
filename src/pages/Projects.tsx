import "../assets/styles/projects.scss"
import { useFetchData } from "../hookCustom/useFetchData"
import { useEffect } from "react"
import Project from "../components/Project"

const Projects = () => {
  const projectsList = useFetchData<{
    projects: {
      id: number
      name: string
      desc: string
      cover: string
      skills: string[]
      date: string
      links: { github?: string; demo?: string }[]
    }[]
  }>("/data/projects.json")

  useEffect(() => {
    document.title = "Allier Chloé - Projets"
  }, [])
  return (
    <main>
      <section className="section-projects">
        <h2>Projets</h2>
        <div className="projects-container">
          {Array.isArray(projectsList?.projects) &&
            projectsList.projects.map(
              (item: {
                id: number
                name: string
                desc: string
                cover: string
                skills: string[]
                date: string
                links: { github?: string; demo?: string }[]
              }) => <Project item={item} key={item.id} />
            )}
        </div>
      </section>
    </main>
  )
}
export default Projects
