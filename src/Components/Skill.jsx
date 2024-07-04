import React, { useContext, useState } from "react";
import { DataContext } from "../Context/Context";
import '../App.css'

export default function Skill() {
  const { formData, setFormData } = useContext(DataContext);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      skill: prevData.skill.map((item, idx) =>
        idx === index ? { ...item, [name]: value } : item
    ),
  }));
  };

  const addSkill = () => {
    setFormData((prevData) => ({
      ...prevData,
      skill: [
        ...prevData.skill,
        {
          title: "",
          description: "",
        },
      ],
    }));
  };

  const deleteSkill = (id) => {
    const updateSkill = formData.skill.filter((ed, i) => i !== id);
    setFormData({ ...formData, skill: updateSkill });
  };
  return (
    <>
      <h2 className="left-header">Skills</h2>
      {formData.skill.map((skill, index) => (
        <div key={index}>
          <input
            type="text"
            name="title"
            placeholder="Skill Title"
            onChange={(e) => handleChange(e, index)}
          />
          <input
            type="text"
            name="description"
            placeholder="Skill Description"
            onChange={(e) => handleChange(e, index)}
          />
          <button onClick={()=>deleteSkill(index)}>Delete</button>
        </div>
      ))}
      <button onClick={addSkill}>Add Skill</button>
    </>
  );
}
