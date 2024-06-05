import React from "react";

const Search = () =>{
    return(
        <div><main className="search">
        <h1>Center Location</h1>
        <h2>
          Please enter your zipcode in the search bar to find the nearest center.
        </h2>
        <div>
          <form>
            <input type=" text" placeholder="Enter your zipcode" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>
        <article>
          <h1>Center Name</h1>
          <p>Address</p>
          <p>Phone Number</p>
          <p>hours of operation</p>
        </article>
      </main></div>
    )
}

export default Search;