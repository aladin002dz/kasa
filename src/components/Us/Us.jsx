import PanelTube from "@components/PanelTube/PanelTube";

import './Us2.css';

const Us = () => {

  let softkills = ['Fiabilité', 'Responsabilite', 'Respect', 'Service', 'Sécurité'];

  return (
    <section className="us">

      {softkills.map((softkill, index) => {

        return (
          <PanelTube key={`tube-${index}`} softkill={softkill} fullPanel={false} />
        )

      })}

    </section>
  )
}

export default Us