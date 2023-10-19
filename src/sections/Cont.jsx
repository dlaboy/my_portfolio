import React, { useEffect, useState } from 'react'
import './Cont.css'





export  function Cont() {
  const [emailCopied, emailIsCopied] = useState(false)
  const [phoneCopied, phoneIsCopied] = useState(false)
  const [linkedinCopied, linkedinIsCopied] = useState(false)
  const [githubCopied, githubIsCopied] = useState(false)

  useEffect(()=>{
    const phone = document.querySelector('.phone-card');
    
    phone.addEventListener('click',function(){
      const p = document.getElementById('phone');
    
      p.select();
      
      
      navigator.clipboard.writeText(p.value).then(console.log("phone number copied"))

      phoneIsCopied(true)

    })
    const email = document.querySelector('.email-card');
      
    email.addEventListener('click',function(){
      const e = document.getElementById('email');
    
      e.select();

      navigator.clipboard.writeText(e.value).then(console.log("email copied"))

      emailIsCopied(true)
    })
    const linkedin = document.querySelector('.linkedin-card');
        
    linkedin.addEventListener('click',function(){
      const li = document.getElementById('linkedin');

      li.select();


      navigator.clipboard.writeText(li.value).then(console.log("linkedin copied"))

      linkedinIsCopied(true)

    })
    const github = document.querySelector('.github-card');
        
    github.addEventListener('click',function(){
      const gh = document.getElementById('github');

      gh.select();


      navigator.clipboard.writeText(gh.value).then(console.log("github copied"))

      githubIsCopied(true)

    })
},[])
  return (
    <div id="contact" className=" d-flex justify-content-center align-items-center flex-column w-100 ">
      <div className=" col d-flex flex-column justify-content-center align-items-center contact-wrapper ">
        <div className="titulazo-contact col  bg-dark d-flex align-items-center justify-content-center fw-bolder ">
          <h1 className="fw-bolder">Contact</h1>
        </div>
        <div className="cards-wrapper col d-flex flex-wrap align-items-center justify-content-center bg-dark ">
          <div className=" col d-flex flex-column text-center  tarjeee email-card">
            <div className="col ">
              <img src="./email(1).png" className="contactou" alt=""/>
            </div>
            <div className="col ">
              <h4 className='cont-text'>Email</h4>
              <input type="hidden" value="diego.laboy1@upr.edu" id='email' />

            </div>
            <div className="col  text-secondary">
              { emailCopied
                ?
              <div className='cont-text'>Email copied</div> : <div className='cont-text'>Click to copy </div>
              }
            </div>
          
          </div>
          <div className="  col d-flex flex-column text-center  tarjeee phone-card">
            <div className="col ">
              <img src="./phone-call(4).png" className="contactou" alt=""/>
            </div>
            <div className="col ">
              <h4 className='cont-text'>Phone </h4>
              <input type="hidden" value="9394514525" id='phone' />
            </div>
            <div className="col  text-secondary">

              { phoneCopied ?  <div className='cont-text'>Phone Number Copied</div> :<div className='cont-text'>Click to copy </div> }

            </div>
        
          </div>
          <div className="col  d-flex flex-column text-center  tarjeee linkedin-card">
            <div className="col ">
              <img src="./linkedin(1).png" className="contactou" alt=""/>
            </div>
            <div className="col ">
              <h4 className='cont-text'>LinkedIn</h4>
              <input type="hidden" value="www.linkedin.com/in/diego-laboy-7629bb267" id='linkedin' />

            </div>
            <div className="col text-secondary">
              { linkedinCopied ?  <div className='cont-text'>LinkedIn Profile Copied</div> :<div className='cont-text'>Click to copy </div> }
            </div>
            
          
          </div>
          <div className="col  d-flex flex-column text-center  tarjeee github-card">
            <div className="col ">
              <img src="./github.png" className="contactou" alt=""/>
            </div>
            <div className="col ">
              <h4 className='cont-text'>Github</h4>
              <input type="hidden" value="https://github.com/dlaboy" id='github' />

            </div>
            <div className="col text-secondary">
              { githubCopied ?  <div className='cont-text'>Github Copied</div> :<div className='cont-text'>Click to copy </div> }
            </div>
            
          
          </div>
        </div>
      
      </div>
   
    </div>
  )
}
