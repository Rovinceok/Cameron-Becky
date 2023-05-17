import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
    

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Get in touch with us to find your preferred services everyday</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span> Copyright ©2023 All rights reserved. Designed By Peter Muriuki.</span><br></br>
        <span>Powered by  
        <a className="ft" href="https://www.facebook.com/RovinceTech"> Skai Technolgies</a>
        
        
        </span>
      </div>
    </>
  )
}

export default Footer
