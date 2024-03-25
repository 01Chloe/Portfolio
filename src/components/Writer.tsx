import Typewriter from "typewriter-effect"
import "../assets/styles/writer.scss"

const Writer = () => {
  return (
    <div className="typewriter">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(40)
            .changeDeleteSpeed(30)
            .typeString("Allier Chloé, Développeuse web Front-End")
            .pauseFor(1500)
            .deleteChars(13)
            .pauseFor(500)
            .typeString("JavaScript")
            .pauseFor(1500)
            .deleteChars(10)
            .pauseFor(500)
            .typeString("React.js")
            .start()
        }}
      />
    </div>
  )
}
export default Writer
