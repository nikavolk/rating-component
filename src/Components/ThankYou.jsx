import { useLocation } from "react-router-dom";
import ThankYouIllustration from "../Assets/Images/illustration-thank-you.svg";

const ThankYou = () => {
  const location = useLocation();
  const { selected } = location.state;
  console.log(selected);

  return (
    <div>
      <img src={ThankYouIllustration} />
      <div className="selected-text">
        {selected === null
          ? "You have not selected a rating"
          : `You selected ${selected} out of 5`}
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
