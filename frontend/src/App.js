import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp/SignUp.jsx'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
      <SignUp/>
      </BrowserRouter>
    </>
  );
}

export default App;
