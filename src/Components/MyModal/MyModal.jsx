import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./MyModal.css"

import cabin from "../img/cabin.png"
import cake from "../img/cake.png"
import circus from "../img/circus.png"
import game from "../img/game.png"
import safe from "../img/safe.png"
import submarine from "../img/submarine.png"

export default function MyModal({ id }) {
    // console.log(id);

    const modalData = [{
        id: 0,
        title: "LOG CABIN",
        img: cabin,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    },
    {
        id: 1,
        title: "TASTY CAKE",
        img: cake,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    },
    {
        id: 2,
        title: "CIRCUS TENT",
        img: circus,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    },
    {
        id: 3,
        title: "CONTROLLER",
        img: game,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    },
    {
        id: 4,
        title: "LOCKED SAFE",
        img: safe,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    },
    {
        id: 5,
        title: "SUBMARINE",
        img: submarine,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    }];
    const [currentModal, setCurrentModal] = useState({});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        modalData.map((modal) => {
            if (modal.id == id) {
                setCurrentModal(modal);
            }
        })
        return () => {
        };
    }, []);

    return <>
        <div onClick={handleShow}
            className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-content-center flex-wrap">
            <i className="fa-solid fa-plus text-white fa-4x"></i>
        </div>
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton className='border-0 position-relative'>
                <div className='w-100 text-center'><h2>{currentModal.title}</h2>
                    <div className="lines d-flex justify-content-center">
                        <hr className='blackLine me-3' />
                        <i className="fa-solid fa-star fa-2x"></i>
                        <hr className='blackLine ms-3' />
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body className='text-center'>
                <div className="image mb-4">
                    <img src={currentModal.img} alt={currentModal.title} className='w-75 rounded-3' />
                </div>
                <div className="text w-75 m-auto">
                    <p>{currentModal.text}</p>
                </div></Modal.Body>
            <Modal.Footer className='justify-content-center border-0'>
                <Button onClick={handleClose} className="btnBG">
                    <i className="fa-solid fa-x me-2"></i>
                    Close Window
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}
