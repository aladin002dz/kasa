import HeroBanner from "@components/Hero/Hero"
import Product from "@components/Product/Product"

import logement from '@data/logements.json'

const Annonce = () => {

  //Testing Injection on ONE logement
  let details = logement[2]

  return (
    <>
      <HeroBanner layout={'annonce'} details={details} />
      <section className="logement-details">
        <Product details={details} />
      </section>
    </>
  )
}

export default Annonce