import "../assets/styles/logo.scss"

type logoProps = {
  logoName: string
  logoImg: string
}

const Logo = ({ logoName, logoImg }: logoProps) => {
  return (
    <div className="logo-container">
      <img src={logoImg} alt={`${logoName} logo`} className="logo" />
      <span>{logoName}</span>
    </div>
  )
}
export default Logo
