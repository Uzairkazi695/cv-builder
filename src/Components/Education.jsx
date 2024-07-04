import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import '../App.css'

export default function Education() {
  const { formData, setFormData } = useContext(DataContext);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      education: prevData.education.map((item, idx) =>
        idx === index ? { ...item, [name]: value } : item
      ),
    }));
  };
  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        {
          title: "",
          school: "",
          start: "",
          end: "",
        },
      ],
    }));
  };

  const deleteEducation = (id) => {
    const updateEducation = formData.education.filter((ed, i) => i !== id);
    setFormData({ ...formData, education: updateEducation });
  };
  return (
    <>
      <h2 className="left-header">Education</h2>
      {formData.education.map((ed, index) => (
        <div key={index}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="text"
              name="school"
              placeholder="School/Uni Name"
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div>
            <input
              type="date"
              name="start"
              placeholder="Course Title"
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="date"
              name="end"
              placeholder="Course Title"
              onChange={(e) => handleChange(e, index)}
            />
            <button onClick={() => deleteEducation(index)}>Delete</button>
          </div>
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
    </>
  );
}
