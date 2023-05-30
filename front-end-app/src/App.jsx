import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from './Components/Start';
import Home from './Components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;