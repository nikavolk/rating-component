import { useLocation } from "react-router-dom";
import ThankYouIllustration from "../Assets/Images/illustration-thank-you.svg";

const ThankYou = () => {
  /* initiating useLocation prop to access props passed through Router's <Link> */
  const location = useLocation();
  const { selected } = location.state;

  return (
    <div className="main">
      <div className="illustration">
        <img
          src={ThankYouIllustration}
          alt="Thank you for submitting a rating!"
        />
      </div>
      <div className="selected-rating">
        <p>
          {selected === null
            ? "You have not selected a rating"
            : `You selected ${selected} out of 5`}
        </p>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
