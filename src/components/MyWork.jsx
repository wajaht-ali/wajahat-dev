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
              about={item.description}
              index={index}
              key={item.title}
            />
          ))
        }
      </div>
    </div>
  )
}

const Work = ({ img, name, demo, gitHub, about }) => (
  <div className="experience">
    <div className="top">
      <img src={img} alt="projImage" />
    </div>
    <div className="bottom">
      <h2>{name}</h2>
      <p>{about}</p>
      <div className="links">
        <a href={demo}>Demo</a>
        <a href={gitHub}>Code</a>
      </div>
    </div>
  </div>
)

export default MyWork