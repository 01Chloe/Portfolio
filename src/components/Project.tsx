import "../assets/styles/project.scss"
import Logo from "./Logo"

type ProjectProps = {
  item: {
    id: number
    name: string
    desc: string
    cover: string
    skills: string[]
    date: string
    tags: string[]
    links: { github?: string; demo?: string }[]
  }
}

const Project = ({ item }: ProjectProps) => {
  return (
    <div className="project-container">
      <img src={item.cover} alt={item.name} className="project-cover" />
      <div className="project-content">
        <h3>{item.name}</h3>
        <p className="project-date">{item.date}</p>
        <div className="project-skills-container">
          {item.skills.map((skill: string, index: number) => (
            <Logo
              logoName={skill}
              logoImg={`./img/icons/${skill.toLowerCase()}.svg`}
              logoSmall={true}
              key={index}
            />
          ))}
        </div>
        {item.links.map(
          (link: { github?: string; demo?: string }, index: number) => (
            <div className="projects-links-container" key={index}>
              {link.github && (
                <a href={link.github} target="_blank">
                  GitHub
                </a>
              )}
              {link.demo && (
                <a href={link.demo} target="_blank">
                  Aperçu
                </a>
              )}
            </div>
          )
        )}
      </div>
    </div>
  )
}
export default Project
