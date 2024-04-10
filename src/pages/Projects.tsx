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
          Certains projets ont été réalisés durant ma{" "}
          <strong>formation OpenClassrooms</strong>. Bien qu'ils soient
          fonctionnels, certaines interactions peuvent manquer, telles que des
          boutons sans action au clic non requis dans le projet.
          <br />
          Ils demeurent cependant représentatifs de mes compétences et de mon
          apprentissage en développement web.
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
