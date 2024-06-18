import {React,useState} from "react";
import Card from "../shared/Card";


//connect search here and send props to card to change info in car props.title etc

const Search = () => {


  const [search,setSearch]=useState=("");

  const handleSearchChange = (event)=>{
    console.log(event.target.value);
    setSearch(event.target.value);

  }


  return (
    <div>
      <main className="search">
        <h1>Center Location</h1>
        <h2>
          Please enter your zipcode in the search bar to find the nearest
          center.
        </h2>
        <div>
          <form>
            <input type="text" id="centerSearch" placeholder="Enter your zipcode" onChange={handleSearchChange} value={search}/>
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>
        <Card />
      </main>
    </div>
  );
};

export default Search;
