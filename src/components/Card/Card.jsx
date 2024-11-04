
import './Card.css'


const Card = (props) => {  

  const {logement} = props

  console.log(logement.cover)

  return (
  <article className={`card `}>
    <img className="card-img" src={logement.cover} alt={logement.title} /><a href={`/annonce/${logement.id}`} className='card-link'><h2 className="card-title">{logement.title}</h2></a>
  <p className="card-description">{logement.description}</p></article>    
        
  )



}

export default Card