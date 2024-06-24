import React, { useEffect, useState } from "react";
import Card from "../shared/Card";

//connect search here and send props to card to change info in car props.title etc

const Search = () => {
  const [zipCode, setZipCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [centerList, setCenterList] = useState([]);

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setZipCode(event.target.value);
  };

  const handleCenterSearch = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/api/centers/search/${zipCode}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.statusCode === 200) {
          setCenterList(result.data);
        } else {
          throw new Error(result.error.message);
        }
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };
  console.log(centerList);
  return (
    <>
      <main className="search">
        <div className="search-container">
          <h1>Center Location</h1>
          <h2>
            Please enter your zipcode in the search bar to find the nearest
            center.
          </h2>
          <div>
            <form onSubmit={handleCenterSearch}>
              <input
                type="number"
                minLength="5"
                maxLength="5"
                id="centerSearch"
                placeholder="Enter your zipcode"
                onChange={handleSearchChange}
                value={zipCode}
              />
              <button>Enter</button>
              {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            </form>
          </div>
        </div>
        {console.log("num", centerList.length)}
        {centerList.length === 0 ? (
          <p>No centers found please enter another zipcode</p>
        ) : (
          centerList.map((center) => (
            <Card
              name={center.name}
              address={center.address}
              number={center.number}
            />
          ))
        )}
      </main>
    </>
  );
};

export default Search;
