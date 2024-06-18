import { React, useState } from "react";
import InputField from "../shared/inputField";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  return (
    <div>
      <main className="login">
        <section>
          <div>
            <h2>Log In</h2>
          </div>

          <form>
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
