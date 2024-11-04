import HeroBanner from "@components/Hero/Hero"
import Product from "@components/Product/Product"

import logement from '@data/logements.json'

const Annonce = () => {

  let details = logement[0]

  return (
    <>
      <HeroBanner layout={'annonce'}/>
      <section className="logement-details">
        <Product details={details} />
      </section>
    </>
  )
}

export default Annonce