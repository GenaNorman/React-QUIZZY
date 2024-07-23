import React, { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

// import Calendar from "react-calendar";


function StudentDashboard() {
  // const [value, onChange] = useState(new Date());
  return (
    <>
      <div>
        <div className="avatar">
          <div className="avatar__bio">
            <img
              src="/images/Illustration/user.png"
              alt="undraw illustr"
              className="avatar__bio-photo"
            />
            <div>
              <h2 className="avatar__bio-caption">
                Hello Norman, Welcome Back!!!
              </h2>
              <p className="avatar__bio-name">
                Lets continue  preparing you for your upcoming
                national exams
              </p>
            </div>
          </div>
          {/* <div>
            <Calendar onChange={onChange} value={value} />
          </div> */}
        </div>
        <div className="review">
          <div className="review__control">
            <p className="review__control-heading">Your Courses</p>
            <p></p>
          </div>
          <div className="review__courses">
            <div className="review__courses--type">
              <div>
                <button className="btn btn__active">Active</button>
                <p className="review__courses--type-name">Programming</p>
                <p className="review__courses--type-duration">12 days left</p>
              </div>
              <img
                src="/images/courses/programming.png"
                alt="react"
                className="review__courses--type-icon"
              />
            </div>
            <div className="review__courses--type">
              <div>
                <button className="btn btn__completed">completed</button>
                <p className="review__courses--type-name">Cyber Security</p>
                <p className="review__courses--type-duration">12 days left</p>
              </div>
              <img
                src="/images/courses/security.png"
                alt="react"
                className="review__courses--type-icon"
              />
            </div>
            <div className="review__courses--type">
              <div>
                <button className="btn btn__expired">expired</button>
                <p className="review__courses--type-name">Node js</p>
                <p className="review__courses--type-duration">12 days left</p>
              </div>
              <img
                src="/images/courses/node.png"
                alt="react"
                className="review__courses--type-icon"
              />
            </div>
            <div className="review__courses--type">
              <div>
                <button className="btn btn__inactive">Inactive</button>
                <p className="review__courses--type-name">React js</p>
                <p className="review__courses--type-duration">12 days left</p>
              </div>
              <img
                src="/images/courses/react.png"
                alt="react"
                className="review__courses--type-icon"
              />
            </div>
          </div>
        </div>
        <div className="study">
          <div className="study__revision">
            <h3 className="study__revision-heading">
              <p className="study__revision--heading-name">Continue Revising</p>
              <p>see all</p>
            </h3>
            <div className="revise">
              <FaFilePdf className="revise__pdficon" />

              <div className="revise__casename">
                <span className="revise__casename-name">
                  Digital Electronics
                </span>
                <br />
                <span className="revise__casename-year">2020</span>
              </div>
              <p>
                <IoIosArrowForward  className="revise__icon" />
              </p>
            </div>
            <div className="revise">
              <FaFilePdf className="revise__pdficon" />

              <div className="revise__casename">
                <span className="revise__casename-name">
                  Digital Electronics
                </span>
                <br />
                <span className="revise__casename-year">2020</span>
              </div>
              <p>
                <IoIosArrowForward className="revise__icon" />
              </p>
            </div>
            <div className="revise">
              <FaFilePdf className="revise__pdficon" />

              <div className="revise__casename">
                <span className="revise__casename-name">
                  Digital Electronics
                </span>
                <br />
                <span className="revise__casename-year">2020</span>
              </div>
              <p>
                <IoIosArrowForward className="revise__icon" />
              </p>
            </div>
            <div className="revise">
              <FaFilePdf className="revise__pdficon" />

              <div className="revise__casename">
                <span className="revise__casename-name">
                  Digital Electronics
                </span>
                <br />
                <span className="revise__casename-year">2020</span>
              </div>
              <p>
                <IoIosArrowForward className="revise__icon" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
