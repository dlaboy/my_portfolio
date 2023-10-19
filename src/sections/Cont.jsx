import React, { useEffect, useState } from 'react'
import './Cont.css'





export  function Cont() {
  const [emailCopied, emailIsCopied] = useState(false)
  const [phoneCopied, phoneIsCopied] = useState(false)
  const [linkedinCopied, linkedinIsCopied] = useState(false)

  useEffect(()=>{
    const phone = document.querySelector('.phone-card');
    
    phone.addEventListener('click',function(){
      const phoneNumber = document.getElementById('phone');
    
      phoneNumber.select();
      
      
      navigator.clipboard.writeText(phoneNumber.value).then(console.log("phone number copied"))

      phoneIsCopied(true)

    })
    const email = document.querySelector('.email-card');
      
    email.addEventListener('click',function(){
      const phoneNumber = document.getElementById('email');
    
      phoneNumber.select();

      navigator.clipboard.writeText(phoneNumber.value).then(console.log("email copied"))

      emailIsCopied(true)
    })
    const linkedin = document.querySelector('.linkedin-card');
        
    linkedin.addEventListener('click',function(){
      const phoneNumber = document.getElementById('linkedin');

      phoneNumber.select();


      navigator.clipboard.writeText(phoneNumber.value).then(console.log("linkedin copied"))

      linkedinIsCopied(true)

    })
},[])
  return (
    <div id="contact" className="row d-flex justify-content-center align-items-center flex-column ">
      <div className=" col d-flex flex-column justify-content-center align-items-center contact-wrapper ">
        <div className="titulazo-contact col  bg-dark d-flex align-items-center justify-content-center fw-bolder ">
          <h1 className="fw-bolder">Contact</h1>
        </div>
        <div className="cards-wrapper col d-flex flex-wrap align-items-center justify-content-center bg-dark ">
          <div className=" col d-flex flex-column text-center  tarjeee email-card">
            <div className="col ">
              <img src="/email(1).png" className="contactou" alt=""/>
            </div>
            <div className="col ">
              <h4>Email</h4>
              <input type="hidden" value="diego.laboy1@upr.edu" id='email' />

            </div>
            <div className="col  text-secondary">
              { emailCopied
                ?
              <p>Email copied</p> : <p>Click to copy </p>
              }
            </div>
          
          </div>
          <div className="  col d-flex flex-column text-center  tarjeee phone-card">
            <div className="col ">
              <img src="/phone-call(4).png" className="contactou" alt=""/>
            </div>
            <div className="col ">
              <h4>Phone </h4>
              <input type="hidden" value="9394514525" id='phone' />
            </div>
            <div className="col  text-secondary">

              { phoneCopied ?  <p>Phone Number Copied</p> :<p>Click to copy </p> }

            </div>
        
          </div>
          <div className="col  d-flex flex-column text-center  tarjeee linkedin-card">
            <div className="col ">
              <img src="/linkedin(1).png" className="contactou" alt=""/>
            </div>
            <div className="col ">
              <h4>LinkedIn</h4>
              <input type="hidden" value="www.linkedin.com/in/diego-laboy-7629bb267" id='linkedin' />

            </div>
            <div className="col text-secondary">
              { linkedinCopied ?  <p>LinkedIn Profile Copied</p> :<p>Click to copy </p> }
            </div>
            
          
          </div>
        </div>
      
      </div>
   
    </div>
  )
}
