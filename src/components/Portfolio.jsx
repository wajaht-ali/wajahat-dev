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
          <h2>About Me</h2>
          <p>As a front-end web developer, I am
            passionate about creating visually
            appealing websites that offer an
            exceptional user experience. I am
            skillful in HTML, CSS, and JavaScript,
            with a good understanding of the
            principles of responsive web design. I
            have experience with modern
            frameworks like Reactjs. With my
            excellent progressive skills and
            attention to detail, I am committed to
            high-quality work that exceeds client
            expectations</p>
        </div>

      </main>
    </div>
  )
}

export default Portfolio