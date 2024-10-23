import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <nav></nav>
      <div>
        <Header />
        <AboutMe />
      </div>
    </Router>
  );
}

export default App;
