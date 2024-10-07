import { initialCaseStudy }                from "../../../data/PapersCategory";
import { TbArrowsSort }                    from "react-icons/tb";

import { useProvider }                     from "../../../context/HandlerContext";
import Topics                              from "./Topics";

import { Link }                            from "react-router-dom";



import axios                               from 'axios';

import { useEffect, useState }             from "react";








function Papers() {
  const [departments, setDepartments] = useState([]);
  const { nextTab, handleNextTab } = useProvider();
  
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('https://quizzy-react-adapt.onrender.com/api/departments');
        console.log('Fetched departments:', response.data);  // Log the result to the console
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);
  
  return (
    <>
      <div className="slogan__box">
        <h2 className="slogan__box-header">Papers</h2>
        <p className="slogan__box-slogan">
          Case Study, Practical, Main question paper
        </p>
      </div>
      <div className="us">
        <div className="choice">
            <h2 className="choice__category">Categories</h2>
          <div className="choice__flex">
            <p className="choice__flex-year" onClick={handleNextTab}>
              Yearly
            </p>
            <p className="choice__flex-topic" onClick={handleNextTab}>
              Topics
            </p>
          </div>
        </div>
        <div className="specification">
          <div className="specification__questionsyearly">
            <div className={nextTab ? "tar" : "conta "}>
              <div className="papers_category">
                <div className="case_study">
                  <h3 className="category_name">
                    <p className="control__name">Case Study</p>
                    <p className="control">
                      <p className="control__name">Sort by</p>
                      <TbArrowsSort className="control__sorting" />
                    </p>
                  </h3>
                  {initialCaseStudy.map((casestudy, index) => (
                    <CaseStudy casestudy={casestudy} key={index} />
                  ))}
                </div>
              </div>

              <div className="papers_category">
                <div className="practicals">
                  <h3 className="category_name">
                    <p className="control__name">Practicals</p>
                    <p className="control">
                      <p className="control__name">Sort by</p>
                      <TbArrowsSort className="control__sorting" />
                    </p>
                  </h3>
                  {initialCaseStudy.map((casestudy, index) => (
                    <CaseStudy casestudy={casestudy} key={index} />
                  ))}
                </div>
              </div>

              <div className="papers_category">
                <div className="main_paper">
                  <h3 className="category_name">
                    <p className="control__name">Main Paper</p>
                    <p className="control">
                      <p className="control__name">Sort by</p>
                      <TbArrowsSort className="control__sorting" />
                    </p>
                  </h3>
                  {initialCaseStudy.map((casestudy, index) => (
                    <CaseStudy casestudy={casestudy} key={index} />
                  ))}
                </div>
              </div>
            </div>

            <Topics />
          </div>
        </div>
      </div>
    </>
  );
}

function CaseStudy({ casestudy }) {
  return (
    <>
      <div className="management">
        <Link to="pdf">
          <div className="case">
            <div className="pdficon">
              <img
                src={casestudy.icon}
                alt={casestudy.name}
                className="pdfimg"
              />
            </div>
            <div className="casename">
              <span className="name">{casestudy.name}</span>
              <br />
              <span>{casestudy.years}</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Papers;
