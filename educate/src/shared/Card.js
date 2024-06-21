import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "../css/Card.css";

function Card({ name, address, number }) {
  return (
    <div>
      <article className="card-container">
        <div>
          <p>{name}</p>
          <p>{address}</p>
          <p>{number}</p>
          <p>hours of operation</p>
        </div>

        <button>
          EDIT
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </article>
    </div>
  );
}

export default Card;
