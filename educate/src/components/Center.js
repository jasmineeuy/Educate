import { React, useState } from "react";
import InputField from "../shared/inputField";

const Center = () => {
  const [centerName, setCenterName] = useState("");
  const [address, setCenterAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [number, setCenterNumber] = useState("");
  const [email, setCenterEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCenterNameChange = (event) => {
    console.log(event.target.value);
    setCenterName(event.target.value);
  };

  const handleCenterAddressChange = (event) => {
    console.log(event.target.value);
    setCenterAddress(event.target.value);
  };

  const handleCenterNumberChange = (event) => {
    console.log(event.target.value);
    setCenterNumber(event.target.value);
  };

  const handleCenterEmailChange = (event) => {
    console.log(event.target.value);
    setCenterEmail(event.target.value);
  };
  const handleZipCodeChange = (event) => {
    console.log(event.target.value);
    setZipCode(event.target.value);
  };
  const newCenter = {
    name: centerName,
    address: address,
    zipcode: zipCode,
    number: number,
    email: email,
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(newCenter);
    fetch(`http://localhost:8080/api/centers/add-facility`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCenter),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => {
        setErrorMessage(error);
      });
    console.log("It is working");
  };

  return (
    <div>
      <main className="form">
        <article>
          <h1>Tutoring Form</h1>
          <h2>Have a center to add?</h2>
          <form onSubmit={handleFormSubmit}>
            <InputField
              type="text"
              inputName="Name"
              id="name"
              value={centerName}
              handleChange={handleCenterNameChange}
            />
            <InputField
              type="text"
              inputName="Address"
              id="Address"
              value={address}
              handleChange={handleCenterAddressChange}
            />
            <InputField
              type="text"
              inputName="zipcode"
              id="zipcode"
              value={zipCode}
              handleChange={handleZipCodeChange}
            />
            <InputField
              type="text"
              inputName="Number"
              id="Number"
              value={number}
              handleChange={handleCenterNumberChange}
            />
            <InputField
              type="text"
              inputName="Email"
              id="email"
              value={email}
              handleChange={handleCenterEmailChange}
            />
            <button>Button</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default Center;
