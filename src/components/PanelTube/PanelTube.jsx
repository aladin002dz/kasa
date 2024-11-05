import './PanelTube.css'

const PanelTube = (props) => {

const {details,softkill,fullPanel} = props

  return (
    fullPanel ? (
    <>
      <div className='product-panel tube'>
        <h3 className='title'>Description</h3>
        <p className='panel-container'>
          {details.description}
        </p>
      </div>
      <div className="product-panel tube" >
          <h3 className='title'>Equipements</h3>
          <ul className='panel-container'>
          {details.equipments.map((equipement,index)=>{

              return (<li key={`${equipement}-${index}`}>{equipement}</li>)
              }) 

            }
          </ul>
      </div>
    </>) : (<div className='soft-skill tube'>
          <h3 className='title'>{softkill}</h3>
        </div>)
  )
}
export default PanelTube