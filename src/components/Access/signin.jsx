import React from "react";

function signin() {
  return (
    <div className="access">
      <div className="access__left">
        <form action="post" className="signup">
          <div className="signup__block">
            <p className="signup__block-name">Username</p>
            <input type="text" className="signup__block-field" />
          </div>
          <div className="signup__block">
            <p className="signup__block-name">Email</p>
            <input type="text" className="signup__block-field" />
          </div>
          <div className="signup__block">
            <p className="signup__block-name">Password</p>
            <input type="text" className="signup__block-field" />
          </div>
          <button className="btn-signup">Sign In</button>
        </form>  
      </div>
    </div>
  );
}

export default signin;
