import "../assets/styles/skills.scss"
import SkillsGroup from "../components/SkillsGroup"

const Skills = () => {
  return (
    <>
      <section className="skills-title">
        <h2>Compétences</h2>
      </section>
      <SkillsGroup title="Langages et frameworks" data={0} />
      <SkillsGroup title="Gestion de version" data={1} />
      <SkillsGroup title="Outils" data={2} />
    </>
  )
}
export default Skills
