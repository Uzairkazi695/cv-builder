import React from "react";
import { useContext, useState } from "react";
import { DataContext } from "../Context/Context";
import "../App.css";

export default function EntireCv() {
  const { formData } = useContext(DataContext);
  return (
    <>
      <div className="header contact">
        <div className="right-name">{formData.name}</div>
        <div className="right-contact">
          <h2>Contact </h2>
          <div>Phone: {formData.phone}</div>
          <div>Email: {formData.email}</div>
        </div>
      </div>
      <div className="summary">
        <div>
          <h2>Summary:</h2>
          <hr />
          {formData.summary}
        </div>
      </div>
      <div className="workEx">
        <h2>
          Work Experience <hr />
        </h2>
        {formData.workEx.map((work) => (
          <div key={crypto.randomUUID()} className="workEx-detail">
            <p>
              <span>Title: </span> {work.title}
            </p>
            <p>
              {" "}
              <span>Company Name: </span> {work.companyName}
            </p>
            <p>
              <span>Location: </span> {work.location}
            </p>
            <p>
              <span>Job Description: </span> {work.description}
            </p>
            <p>
              <span>Joining Date: </span> {work.started}
            </p>
          </div>
        ))}
      </div>
      <div className="skill">
        <h2>
          Skills <hr />
        </h2>
        <div className="skill-container">
          {formData.skill.map((skill) => (
            <div key={crypto.randomUUID()} className="skill-details">
              <div className="skill-title">
                 {skill.title}
              </div>
              <div className="skill-description">
                 {skill.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="education">
        <h2>
          Education <hr />
        </h2>
        {formData.education.map((ed) => (
          <div key={crypto.randomUUID()}>
            <div>
              <div><span>Course Name: </span> {ed.title}</div>
              <div><span>School/Uni Name :</span> {ed.school}</div>
            </div>
            <div>
              <div><span>Started Date: </span> {ed.start}</div>
              <div><span>Ended Date: </span> {ed.end}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
