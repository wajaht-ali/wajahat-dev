import React from 'react'
import data from "../assets/data.json";
import "../styles/Education.scss";

const Education = () => {
    return (
        <div className='education' id='education'>
            <div className="top">
                <h3>My Education</h3>
            </div>
            <div className="bottom">
                {data.education.map((item, index) => (
                    <EducationTimeLine
                        heading={item.title}
                        board={item.board}
                        subjects={item.subjects}
                        marks={item.percentage}
                        graduation={item.graduated}
                        index={index}
                        key={item.title}
                    />
                ))}
            </div>
        </div>
    )
}

const EducationTimeLine = ({ heading, board, subjects, marks, graduation, index }) => (
    <div className={`timeLineItem ${index % 2 === 0 ? "leftTimeLine" : "rightTimeLine"}`}>
        <div>
            <h2>{heading}</h2>
            <p>{board}</p>
            <p>{subjects}</p>
            <p>{marks}</p>
            <p>{graduation}</p>
        </div>
    </div>
);

export default Education