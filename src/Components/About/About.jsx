import React from 'react'

import "./About.css"

export default function About() {
  return <>
    <div className="aboutBG d-flex justify-content-center align-items-center">
      <div className="customWidth">
        <div className="heading text-center">
          <h2 className='text-white'>ABOUT</h2>
          <div className="line mb-4 d-flex justify-content-center">
            <hr className='whiteLine me-3' />
            <i className="fa-solid fa-star fa-2x"></i>
            <hr className='whiteLine ms-3' />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="box text-white px-4">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
          <div className="col-6">
            <div className="box text-white px-4">
              <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
