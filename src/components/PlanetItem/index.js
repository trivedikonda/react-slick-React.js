// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanetDetails} = props
  const {imageUrl, name, description} = eachPlanetDetails
  return (
    <div className="planet-container">
      <img width={300} src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
