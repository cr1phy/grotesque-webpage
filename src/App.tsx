import "./App.css";
import Main from "./sections/Main";
import AboutUs from "./sections/AboutUs";
import Contacts from "./sections/Contacts";
import Projects from "./sections/Projects";
import { MouseSmooth } from "react-mouse-smooth";

const App = () => {
  MouseSmooth({});
  return (
    <div className="flex flex-col items-center justify-center">
      <Main />
      <AboutUs />
      <Projects />
      <Contacts />
    </div>
  );
};

export default App;

