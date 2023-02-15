import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";
import WarningPage from "./pages/WarningPage";

function App({ props }) {
  return (
    // <Routes>
    //   <Route path="/" element={<LandingPage props={props} />}></Route>
    //   <Route
    //     path="/result/:finalType"
    //     element={<ResultPage props={props} {...props} />}
    //   ></Route>
    // </Routes>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/result/:finalType" element={<ResultPage />}></Route>
      <Route path="/*" element={<WarningPage />}></Route>
    </Routes>
  );
}

export default App;
