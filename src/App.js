import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Profile} from "./component/home"
import {Education} from "./component/education"
import {Expirence} from "./component/expirence";
import {ResponsiveNavbar} from "./component/navbar"

function App() {
  return (
    <Router>
      <ResponsiveNavbar/>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/expirence" element={<Expirence />} />
      </Routes>
    </Router>
  );
}

export default App;
