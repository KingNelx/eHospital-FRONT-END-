import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginBased from './Components/LoginBased';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterBased from './Components/RegisterBased';
import DataView from './Components/DataView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<LoginBased />} />
       <Route path='/sign-up' element={<RegisterBased />} />
       <Route path='/all-data' element={<DataView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;