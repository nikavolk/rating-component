import "./index.scss";
import Rating from "./Components/Rating";
import { Routes, Route, HashRouter } from "react-router-dom";
import ThankYou from "./Components/ThankYou";

function App() {
  return (
    <HashRouter>
      <div className="main-container">
        <div className="card">
          <Routes>
            <Route path="/" element={<Rating />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </div>
      </div>
      <div className="footer"></div>
    </HashRouter>
  );
}

export default App;
