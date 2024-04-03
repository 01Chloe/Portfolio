import "../assets/styles/about.scss"
import ContactBtn from "../components/ContactBtn"
import Logo from "../components/Logo"
import likedinLogo from "/img/icons/linkedin.svg"
import githubLogo from "/img/icons/github.svg"
import Writer from "../components/Writer"
import ArrowBottom from "/img/icons/arrow-bottom.svg"
import { useState, useEffect } from "react"

const About = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  useEffect(() => {
    document.title = "Allier Chloé - Accueil"
  }, [])
  return (
    <main className="about-container">
      <section className="section-typewriter">
        <Writer />
      </section>
      <section className={isAboutOpen ? "section-about open" : "section-about"}>
        <h2>À propos</h2>
        <p>
          Je suis <strong>Chloé Allier, développeuse web front-end</strong>{" "}
          passionnée par la création d'interfaces en ligne immersives et
          intuitives.
          <br />
          Mon parcours dans le monde du développement web a commencé de façon
          <strong> autodidacte</strong>, poussée par une fascination pour la
          manière dont les sites web peuvent combiner technologie et créativité
          pour offrir des expériences uniques.
        </p>
        <p>
          Dans ma quête pour approfondir mes compétences et suivre les
          meilleures pratiques de l'industrie, j'ai entrepris une formation de
          <strong> développeur intégrateur web chez OpenClassrooms</strong>,
          certifiante et équivalente à un niveau <strong>bac+2</strong>.
        </p>
        <p>
          Cette expérience m'a permis de consolider mes connaissances et
          d'acquérir une expertise approfondie dans les langages et les outils
          indispensables au développement web front-end moderne tels que{" "}
          <strong>HTML, CSS, JavaScript et React.js</strong>.
        </p>
        <p>
          Au sein de mon <strong>portfolio</strong>, je suis ravie de partager
          avec vous une sélection diversifiée de projets, allant des
          réalisations les plus récentes à des travaux personnels qui ont marqué
          mon parcours.
          <br />
          Chaque projet représente une étape importante de mon évolution en tant
          que développeuse web front-end, mettant en lumière mes compétences et
          ma passion pour la création d'interfaces en ligne.
        </p>
        <p>
          Explorez mon portfolio et <strong>contactez-moi</strong> si vous
          souhaitez discuter de collaborations potentielles ou des projets
          stimulants à réaliser ensemble !
          <br />
          Je suis disponible sur <strong>Clermont-Ferrand</strong> et ses
          alentours et aussi en
          <strong> full remote dans toute la France</strong>. Je serais ravi
          d'échanger avec vous sur de nouvelles opportunités professionnelles.
        </p>
        <button className="btn-more-infos">
          <img
            src={ArrowBottom}
            alt="Voir le contenu"
            className="arrow-bottom"
            onClick={() => setIsAboutOpen(!isAboutOpen)}
          />
        </button>
      </section>
      <ContactBtn />
      <section className="section-contact">
        <h2>Me retrouver</h2>
        <div className="about-logo-container">
          <a href="https://github.com/01Chloe" target="_blank">
            <Logo logoName="GitHub" logoImg={githubLogo} />
          </a>
          <a
            href="https://www.linkedin.com/in/chlo%C3%A9-allier-972310252/"
            target="_blank"
          >
            <Logo logoName="LinkedIn" logoImg={likedinLogo} />
          </a>
        </div>
      </section>
    </main>
  )
}
export default About
