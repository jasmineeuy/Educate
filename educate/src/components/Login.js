import { React, useState } from "react";
import InputField from "../shared/inputField";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [loggedIn, isLoggedIn] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const user = {
    username: username,
    password: password,
  };

  const handleLogin = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/api/auth/login/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((result) => console.log("result",result))
      .catch((error) => console.log(error));
    if (loggedIn === true) {
      navigate("/loggedin");
    }
  };

  return (
    <div>
      <main className="login">
        <section>
          <div>
            <h2>Log In</h2>
          </div>

          <form onSubmit={handleLogin}>
            <div>
              <InputField
                type="text"
                inputName="Username"
                id="username"
                value={username}
                handleChange={handleUsernameChange}
              />
            </div>
            <div>
              <InputField
                type="text"
                inputName="Password"
                id="password"
                value={password}
                handleChange={handlePasswordChange}
              />
            </div>
            <button>Login</button>
            <a>Forgot Password</a>
          </form>
          <Link to="signup">Create an account</Link>
        </section>
      </main>
    </div>
  );
};

export default Login;
