import {Link} from 'react-router-dom'
import './Card.css'


const Card = (props) => {  

  const {logement} = props

  return (
    <article className={`card `} style={{background:`url(${logement.cover}),linear-gradient(to bottom, #FFF 0%, #FFF 42%, #0A0A0A 100%)`}}>
      <a href={`/annonce/${logement.id}`} className='card-link'><h2 className="card-title">{logement.title}</h2></a>
    <p className="card-description">{logement.description}</p></article>         
  )



}

export default Card