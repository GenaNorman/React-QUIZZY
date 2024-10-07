import React, { createContext, useContext, useState } from "react";
import { initialSpecialty } from "../data/Specialties";

const handlerContext = createContext();
function HandlerContext({ children }) {
  const [toggleNav, setToggleNav] = useState(false);
  const [departmentList, setDepartmentList] = useState(initialSpecialty);
  const [name, setName] = useState("");
  // const [category, setCategory] = useState("");
  const [papers, setPapers] = useState("");
  const [image, setImage] = useState();
  const [nextTab, setNextTab] = useState(false);
  const [prevTab, setPrevTab] = useState(false);

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

  function handleNextTab() {
    setNextTab(!nextTab);
  }
  function handlePrevTab() {
    setPrevTab(!prevTab);
  }
  return (
    <handlerContext.Provider
      value={{
        // department states/////////////
        hidesidebar,
        handleSubmit,
        handleNextTab,
        handlePrevTab,
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
        // ui states//////////////////
        nextTab,
        prevTab,
        
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
