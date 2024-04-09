import "../assets/styles/projects.scss"
import { useFetchData } from "../hookCustom/useFetchData"
import { useEffect } from "react"
import Project from "../components/Project"

interface Project {
  id: number
  name: string
  desc: string
  cover: string
  images: string[]
  skills: string[]
  date: string
  links: { github?: string; demo?: string }[]
}

const Projects = () => {
  const projectsList = useFetchData<{ projects: Project[] }>(
    "/data/projects.json"
  )

  useEffect(() => {
    document.title = "Allier Chloé - Projets"
  }, [])
  return (
    <main>
      <section className="section-projects">
        <h2>Projets</h2>
        <p className="projects-desc">
          Je suis <strong>Chloé Allier</strong>,{" "}
          <strong>développeuse web front-end</strong>.
          <br />
          Dans ce <strong>portfolio</strong>, je vous invite à découvrir une
          sélection variée de projets, allant de mes{" "}
          <strong>dernières réalisations</strong> à des{" "}
          <strong>travaux personnels </strong>
          significatifs.
          <br />
          Chacun de ces <strong>projets</strong> a représenté pour moi un défi
          stimulant et enrichissant, et j'espère qu'ils vous inspireront autant
          qu'ils ont été pour moi une source d'apprentissage.
        </p>
        <div className="projects-container">
          {Array.isArray(projectsList?.projects) &&
            projectsList.projects.map(
              (item: {
                id: number
                name: string
                desc: string
                cover: string
                images: string[]
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
