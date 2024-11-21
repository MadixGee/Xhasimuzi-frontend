import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp/SignUp.jsx'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard.jsx';



function App() {
  return (
    <>

      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    
   
    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
