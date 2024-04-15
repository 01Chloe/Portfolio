import "../assets/styles/skills.scss"
import SkillsGroup from "../components/SkillsGroup"
import { useEffect } from "react"

const Skills = () => {
  useEffect(() => {
    document.title = "Allier Chloé - Compétences"
  }, [])
  return (
    <main>
      <section className="skills-title">
        <h2>Compétences</h2>
      </section>
      <SkillsGroup title="Langages et frameworks" data={0} />
      <SkillsGroup title="Gestion de version" data={1} />
      <SkillsGroup title="Outils" data={2} />
      <div className="skills-infos">
        <h3>Savoir-faire additionnel</h3>
        <ul className="more-skills">
          <li className="more-skill">SEO</li>
          <li className="more-skill">Jest</li>
          <li className="more-skill">React Testing Library</li>
        </ul>
      </div>
    </main>
  )
}
export default Skills
