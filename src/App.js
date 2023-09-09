import { Route, Routes } from "react-router-dom";
import MonetorRequest from "./components/Routes/MonetorRequest/MonetorRequest";
import SigninForm from "./components/Routes/authentication/SinginForm/SignipForm";
import SignupForm from "./components/Routes/authentication/SignupForm/SignupForm";
import FindSkills from "./components/Routes/FindSkills/FindSkills";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SigninForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/monetor-request" element={<MonetorRequest />} />
        <Route path="/find-skill" element={<FindSkills />} />
      </Routes>
    </div>
  );
};

export default App;
