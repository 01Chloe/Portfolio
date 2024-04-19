import "../assets/styles/project.scss"
import { Link } from "react-router-dom"

type ProjectProps = {
  item: {
    id: number
    name: string
    desc: string
    cover: string
    images: string[]
    skills: string[]
    date: string
    links: { github?: string; demo?: string }[]
  }
}

const Project = ({ item }: ProjectProps) => {
  return (
    <Link
      to={"/project/" + item.id}
      className="project-container"
      aria-label={`Voir le detail du projet ${item.name}`}
    >
      <img src={item.cover} alt="" className="project-cover" />
      <div className="project-title">
        <h3>{item.name}</h3>
      </div>
    </Link>
  )
}
export default Project
