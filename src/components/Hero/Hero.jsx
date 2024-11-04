import heroBackground from '@assets/hero-background.jpg'
import heroAnnonceBackground from '@assets/hero-annonce-background.jpg'

import './Hero.css'

const HeroBanner = (props) => {

  const {layout} = props

  return (

    <div className={`hero banner-${layout}`} style={layout === 'annonce' ? {backgroundImage:`url(${heroAnnonceBackground})`} :
    {backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, var(--op)) 0%, rgba(0, 0, 0, var(--op)) 100%),url(${heroBackground})`}

    }>
      {layout === 'annonce' ? <h1 className="title">Mon annonce</h1> : <h2 className="title" data-page={layout}>Chez vous, partout & ailleurs</h2>}
    </div>

  )
}

export default HeroBanner