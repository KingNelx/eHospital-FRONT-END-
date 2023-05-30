import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from './Components/Start';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;