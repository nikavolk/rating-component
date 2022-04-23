import Star from "../Assets/Images/icon-star.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Rating = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="main">
      <img className="star" src={Star} />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratings">
        <ul>
          <li>
            <a
              href="#"
              onClick={() => {
                setSelected(1);
              }}
            >
              1
            </a>
          </li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <Link to="/thankyou" state={{ selected }}>
        <button>Submit</button>
      </Link>
    </div>
  );
};

export default Rating;
