import React, { useEffect, useState } from "react";

import Card from "../shared/Card";
const Admin = () => {
  const [allCenters, setAllCenters] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

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
          setAllCenters(result.data);
        } else {
          throw new Error(result.error.message);
        }
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  console.log("centers", allCenters);
  console.log("errorMessage", errorMessage);

  return (
    <div>
      <main>
        <h1>Admin</h1>
        <h2>Pending</h2>
        {allCenters.map((center) => {
          return (
            <Card
              name={center.name}
              address={center.address}
              number={center.number}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Admin;
