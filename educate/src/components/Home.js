import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import studentImage from "../../public/images/student.jpg";

const Home = () => {
  return (
    <div>
      <main>
        <section>
          {/* <!-- <div>
            <h2>Choose Your Language:</h2>
            <h2>Elige tu idioma:</h2>
          </div> -->
          <!-- <div class="translate-btn">
            <button>English</button>
            <button>Espanol</button>
          </div> --> */}
          <div>
            <img
              src={studentImage}
              alt="group of students sitting paying attention"
            ></img>
            <h2>Enter your zipcode in the search area.</h2>
          </div>

          <form>
            <input type=" text" placeholder="Enter your zipcode" />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </form>
        </section>

        <article class="index">
          <div class="info">
            <i class="fa-solid fa-1"></i>
            <div>
              {/* <!-- <p>Choose your Language</p>
              <p>Elige tu idioma</p> --> */}
              <p>Add your address to the search bar</p>
            </div>
          </div>
          <div class="info">
            <i class="fa-solid fa-2"></i>
            <div>
              {/* <!-- <p>Add your address to the search bar</p>
              <p>Anade tu direcion a la bara de busqueda</p> --> */}
              <p>See a list of homework help centers near you</p>
            </div>
          </div>
          <div class="info">
            <i class="fa-solid fa-3"></i>
            <div>
              {/* <!-- <p>See a list of homework help centers near you</p>
              <p>Vea una list de centros de ayuda cerca de ti</p> --> */}
              <p>Get the information you need for the centers help hours</p>
            </div>
          </div>
        </article>
        <section class="chat-contain">
          <h2>Check our community chat for help!</h2>
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
