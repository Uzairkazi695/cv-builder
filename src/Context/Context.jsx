import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    id:'',
    name: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    summary: "",
    workEx: [],
    education: [],
    skill: [],
  });
  return (
    <DataContext.Provider value={{ formData, setFormData }}>
      {children}
    </DataContext.Provider>
  );
};
