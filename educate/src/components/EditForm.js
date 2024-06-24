import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InputField from "../shared/inputField";

const EditForm = () => {
  const navigate = useNavigate();
  const { centerId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");

  const [center, setCenterState] = useState({});

  useEffect(() => {
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
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  const submitCenterForm = (event) => {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      address: event.target.address.value,
      zipcode: event.target.zipcode.value,
      number: event.target.number.value,
      email: event.target.email.value,
      approved: event.target.approved.value,
    };
    fetch(`http://localhost:8080/api/admin/update/${centerId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.statusCode);
        if (result.statusCode === 201) {
          console.log("resultfrom edit", result);
          setCenterState(result.data);
          navigate("/admin");
        } else {
          throw new Error(result.error.message);
        }
      });
  };
  console.log("centername", center);

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
          placeholder={center.name}
          handleChange={onInputChange}
        />
        <InputField
          type="text"
          inputName="Address"
          id="address"
          placeholder={center.address}
          handleChange={onInputChange}
        />
        <InputField
          type="number"
          inputName="zipcode"
          placeholder={center.zipcode}
          id="zipcode"
          handleChange={onInputChange}
        />
        <InputField
          type="number"
          inputName="Number"
          placeholder={center.number}
          id="number"
          handleChange={onInputChange}
        />
        <InputField
          type="email"
          inputName="Email"
          id="email"
          placeholder={center.email}
          handleChange={onInputChange}
        />
        <InputField
          type="boolean"
          inputName="Approved"
          id="approved"
          placeholder={center.approved}
          handleChange={onInputChange}
        />
        <button>Enter</button>
      </form>
    </div>
  );
};

export default EditForm;
