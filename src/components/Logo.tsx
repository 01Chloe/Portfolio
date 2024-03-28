import "../assets/styles/logo.scss"

type logoProps = {
  logoName: string
  logoImg: string
  logoSmall?: boolean
}

const Logo = ({ logoName, logoImg, logoSmall }: logoProps) => {
  return (
    <div className="logo-container">
      <img
        src={logoImg}
        alt={`${logoName} logo`}
        className={logoSmall ? "small-logo" : "logo"}
      />
      <span>{logoName}</span>
    </div>
  )
}
export default Logo
