import "../styles/Portfolio.scss";
import { FaHtml5, FaCss3, FaReact, FaGithubSquare, FaSass } from "react-icons/fa"
import { SiJavascript, SiTypescript } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";

const Portfolio = () => {

  return (
    <div className='portfolio' id="portfolio">
      <main>
        <div className="skills box">
          <h2>My Skills</h2>
          <div className="icons">
            < TbBrandCpp />
            < FaHtml5 />
            < FaCss3 />
            < FaSass />
            < SiJavascript />
            < FaReact />
            < SiTypescript />
            < BsGit />
            < FaGithubSquare />
          </div>
        </div>

        <div className="about box">
          <h2>About Myself</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis delectus quam minima excepturi, vel consequuntur officia minus at libero dignissimos. Labore, dicta error cum neque velit debitis rerum voluptate nam, necessitatibus nisi harum corporis. Similique facilis minima ipsam quidem est aperiam autem, voluptates ratione.</p>
        </div>

      </main>
    </div>
  )
}

export default Portfolio