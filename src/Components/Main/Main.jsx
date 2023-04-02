import React from 'react'

import "./Main.css"

export default function Main() {
    return <>
        <div className="mainBG">
            <div className="container d-flex justify-content-center align-content-center flex-wrap flex-column text-center text-white h-100">
                <div className="d-flex flex-column justify-content-center">
                    <div className="image my-4"><img src="https://routeegypt.com/start-react/assets/img/avataaars.svg" alt="profile" /></div>
                    <div className="text">
                        <h1 className='mb-4'>START REACT</h1>
                        <div className="line mb-4 d-flex justify-content-center">
                            <hr className='whiteLine me-3' />
                            <i className="fa-solid fa-star fa-2x text-white"></i>
                            <hr className='whiteLine ms-3' />
                        </div>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div></div>
    </>
}
