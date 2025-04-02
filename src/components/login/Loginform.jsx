import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Loginform = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-form">
      <h1>Login Form</h1>
      <div className="input-flexer">
        <label htmlFor="Username" style={{display:"flex"}}>
          User Name <span className="span-star">*</span>
        </label>
        <input type="text" className="input-section" placeholder="Enter User Name" />

        <label htmlFor="Password" style={{display:"flex"}}>
          Password <span className="span-star">*</span>
        </label>
        <div className="password-container" style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <input
            type={showPassword ? "text" : "password"}
            className="input-section"
            placeholder="Enter Password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="eye-button"
            style={{
              position: "absolute",
              right: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="login-submit">
        <button className="login-button" onClick={onLogin}>Submit</button>
      </div>
    </div>
  );
};

export default Loginform;
