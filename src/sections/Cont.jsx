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
    <div className=" w-75 h-75 row d-flex flex-column justify-content-center align-items-center ">
      <div className="titulazo-contact bg-dark col d-flex align-items-center justify-content-center w-100 fw-bolder   ">
        <h1 className="fw-bolder">Contact</h1>
      </div>
      <div className="col d-flex flex-wrap align-items-center justify-content-center  h-100 bg-dark w-100">
        <div className=" col d-flex flex-column text-center  tarjeee email-card">
          <div className="col m-4">
            <img src="/email(1).png" className="contactou" alt=""/>
          </div>
          <div className="col p-3">
            <h4>Email</h4>
            <input type="hidden" value="diego.laboy1@upr.edu" id='email' />

          </div>
          <div className="col p-3 text-secondary">
            { emailCopied
              ?
            <p>Email copied</p> : <p>Click to copy </p>
            }
          </div>
         
        </div>
        <div className="  col d-flex flex-column text-center  tarjeee phone-card">
          <div className="col m-4">
            <img src="/phone-call(4).png" className="contactou" alt=""/>
          </div>
          <div className="col p-3">
            <h4>Phone </h4>
            <input type="hidden" value="9394514525" id='phone' />
          </div>
          <div className="col p-3 text-secondary">

            { phoneCopied ?  <p>Phone Number Copied</p> :<p>Click to copy </p> }

          </div>
       
        </div>
        <div className="  d-flex flex-column text-center  tarjeee linkedin-card">
          <div className="col m-4">
            <img src="/linkedin(1).png" className="contactou" alt=""/>
          </div>
          <div className="col p-3">
            <h4>LinkedIn</h4>
            <input type="hidden" value="www.linkedin.com/in/diego-laboy-7629bb267" id='linkedin' />

          </div>
          <div className="col p-3 text-secondary">
             { linkedinCopied ?  <p>LinkedIn Profile Copied</p> :<p>Click to copy </p> }
          </div>
          
         
        </div>
      </div>
      
    </div>
   
  </div>
  )
}
