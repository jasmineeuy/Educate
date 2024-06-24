import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../shared/Card";
const Admin = () => {
  const [allCenters, setAllCenters] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [deleted, setDeleted] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/api/centers/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode === 200) {
          console.log("gettingCenters", result.data);
          setAllCenters(result.data);
        } else {
          throw new Error(result.error.message);
        }
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  const deleteCenter = (centerId) => {
    fetch(`http://localhost:8080/api/admin/delete/${centerId}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("working", result);
      })
      .catch((error) => setErrorMessage(error.message));
  };
  const updateCenter = (id) => {
    console.log("id", id);
    navigate(`/edit/${id}`);
    console.log("clicked");
  };
  console.log("centers", allCenters);
  console.log("errorMessage", errorMessage);

  // const approved = true;
  const approved = allCenters.filter((center) => center.approved === true);
  console.log("approve", approved);
  const notApproved = allCenters.filter((center) => center.approved === false);
  console.log("no", notApproved);

  return (
    <div>
      <main>
        <h1>Admin</h1>

        <h2>Approved</h2>
        {approved.map((center) => (
          <Card
            key={center._id}
            name={center.name}
            address={center.address}
            number={center.number}
            handleDelete={() => deleteCenter(center._id)}
            handleEdit={() => updateCenter(center._id)}
          />
        ))}

        <h2>Pending</h2>
        {notApproved.map((center) => (
          <Card
            key={center._id}
            name={center.name}
            address={center.address}
            number={center.number}
            handleDelete={() => deleteCenter(center._id)}
            handleEdit={() => updateCenter(center._id)}
          />
        ))}
      </main>
    </div>
  );
};

export default Admin;
