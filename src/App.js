import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Profile} from "./component/home"
import {Education} from "./component/education"
import {Expirence} from "./component/expirence";
import {ResponsiveNavbar} from "./component/navbar";
import {Project} from "./component/project";

function App() {
  return (
    <Router>
      <ResponsiveNavbar/>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/expirence" element={<Expirence />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
