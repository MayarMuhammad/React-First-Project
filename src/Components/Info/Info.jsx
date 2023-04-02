import React from 'react'

import "./Info.css"

export default function Info() {
    return <>
        <div className='p-5 infoBG'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="box text-center px-5 text-white mb-5">
                            <h3 className='mb-4'>LOCATION</h3>
                            <p>2215 John Daniel Drive Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box text-center px-5 mb-5">
                            <h3 className='text-white mb-4'>AROUND THE WEB</h3>
                            <div className="icons">
                                <i className="fa-brands fa-facebook-f me-3 mb-2"></i>
                                <i className="fa-brands fa-twitter me-3 mb-2"></i>
                                <i className="fa-brands fa-linkedin-in me-3 mb-2"></i>
                                <i className="fa-solid fa-globe me-3 mb-2"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box text-center px-5 text-white mb-5">
                            <h3 className='mb-4'>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
