import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InputField from "../shared/inputField";

const EditForm = () => {
  const navigate = useNavigate();
  const { centerId } = useParams();

  const [center, setCenterState] = useState({});
  useEffect = () => {
    fetch(`http://localhost:8080/api/admin/center/${centerId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode === 200) {
          console.log(result);
          setCenterState(result.data);
        } else {
          throw new Error(result.error.message);
        }
      });
  };
  const submitCenterForm = (event) => {
    event.preventdefault();
    const body = {
      name: event.target.name.value,
      address: event.target.address.value,
      zipcode: event.target.zipCode.value,
      number: event.target.number.value,
      email: event.target.email.value,
    };
    fetch(`http://localhost:8080/api/admin/update/${centerId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode === 200) {
          console.log(result);
          setCenterState(result.data);
          navigate("/admin");
        } else {
          throw new Error(result.error.message);
        }
      });
  };

  const onInputChange = (event) => {
    console.log(event.target.value);
  };

  

  return (
    <div>
      <form onSubmit={submitCenterForm}>
        <InputField
          type="text"
          inputName="Name"
          id="name"
          value="centerName"
          handleChange={onInputChange}
        />
        <InputField
          type="text"
          inputName="Address"
          id="Address"
          value="address"
          handleChange={onInputChange}
        />
        <InputField
          type="text"
          inputName="zipcode"
          id="zipcode"
          value="zipCode"
          handleChange={onInputChange}
        />
        <InputField
          type="text"
          inputName="Number"
          id="Number"
          value="number"
          handleChange={onInputChange}
        />
        <InputField
          type="text"
          inputName="Email"
          id="email"
          value="email"
          handleChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default EditForm;
