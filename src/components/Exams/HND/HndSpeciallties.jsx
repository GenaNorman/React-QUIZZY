import { useProvider }       from "../../../context/HandlerContext";

import { Link }              from "react-router-dom";

import Popup                 from "reactjs-popup";

import "reactjs-popup/dist/index.css"; 
import { RxCross2 }          from "react-icons/rx";


import { IoIosArrowForward } from "react-icons/io";




function HndSpecialties() {
  const {
    name,
    // category,

    image,
    handleSubmit,
    setName,
    // setCategory,

    setImage,
    papers,
    setPapers,
    departmentList,
  } = useProvider();

  return (
    <>
      <div className="hndexams">
        <div className="slogan__box">
          <h2 className="slogan__box-header">Hnd Exams Papers</h2>
          <p className="slogan__box-slogan">
            Navigate Through Your Specific Department For Papers
          </p>
        </div>
        <div className="department">
          <span className="department_name">Engineering</span>
          <div className="flex">
            {/* /////////////////POPUP BOX//////////////////// */}
            <Popup
              trigger={<button className="btn"> Add  </button>}
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <div className="modal_heading">
                    <i className="close" onClick={close}>
                      <RxCross2 />
                    </i>
                    <div className="modal_header"> Add Depapartment </div>
                  </div>
                  <form className="content" onSubmit={handleSubmit}>
                    {/* <h3>Select A Category</h3>
                    <select
                      className="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>School Of Engineering</option>
                      <option>School Of Buisness</option>
                      <option>School Of Agriculture</option>
                      <option>School Of Medical Science</option>
                    </select> */}
                    <h3>Department logo</h3>
                    <input
                      type="file"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      className="category_logo"
                      placeholder="Max size 500kb"
                    />
                    <h3>Department Name</h3>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="..."
                      className="category_name"
                    />
                    <h3>Number of years Name</h3>
                    <input
                      value={papers}
                      onChange={(e) => setPapers(e.target.value)}
                      type="text"
                      placeholder="..."
                      className="category_name"
                    />
                    <br />
                    <button className="category_btn">Submit</button>
                  </form>
                </div>
              )}
            </Popup>
            {/* ////////////END OF POPUP///////////////////////// */}
            <span className="btn">
              View all
              <span>
                <IoIosArrowForward />
              </span>
            </span>
          </div>
        </div>
        <div className="specialties">
          {departmentList.map((specialty, index) => (
            <Specialty specialty={specialty} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

function Specialty({ specialty }) {
  return (
    <>
      <div className="specialty">
        <div className="specialty_icon">
          <img src={specialty.image} alt={specialty.id} className="iconimage" />
        </div>
        <div>
          <p className="specialty_name">{specialty.name}</p>
          <p className="specialty_papers">{specialty.papers} years</p>
          {/* <p className="specialty_papers">{specialty.courses}</p> */}
          <Link to={specialty.path}>
            <button className="open">Revise</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HndSpecialties;
