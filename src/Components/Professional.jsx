import React, { useContext} from "react";
import { DataContext } from "../Context/Context";
import '../App.css'

export default function Professional() {
  const {formData, setFormData} = useContext(DataContext)
  return (
    <>
      <h2 className="left-header">Professional Summary</h2>

      <form className="summary-text">
        <textarea type="text" name="summary" placeholder="Summary" onChange={(e)=>{
            e.preventDefault()
            setFormData((prevData)=>({
              ...prevData,summary: e.target.value
            }))
          }}></textarea>
      </form>
    </>
  );
}
