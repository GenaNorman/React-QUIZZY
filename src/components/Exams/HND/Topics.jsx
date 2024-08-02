import React from "react";
import { initialCaseStudy } from "../../../data/PapersCategory";
import { Link } from "react-router-dom";
import { useProvider } from "../../../context/HandlerContext";

function Topics() {
  const { nextTab } = useProvider();
  return (
    <div className={nextTab ? "next" : "forward"}>
      {initialCaseStudy.map((study, index) => (
        <Topicbased study={study} key={index} />
      ))}
    </div>
  );
}

function Topicbased({ study }) {
  return (
    <>
      <Link to="pdf">
        <div className="case">
          <div className="pdficon">
            <img src={study.icon} alt={study.name} className="pdfimg" />
          </div>
          <div className="casename">
            <span className="name">{study.name}</span>
            <br />
            <span>{study.years}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Topics;
