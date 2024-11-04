import datas from '@data/logements.json'
import Card from '../Card/Card';

import './Listing.css'

const Listing = () => {
  
  let logements = [...datas];

  return (
  <section className="listing-container">

    { logements.map((logement,index) => {

        return (
          <Card key={`${logement.id}-${index}`} logement={logement} />)  
      })

    }

  </section>
  )
}

export default Listing