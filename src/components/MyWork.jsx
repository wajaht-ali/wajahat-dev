import "../styles/Work.scss";
// import profile from '../assets/profile_img.jpg';
// import prodImg from "../assets/th.jpg";
import experience from "../assets/experience.json";

const MyWork = () => {
  return (
    <div className='myWork' id="work">
      <div className="top">
        <h3>My Projects</h3>
      </div>

      <div className="bottom">
        <div className="card">
          {
            experience.projects.map((item, index) => (
              <WorkData
                pic={item.imgUrl}
                name={item.title}
                details={item.description}
                demo={item.demoUrl}
                code={item.gitRepoUrl}
                key={item.index}
                index={index}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export const WorkData = ({ pic, name, demo, code, details }) => (
  <div className="workExperience">
    <div className="top">
      <img src={pic} alt="myImg" />
    </div>
    <div className="bottom">
      <h2>{name}</h2>
      <p>{details}</p>
      <span>
        <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={code} target="_blank" rel="noopener noreferrer">Code</a>
      </span>
    </div>
  </div>
)

export default MyWork