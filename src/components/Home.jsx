import "../styles/Home.scss";
import img from "../assets/profile_img.jpg";
import TypeWriter from "typewriter-effect";
import { MdOutlineLocationCity } from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Home = () => {
    return (
        <div className='home'>
            <div className="hero">
                <div className="left">
                    <img src={img} alt="profileImage" />
                </div>
                <div className="right">
                    <h1>Wajahat  Ali</h1>

                    <div className="typeWriter">
                        <TypeWriter
                            options={{
                                strings: ["FRONT END DEV", "WEB 3.0 - METAVERSE ENTHUSIAST", "TECH BLOGGER"],
                                autoStart: true,
                                loop: true,
                                interval: "500",
                                wrapperClassName: "typeWriterText"
                            }}
                        />
                    </div>

                    <p>I love to create and develope interfaces, websites using latest and cutting-edge technologies. Which provides the best user experience in terms of being user-friendly and easy to navigate through.</p>

                    <div className="links">
                        <AiOutlineMail />
                        <a href="mailto:contact.chwajahat@gmail.com">contact.chwajahat@gmail.com</a>
                    </div>

                    <div className="links">
                        <MdOutlineLocationCity />
                        <address>
                            Haripur, 22620, K.P.K, Pakistan.
                        </address>
                    </div>

                    <div className="social">
                        <Link to="https://github.com/wajaht-ali/" target="_blank"><FaGithubSquare /></Link>

                        <Link to="https://linkedin.com/in/wajhat-ali/"><FaLinkedin /></Link>

                        <Link to="https://twitter.com/ChWajahtali" target="_blank">< FaTwitterSquare /></Link>

                        <Link to="https://www.instagram.com/wajaht_alee/" target="_blank">< FaInstagramSquare /></Link>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Home