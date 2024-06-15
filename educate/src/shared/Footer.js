import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
 import {faXTwitter} from "@fortawesome/free-brands-svg-icons"

import {faEnvelope} from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
  return (
      <footer>
        <p>Follow Us:</p>
        <ul>
          <li>
            {/* <i class="fa-brands fa-square-facebook"></i> */}
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            {/* <i class="fa-brands fa-square-x-twitter"></i> */}
            <FontAwesomeIcon icon={faXTwitter}/>
          </li>
          <li>
            {/* <i class="fa-solid fa-envelope"></i> */}
            <FontAwesomeIcon icon={faEnvelope}/>
          </li>
        </ul>
      </footer>

  );
};
export default Footer;
