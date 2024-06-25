import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  fa1,
  fa2,
  fa3,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import background from "../images/background-green.jpg";
const Home = () => {
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();
  const handleZipCodeChange = (event) => {
    console.log(event.target.value);
    setZipCode(event.target.value);
  };

  const handleZipCodeSearch = (event) => {
    event.preventDefault();
    navigate("/search");
  };

  return (
    <div>
      <main>
        <section className="home">
          <img
            src={background}
            alt="background  with school supplies, pencil, books, globe"
            style={{ width: "100%" }}
          />
          <section className="textOverBackground">
            <div>
              <h2>Enter your zipcode in the search area.</h2>
            </div>

            <form onSubmit={handleZipCodeSearch}>
              <input
                type=" number"
                minLength="5"
                maxLength="5"
                placeholder="Enter your zipcode"
                onChange={handleZipCodeChange}
                value={zipCode}
              />
              {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
              <button>Search</button>
            </form>
          </section>
        </section>

        <article className="index">
          <div className="info">
            <FontAwesomeIcon icon={fa1} />
            <div>
              {/* <!-- <p>Choose your Language</p>
              <p>Elige tu idioma</p> --> */}
              <p>Add your address to the search bar</p>
            </div>
          </div>
          <div className="info">
            <FontAwesomeIcon icon={fa2} />
            <div>
              {/* <!-- <p>Add your address to the search bar</p>
              <p>Anade tu direcion a la bara de busqueda</p> --> */}
              <p>See a list of homework help centers near you</p>
            </div>
          </div>
          <div className="info">
            <FontAwesomeIcon icon={fa3} />
            <div>
              {/* <!-- <p>See a list of homework help centers near you</p>
              <p>Vea una list de centros de ayuda cerca de ti</p> --> */}
              <p>Get the information you need for the centers help hours</p>
            </div>
          </div>
        </article>
        <section className="chat-contain">
          <h2>Upcoming Updates</h2>
          <h3>Check our community chat for help!</h3>
          <p>
            With our community chat you can post and image or comment about your
            child's homework question. Our members can then help with
            translating or how to work on the assignment
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
