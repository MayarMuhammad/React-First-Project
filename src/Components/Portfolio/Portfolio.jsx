import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import $ from "jquery"

import cabin from "../img/cabin.png"
import cake from "../img/cake.png"
import circus from "../img/circus.png"
import game from "../img/game.png"
import safe from "../img/safe.png"
import submarine from "../img/submarine.png"

import "./Portfolio.css"
import MyModal from './../MyModal/MyModal';

export default function Portfolio() {

    // const modalData = [{
    //     id: 0,
    //     title: "LOG CABIN",
    //     img: cabin,
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    // },
    // {
    //     id: 1,
    //     title: "TASTY CAKE",
    //     img: cake,
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    // },
    // {
    //     id: 2,
    //     title: "CIRCUS TENT",
    //     img: circus,
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    // },
    // {
    //     id: 3,
    //     title: "CONTROLLER",
    //     img: game,
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    // },
    // {
    //     id: 4,
    //     title: "LOCKED SAFE",
    //     img: safe,
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    // },
    // {
    //     id: 5,
    //     title: "SUBMARINE",
    //     img: submarine,
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    // }];
    // const [currentModal, setCurrentModal] = useState({});

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // useEffect(() => {
    //     $(".image").click(function () {
    //         modalData.map((modal) => {
    //             if (modal.id == this.id) {
    //                 setCurrentModal(modal);
    //             }
    //         })
    //     });

    //     return () => {
    //     };
    // }, []);

    return <>
        <div className='paddingTop'>
            <div className="container">
                <div className="heading text-center m-5">
                    <h2>PORTFOLIO</h2>
                    <div className="lines mb-4 d-flex justify-content-center">
                        <hr className='blackLine me-3' />
                        <i className="fa-solid fa-star fa-2x"></i>
                        <hr className='blackLine ms-3' />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="image mb-4 position-relative" id="0">
                            <img src={cabin} alt="cabin" className='w-100 rounded-2' />
                            <MyModal id={"0"} />
                            {/* <div onClick={handleShow}
                                className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-content-center flex-wrap">
                                <i className="fa-solid fa-plus text-white fa-4x"></i>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <div className="image mb-4 position-relative" id="1">
                            <img src={cake} alt="cake" className='w-100 rounded-2' />
                            <MyModal id={"1"} />
                            {/* <div onClick={handleShow}
                                className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-content-center flex-wrap">
                                <i className="fa-solid fa-plus text-white fa-4x"></i>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <div className="image mb-4 position-relative" id="2">
                            <img src={circus} alt="circus" className='w-100 rounded-2' />
                            <MyModal id={"2"} />
                            {/* <div onClick={handleShow}
                                className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-content-center flex-wrap">
                                <i className="fa-solid fa-plus text-white fa-4x"></i>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <div className="image mb-4 position-relative" id="3">
                            <img src={game} alt="game" className='w-100 rounded-2' />
                            <MyModal id={"3"} />
                            {/* <div onClick={handleShow}
                                className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-content-center flex-wrap">
                                <i className="fa-solid fa-plus text-white fa-4x"></i>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 ">
                        <div className="image mb-4 position-relative" id="4">
                            <img src={safe} alt="safe" className='w-100 rounded-2' />
                            <MyModal id={"4"} />
                            {/* <div onClick={handleShow}
                                className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-content-center flex-wrap">
                                <i className="fa-solid fa-plus text-white fa-4x"></i>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="image mb-4 position-relative" id="5">
                            <img src={submarine} alt="submarine" className='w-100 rounded-2' />
                            <MyModal id={"5"} />
                            {/* <div onClick={handleShow}
                                className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-content-center flex-wrap">
                                <i className="fa-solid fa-plus text-white fa-4x"></i>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='border-0'>
                <div className='w-100'><h2>{currentModal.title}</h2>
                    <div className="lines mb-4 d-flex justify-content-center">
                        <hr className='blackLine me-3' />
                        <i className="fa-solid fa-star fa-2x"></i>
                        <hr className='blackLine ms-3' />
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body className='text-center'>
                <div className="image">
                    {currentModal.img}
                </div>
                <div className="text">
                    {currentModal.text}
                </div></Modal.Body>
            <Modal.Footer className='justify-content-center border-0'>
                <Button onClick={handleClose} className="btnBG">
                    <i className="fa-solid fa-x me-2"></i>
                    Close Window
                </Button>
            </Modal.Footer>
        </Modal> */}
    </>
}
