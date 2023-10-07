import React from 'react';
import "../styles/Header.scss";

const Header = () => {

    document.addEventListener('scroll', () => {
        const header = document.getElementById('head');

        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        }
        else {
            header.classList.remove("scrolled");
        }
    })

    return (
        <div className='header' id='head'>
            <div className="logo">
                <h2><a href="#home">Wajahat</a></h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header