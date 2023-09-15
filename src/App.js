import { Route, Routes } from "react-router-dom";
// import MonetorRequest from "./components/Routes/MonetorRequest/MonetorRequest";
import SigninForm from "./components/Routes/authentication/SinginForm/SignipForm";
import SignupForm from "./components/Routes/authentication/SignupForm/SignupForm";
import FindSkills from "./components/Routes/FindSkills/FindSkills";
import MonetorRequest from "./components/Routes/MonetorRequest/MonetorRequest";
import Home from "./pages/Home/Home";
import Root from "./components/mentorDashboard/Root";
import Dashboard from "./components/mentorDashboard/Dashboard/Dashboard";
import MentorProfile from "./components/mentorDashboard/Profile/MentorProfile";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/monetor-request" element={<MonetorRequest />} />
        <Route path="/find-skill" element={<FindSkills />} />
        <Route path="/mentorhome" element={<Root />}>
          <Route index element={<Dashboard />} />
          <Route path="/mentorhome/mentorprofile" element={<MentorProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
