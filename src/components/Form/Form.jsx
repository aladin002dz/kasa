const Form = () => {



  return (
    <div className="about-wrapper">
      <form action="" className="side side-form">
      <h3 className="main-title">On est là !</h3>
      <div className="input-group">
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" placeholder="Votre nom"/>
      </div>
        
      <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Votre email"/>  
      </div>
        
      <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Votre message"></textarea>
      </div>

      <button type="submit" className="btn btn-cta">Go !</button>
      </form>

      <div className="side side-prez">
        <h3 className="main-title">Et ici aussi</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque, voluptas provident tempora hic rem quas quidem error eligendi officia facere incidunt vel mollitia reprehenderit!</p>
      </div>

    </div>
  )
}
 export default Form
