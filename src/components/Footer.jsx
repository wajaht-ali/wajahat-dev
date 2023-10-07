import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div className="top">
                <div className="left box">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor, accusantium natus, provident assumenda explicabo placeat nesciunt fuga beatae deleniti consectetur. Totam perferendis sit labore adipisci eum odit consequuntur numquam.</p>
                </div>

                <div className="right box">
                    <h2>Follow Me</h2>
                    <div className="social">
                        <Link to={"https://github.com/wajaht-ali/"} target="_blank">< FaGithub /></Link>

                        <Link to={"https://linkedin.com/in/wajhat-ali/"} target="_blank">< FaLinkedinIn /></Link>

                        <Link to={"https://twitter.com/ChWajahtali"} target="_blank">< FaTwitter /></Link>

                        <Link to={"https://www.instagram.com/wajaht_alee/"} target="_blank">< FaInstagram /></Link>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="rights">
                    All rights reserved. &copy; Wajahat (dot) Dev
                </div>
                <div className="scrollUp">
                    <a href="#home">
                        <FiArrowUp />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer