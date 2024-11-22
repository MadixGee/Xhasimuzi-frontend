import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp/SignUp.jsx'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard.jsx';
import Elections from './Elections/Elections.jsx';
import AllElections from './Elections/allElections.jsx';
import Update from './updateParty/update.jsx';
import Vote from './Elections/addVote.jsx';
import LandingPage from './landingPage/landingPage.jsx';


function App() {
  return (
    <>

      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/elections" element={<Elections />} />
      <Route path="/allElections" element={<AllElections />} />
      <Route path="/update" element={<Update />} />
      <Route path="/addVote" element={<Vote />} />
      <Route path="/landingPage" element={<LandingPage />} />

    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
