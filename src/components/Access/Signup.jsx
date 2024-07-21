// import React from "react";

// function Signup() {
//   return (
//     <div className="access">
//       <div className="access__left">
//         {/* <div> */}
//         <form action="post" className="signup">
//           <div className="signup__block">
//             <p className="signup__block-name">Username</p>
//             <input type="text" className="signup__block-field" />
//           </div>
//           <div className="signup__block">
//             <p className="signup__block-name">Email</p>
//             <input type="text" className="signup__block-field" />
//           </div>
//           {/* <div className="signup__block">
//             <p className="signup__block-name">School</p>
//             <select>
//               <option value="">Engineering</option>
//               <option value="">Agriculture</option>
//               <option value="">Buisness</option>
//               <option value="">Biomedical Science</option>
//             </select>
//           </div>
//           <div className="signup__block">
//             <p className="signup__block-name">Department</p>
//             <select>
//               <option value="" className="signup__block-field">
//                 Software Egineering
//               </option>
//               <option value="" className="signup__block-field">
//                 Network and Security
//               </option>
//               <option value="" className="signup__block-field">
//                 Cyber Security
//               </option>
//               <option value="" className="signup__block-field">
//                 Graphic Design
//               </option>
//             </select>
//           </div> */}
//           <div className="signup__block">
//             <p className="signup__block-name">Password</p>
//             <input type="text" className="signup__block-field" />
//           </div>
//           <div className="signup__block">
//             <p className="signup__block-name">Confirm Password</p>
//             <input type="text" className="signup__block-field" />
//           </div>
//           <button className="btn-signup">Sign Up</button>
//         </form>
//         {/* </div> */}
//       </div>
//       <div className="access__right"></div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      name: username,
      email,
      password,
    };

    try {
      const response = await fetch("https://quizzy-react-adapt.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        alert("Registration successful!");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div className="access">
      <div className="access__left">
        <form onSubmit={handleSubmit} className="signup">
          <div className="signup__block">
            <p className="signup__block-name">Username</p>
            <input
              type="text"
              className="signup__block-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup__block">
            <p className="signup__block-name">Email</p>
            <input
              type="email"
              className="signup__block-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup__block">
            <p className="signup__block-name">Password</p>
            <input
              type="password"
              className="signup__block-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup__block">
            <p className="signup__block-name">Confirm Password</p>
            <input
              type="password"
              className="signup__block-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="btn-signup" type="submit">Sign Up</button>
        </form>
      </div>
      <div className="access__right"></div>
    </div>
  );
}

export default Signup;
