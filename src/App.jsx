import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Topnav from './Topnav'; // Import your Topnav component
import History from './History';
import Map from './Map';
import User from './User';
import Ticket from './Ticket';

function App() {
  return (
    <Router>
      {/* Render Topnav outside of Routes to ensure it's always visible */}
      <Topnav />

      {/* Wrap your content with Routes to handle navigation */}
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/history" element={<History />} /> {/* Exact path not needed in v6 */}
        <Route path="/user" element={<User />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
