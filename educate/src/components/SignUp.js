import { React, useState } from "react";
import InputField from "../shared/inputField";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorMessage] = useState("");

  const handleFirstNameChange = (event) => {
    console.log(event.target.value);
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };

  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const newAccount = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    number: number,
    username: username,
    password: password,
  };
  console.log("newAccount", newAccount);
  const handleUserCreate = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAccount),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => {
        setErrorMessage(error);
        console.log(error);
      });
  };

  return (
    <div>
      <main className="signup">
        <section>
          <div>
            <h2>Sign Up</h2>
          </div>

          <form onSubmit={handleUserCreate}>
            <InputField
              type="text"
              inputName="First Name"
              id="firstName"
              value={firstName}
              handleChange={handleFirstNameChange}
            />
            <InputField
              type="text"
              inputName="Last Name"
              id="lastName"
              value={lastName}
              handleChange={handleLastNameChange}
            />
            <InputField
              type="text"
              inputName="Email"
              id="email"
              value={email}
              handleChange={handleEmailChange}
            />
            <InputField
              type="text"
              inputName="Number"
              id="number"
              value={number}
              handleChange={handleNumberChange}
            />
            <InputField
              type="text"
              inputName="Username"
              id="username"
              value={username}
              handleChange={handleUsernameChange}
            />
            <InputField
              type="text"
              inputName="Password"
              id="password"
              value={password}
              handleChange={handlePasswordChange}
            />

            <div>
              <button>Submit</button>
            </div>
            <a href="login.html">Already Have An Account?</a>
          </form>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
