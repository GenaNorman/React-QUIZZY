import React, { createContext, useContext, useState,useRef } from "react";
import { initialSpecialty } from "../data/Specialties";

const handlerContext = createContext();
function HandlerContext({ children }) {
  const [toggleNav, setToggleNav] = useState(true);
  const [departmentList, setDepartmentList] = useState(initialSpecialty);
  const [name, setName] = useState("");
  // const [category, setCategory] = useState("");
  const [papers, setPapers] = useState("");
  const [image, setImage] = useState();


  
  function handleAddNewDepartment(newDepartment) {
    setDepartmentList((departmentList) => [...departmentList, newDepartment]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !papers || !image) return;

    const id = crypto.randomUUID();
    const newDepartment = {
      id,
      name,
      // category,
      papers,
      image,
    };

    handleAddNewDepartment(newDepartment);
    setName("");
    // setCategory("");
    setPapers("");
    setImage("");
  }

  function hidesidebar() {
    setToggleNav(!toggleNav);
  }

  return (
    <handlerContext.Provider
      value={{
        hidesidebar,
        handleSubmit,
        setName,
        // setCategory,
        setPapers,
        setImage,
        toggleNav,
        name,
        // category,
        papers,
        image,

        departmentList,
        
      }}
    >
      {children}
    </handlerContext.Provider>
  );
}

function useProvider() {
  const context = useContext(handlerContext);
  if (context === undefined)
    throw new Error("Post conntext was used outside the nomination provider");
  return context;
}

export { HandlerContext, useProvider };
