import "../styles/Work.scss";
import experience from "../assets/experience.json"

const MyWork = () => {
  return (
    <div className='myWork' id="work">
      <div className="head">
        <h3>My Work</h3>
      </div>
      <div className="bottom">
        {
          experience.projects.map((item, index) => (
            <Work
              img={item.imgUrl}
              name={item.title}
              demo={item.demoUrl}
              gitHub={item.gitRepoUrl}
              language={item.madeWithLang}
              index={index}
              key={item.title}
            />
          ))
        }
      </div>
    </div>
  )
}

const Work = ({ img, name, demo, gitHub, language }) => (
  <div className="experience">
    <img src={img} alt="projImage" />
    <h3>{name}</h3>
    <h3>{language}</h3>
    <div className="links">
      <a href={demo}>Demo</a>
      <a href={gitHub}>Code</a>
    </div>
  </div>
)

export default MyWork