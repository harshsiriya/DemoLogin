import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loginanimation from "./Loginanimation";
import logo from "../../assets/logo.png";
import Loginform from "./Loginform";
import Loading from "./Loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/dashboard", { replace: true }); // Navigate directly
    }, 900); // Simulating a delay before navigation
  };

  return (
    <>
      {loading && <Loading />}
      <div className="login-flexer">
        <div className="flexer-left">
          <Loginanimation />
        </div>
        <div className="flexer-right">
          <div className="container-right">
            <div className="logo-box">
              <img src={logo} alt="logo" className="logo-img" />
            </div>
            <div>
              <Loginform onLogin={handleLogin} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
