import React , {} from 'react'
import "./HeroForm.css"

const HeroForm = () => {



  return (
    <div className='form'>
        <h2>Send me a message</h2>
        <p>je reponds generalement apres 24h</p>
        <form action='https://formsubmit.co/1e5241e08bf97bedab035aa7bf852cbc' method='POST'>
            <div className="input">
                <input type="text" name="name" id="name" className="name" placeholder ="Enter your name" />
                <input type="email" name="email" id="name" className="email" placeholder='Enter your email'/>
            </div>
                <input type="text" name="subject" id="name" className="subject" placeholder ="Enter a subject" />
            <textarea cols="30" rows="10" className='message' placeholder='White a little message'id='name' name='message'></textarea>
            <button type="submit">Envoyer</button>
        </form>
    </div>
  )
}

export default HeroForm
