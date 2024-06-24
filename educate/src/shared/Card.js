import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../css/Card.css";
// import Edit from "Card.js"

function Card({
  name,
  address,
  number,
  handleDelete,
  handleEdit,
  key,
  approved,
}) {
  return (
    <>
      <article className="card-container">
        <div key={key}>
          <p>{name}</p>
          <p>{address}</p>
          <p>{number}</p>
          <p>{approved}</p>
        </div>
        <div className="card-button-container">
          <button onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </article>
    </>
  );
}

export default Card;
