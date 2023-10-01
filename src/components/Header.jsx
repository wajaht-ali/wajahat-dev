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
                <h2>Wajahat</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>My Work</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header