import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
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
  const navigate = useNavigate()

  const [prevProjectId, setPrevProjectId] = useState<number | null>(null)
  const [nextProjectId, setNextProjectId] = useState<number | null>(null)

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
    if (projectId !== undefined && projectId > 0) {
      setPrevProjectId(projectId - 1)
    }
    if (
      projectId !== undefined &&
      projectData?.projects &&
      projectId < projectData.projects.length
    ) {
      setNextProjectId(projectId + 1)
    } else {
      setNextProjectId(null)
    }
  }, [projectDetails, projectId, projectData])

  const goToPrevProject = () => {
    if (prevProjectId !== null) {
      navigate(`/project/${prevProjectId}`)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const goToNextProject = () => {
    if (nextProjectId !== null) {
      navigate(`/project/${nextProjectId}`)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

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
              <a
                href={link.github ? link.github : "#"}
                target="_blank"
                aria-label={
                  link.github
                    ? `Voir le code du site ${projectDetails.name}`
                    : ""
                }
                className={link.github ? "link" : "link link-disabled"}
              >
                GitHub
              </a>
              <a
                href={link.demo ? link.demo : "#"}
                target="_blank"
                aria-label={
                  link.demo ? `Visiter le site ${projectDetails.name}` : ""
                }
                className={link.demo ? "link" : "link link-disabled"}
              >
                Visiter
              </a>
            </div>
          )
        )}
      </div>
      <div className="project-images-container">
        {projectDetails.images.map((img: string, index: number) => (
          <img
            src={img}
            alt={projectDetails.name}
            key={index}
            className={
              img.includes("desktop")
                ? "project-img img-desktop"
                : "project-img"
            }
          />
        ))}
      </div>
      <div className="btn-group">
        <button
          onClick={() => goToPrevProject()}
          className="count-btn"
          disabled={prevProjectId === 0}
          aria-label="Voir le projet précédent"
        >
          Précédent
        </button>
        <button
          onClick={() => goToNextProject()}
          className="count-btn"
          disabled={nextProjectId === null}
          aria-label="Voir le projet suivant"
        >
          Suivant
        </button>
      </div>
    </main>
  )
}
export default ProjectDetails
