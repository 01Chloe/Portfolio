import "../assets/styles/presentation.scss"
import ContactBtn from "../components/ContactBtn"
import Logo from "../components/Logo"
import likedinLogo from "../assets/img/linkedin.svg"
import githubLogo from "../assets/img/github.svg"
import Writer from "../components/Writer"

const Presentation = () => {
  return (
    <main>
      <section className="section-typewriter">
        <Writer />
      </section>
      <section className="section-about">
        <h2>Présentation</h2>
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
          certifiante et équivalente à un niveau bac+2.
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
        </p>
      </section>
      <ContactBtn />
      <section className="section-about">
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
export default Presentation
