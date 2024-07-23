import { initialCaseStudy } from "../../../data/PapersCategory";
import { TbArrowsSort } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useProvider } from "../../../context/HandlerContext";
import Topics from "./Topics";
function Papers() {
  const { activeTab, setActiveTab } = useProvider();
  return (
    <>
      <div className="slogan__box">
        <h2 className="slogan__box-header">Papers</h2>
        <p className="slogan__box-slogan">
          Case Study, Practical, Main question paper
        </p>
      </div>
      <div>
        <div className="choice">
          <div className="choice__flex">
            <p className="choice__flex-year">Yearly</p>
            <Link to="../HND/Topics.jsx">
              <p className="choice__flex-topic">Topics</p>
            </Link>
          </div>
        </div>
        <div className="specification">
          <div className="specification__questionsyearly">
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
          {/* <Topics/> */}
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
