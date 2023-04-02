import React from 'react'

import "./Contact.css"

export default function Contact() {
    return <>
        <div className="customWidth paddingTop">
            <div className="heading text-center m-5">
                <h2>CONTACT ME</h2>
                <div className="lines mb-4 d-flex justify-content-center">
                    <hr className='blackLine me-3' />
                    <i className="fa-solid fa-star fa-2x"></i>
                    <hr className='blackLine ms-3' />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 border-bottom">
                    <input type="text" className="form-control mb-3" id="name" placeholder="Name" />
                </div>
                <div className="mb-3 border-bottom">
                    <input type="email" className="form-control mb-3" id="email" placeholder="Email Address" />
                </div>
                <div className="mb-3 border-bottom">
                    <input type="tel" className="form-control mb-3" id="phone" placeholder="Phone Number" />
                </div>
                <div className="mb-3 border-bottom">
                    <textarea className="form-control mb-3" id="message" rows="5" placeholder='Message'></textarea>
                </div>
                <div className="mb-3">
                    <button className='btn btn-info px-3 py-2 text-white'>Send</button>
                </div>
            </div>
        </div>
    </>
}
