import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import '../App.css'

export default function WorkEx() {
  const { formData, setFormData } = useContext(DataContext);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      workEx: prevData.workEx.map((item, idx) =>
        idx === index ? { ...item, [name]: value } : item
      ),
    }));
  };
  const addWorkExp = () => {
    setFormData((prevData) => ({
      ...prevData,
      workEx: [
        ...prevData.workEx,
        {
          companyName: "",
          title: "",
          description: "",
          started: "",
          ended: "",
          location: "",
        },
      ],
    }));
  };

  const deleteWorkExp = (id) => {
    const updateWorkExp = formData.workEx.filter((work, i) => i !== id);
    setFormData({ ...formData, workEx: updateWorkExp });
  };

  return (
    <>
      <h2 className="left-header ">Work Experience</h2>
      {formData.workEx.map((work, index) => (
        <div key={index}>
          <div>
            <input
              type="text"
              placeholder="Company Name"
              name="companyName"
              value={work.companyName}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="text"
              placeholder="Position Title"
              name="title"
              value={work.title}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={work.location}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            type="text"
            placeholder="Job Description"
            name="description"
            value={work.description}
            onChange={(e) => handleChange(e, index)}
          />
          <div>
            <span>Joining Date</span>
            <input
              type="date"
              placeholder="Joining Date"
              name="started"
              value={work.started}
              onChange={(e) => handleChange(e, index)}
            />
            {/* <input
              type="date"
              placeholder="Ending Date"
              name="ended"
              value={work.ended}
              onChange={(e) => handleChange(e, index)}
            /> */}
          </div>
          <button type="button" onClick={() => deleteWorkExp(index)}>
            Delete
          </button>
        </div>
      ))}

      <button type="button" onClick={addWorkExp}>
        Add Work Experience
      </button>
    </>
  );
}
