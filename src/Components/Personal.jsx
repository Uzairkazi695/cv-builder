import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import '../App.css'

export default function Personal() {
  const { formData, setFormData } = useContext(DataContext);

  return (
    <>
      <h2 className="left-header">Personal Details</h2>
      <form className="personal-form">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={(e) => {
              e.preventDefault();
              setFormData((prevData) => ({
                ...prevData,
                name: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <input
            type="text"
            name="PhoneNumber"
            placeholder="Phone Number"
            onChange={(e) => {
              e.preventDefault();
              const value = parseInt(e.target.value);
              console.log(value);
              if (!isNaN(value)) {
                setFormData((prevData) => ({
                  ...prevData,
                  phone: value,
                }));
              }
            }}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={(e) => {
              e.preventDefault();
              setFormData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <p style={{ display: "inline" }}>Date of Birth</p>
          <input
            type="date"
            name="date"
            placeholder="Birth Date"
            onChange={(e) => {
              e.preventDefault();
              setFormData((prevData) => ({
                ...prevData,
                dateOfBirth: e.target.value,
              }));
            }}
          />
        </div>
      </form>
    </>
  );
}
