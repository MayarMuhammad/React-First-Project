import React, { useEffect } from 'react';
import $ from "jquery"

import "./Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {

    useEffect(() => {
        let activeSection;

        $(window).on("scroll", function () {
            let navbar = $(".navbar");
            if ($(window).scrollTop() >= 50) {
                if (navbar.hasClass("uncompressed")) {
                    $(".navbar-brand").addClass("small");
                    navbar.removeClass("uncompressed");
                    navbar.addClass("compressed");
                }
            } else {
                if (navbar.hasClass("compressed")) {
                    $(".navbar-brand").removeClass("small");
                    navbar.addClass("uncompressed");
                    navbar.removeClass("compressed");
                }
            }
        });

        $(".nav-link").click(function () {
            sessionStorage.setItem("activeSection", JSON.stringify(this.id));
            $(".nav-link.active").removeClass("active");
            $(this).addClass("active");
        });
        $(".navbar-brand").click(function () {
            sessionStorage.removeItem("activeSection");
            $(".nav-link.active").removeClass("active");
        })

        activeSection = JSON.parse(sessionStorage.getItem("activeSection"));
        $(`#${activeSection}`).addClass("active");

        return () => {
        };
    }, []);

    return <>
        <nav className="navbar navbar-expand-lg navbarBG fixed-top uncompressed">
            <div className="container">
                <Link className="navbar-brand" to="home">START REACT</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link mx-3" id='portfolio' to="portfolio">PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" id='about' to="about">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" id='contact' to="contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
