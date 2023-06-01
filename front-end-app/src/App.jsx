import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginBased from './Components/LoginBased';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<LoginBased />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;