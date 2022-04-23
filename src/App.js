import "./index.scss";
import Rating from "./Components/Rating";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankYou from "./Components/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <div className="card">
          <Routes>
            <Route path="/" element={<Rating />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </div>
      </div>
      <div className="footer"></div>
    </BrowserRouter>
  );
}

export default App;
