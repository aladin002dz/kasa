
import HeroBanner from "@components/Hero/Hero"
import Product from "@components/Product/Product"
import { Link, useParams } from 'react-router-dom'

import logements from '@data/logements.json'

import '@pages/annonce/Annonce.css'

const Annonce = () => {

  let getParams = useParams();


  //Testing Injection on ONE logement
  // let details = logements[2];

  //Get ALl datas and dispatch good url Product
  let details = logements.find((logement) => {

    return logement.id === getParams.id

  })

  let fullPanel = true;

  return (

    details ?
      (<>
        <HeroBanner layout={'annonce'} details={details} />
        <section className="logement-details">
          <Product details={details} fullPanel={fullPanel} />
        </section>
      </>
      ) : (
        <>
          <HeroBanner layout={'annonce'} />
          <div className="logement-not-found">
            <h1 className="title">Ce logement n'existe <span className="special">pas encore !</span></h1>
            <p className="description"><Link to="/about">Contactes-nous </Link>pour ajouter ton logement dans notre liste 💥</p>
          </div>
        </>
      )

  )
}

export default Annonce