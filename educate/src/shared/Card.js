import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons";

function Card({ name, address ,number}) {
  return (
    <div>
      <article>
        <p>{name}</p>
        <p>{address}</p>
        <p>{number}</p>
        <p>hours of operation</p>
        <FontAwesomeIcon icon={faPenToSquare}/>
      </article>
    </div>
  );
}

export default Card;
