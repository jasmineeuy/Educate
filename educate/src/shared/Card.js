import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../css/Card.css";
// import Edit from "Card.js"

function Card({ name, address, number, onClick, key,update }) {
  return (
    <div>
      <article className="card-container">
        <div key={key}>
          <p>{name}</p>
          <p>{address}</p>
          <p>{number}</p>
          <p>hours of operation</p>
        </div>

        <button onClick={onClick}>
          {update}
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={onClick}>
          {update}
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </article>
    </div>
  );
}

export default Card;
