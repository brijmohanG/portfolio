import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Profile} from "./component/home"
import {Education} from "./component/education"
import {Expirence} from "./component/expirence";
import {ResponsiveNavbar} from "./component/navbar";
import {Project} from "./component/project";
import { Footer } from './component/footer';

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
      <Footer/>
    </Router>
  );
}

export default App;
