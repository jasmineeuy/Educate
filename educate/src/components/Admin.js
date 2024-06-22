import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        console.log(result);
      })
      .catch((error) => setErrorMessage(error.message));
  };
  const update = () => {
    <Link to="/edit">Edit</Link>;
    console.log("clicked");
  };
  console.log("centers", allCenters);
  console.log("errorMessage", errorMessage);

  // const approved = true;
  const approved = allCenters.filter((center) => center.approved === false);
  console.log("approve", approved);
  const notApproved = allCenters.filter((center) => center.approved === true);
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
            onClick={()=>deleteCenter(center._id)}
            update={update()}
          />
          
        ))}

        <h2>Pending</h2>
        {notApproved.map((center) => (
          <Card
            key={center._id}
            name={center.name}
            address={center.address}
            number={center.number}
            // onClick={deleteCenter(center._id)}
            // update={<Link to="/edit">Edit</Link>}
          />
        ))}
      </main>
    </div>
  );
};

export default Admin;
