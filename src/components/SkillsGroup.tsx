import Logo from "../components/Logo"
import { useFetchData } from "../hookCustom/useFetchData"
import "../assets/styles/skillsGroup.scss"

type SkillsGroupProps = {
  title: string
  data: number | { name: string; image: string }[]
}

const SkillsGroup = ({ title, data }: SkillsGroupProps) => {
  const skillsList = useFetchData<{
    languages: { name: string; image: string }[]
    versions: { name: string; image: string }[]
    tools: { name: string; image: string }[]
  }>("/data/skills.json")
  if (data === 0) {
    data = skillsList?.languages ?? []
  }
  if (data === 1) {
    data = skillsList?.versions ?? []
  }
  if (data === 2) {
    data = skillsList?.tools ?? []
  }
  return (
    <section className="section-skills">
      <h3>{title}</h3>
      <div className="skills-container">
        {Array.isArray(data) &&
          data.map((skill: { name: string; image: string }, index: number) => (
            <Logo logoName={skill.name} logoImg={skill.image} key={index} />
          ))}
      </div>
    </section>
  )
}
export default SkillsGroup
