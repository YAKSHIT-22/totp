import { Routes, Route } from "react-router-dom";
import Error from "./Error";
import AuthFlow from "./flow/AuthFlow";
import LandingPage from "./landing/LandingPage";
import Docs from "./docs/Docs";
import Examples from "./example/Examples";
import ExecutionStates from "./executionstates/ExecutionStates";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/flow' element={<AuthFlow />} />
      <Route path='/executionStates' element={<ExecutionStates />} />
      <Route path='/examples' element={<Examples />} />
      <Route path='/docs' element={<Docs />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;