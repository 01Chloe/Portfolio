import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import arrowLeft from "/img/icons/arrow-left.svg"
import { useFetchData } from "../hookCustom/useFetchData"
import Logo from "../components/Logo"
import "../assets/styles/projectDetails.scss"

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

const ProjectDetails = () => {
  const { id } = useParams()
  const projectId = id ? parseInt(id) : undefined

  const projectData = useFetchData<{ projects: Project[] }>(
    "/data/projects.json"
  )
  const projectDetails = projectId
    ? projectData?.projects[projectId - 1]
    : undefined

  useEffect(() => {
    if (projectDetails) {
      document.title = `Allier Chloé - ${projectDetails.name}`
    }
  }, [projectDetails])

  if (!projectDetails) return null

  return (
    <main className="project-details-container">
      <Link to="/projects">
        <img
          src={arrowLeft}
          alt="Retourner à la page des projets"
          className="arrow-left-btn"
        />
      </Link>
      <div className="project-content">
        <div className="project-top">
          <h2>{projectDetails.name}</h2>
          <p className="project-date">{projectDetails.date}</p>
        </div>
        <img
          src={projectDetails.cover}
          alt={projectDetails.name}
          className="project-image"
        />
        <div className="project-skills-container">
          {projectDetails.skills.map((skill: string, index: number) => (
            <Logo
              logoName={skill}
              logoImg={`/img/icons/${skill.toLowerCase()}.svg`}
              key={index}
            />
          ))}
        </div>
        <p className="project-description">{projectDetails.desc}</p>
        {projectDetails.links.map(
          (link: { github?: string; demo?: string }, index: number) => (
            <div className="projects-links-container" key={index}>
              {link.github && (
                <a
                  href={link.github}
                  target="_blank"
                  aria-label={`Voir le code du site ${projectDetails.name}`}
                  className="link-details"
                >
                  GitHub
                </a>
              )}
              {link.demo && (
                <a
                  href={link.demo}
                  target="_blank"
                  aria-label={`Visiter le site ${projectDetails.name}`}
                  className="link-details"
                >
                  Visiter
                </a>
              )}
            </div>
          )
        )}
        <div className="project-images-container">
          {projectDetails.images.map((img: string, index: number) => (
            <img
              src={img}
              alt={projectDetails.name}
              key={index}
              className="project-img"
            />
          ))}
        </div>
      </div>
    </main>
  )
}
export default ProjectDetails
