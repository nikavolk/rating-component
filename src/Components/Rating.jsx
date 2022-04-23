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
        <input
          label="1"
          type="radio"
          name="radio"
          onClick={() => {
            setSelected(1);
          }}
        />
        <input
          label="2"
          type="radio"
          name="radio"
          onClick={() => {
            setSelected(2);
          }}
        />
        <input
          label="3"
          type="radio"
          name="radio"
          onClick={() => {
            setSelected(3);
          }}
        />
        <input
          label="4"
          type="radio"
          name="radio"
          onClick={() => {
            setSelected(4);
          }}
        />
        <input
          label="5"
          type="radio"
          name="radio"
          onClick={() => {
            setSelected(5);
          }}
        />
      </div>
      <Link to="/thankyou" state={{ selected }}>
        <button>Submit</button>
      </Link>
    </div>
  );
};

export default Rating;
