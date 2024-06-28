import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Cuts from './pages/cuts/cuts';
import Brews from './pages/brews/brews';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cuts' element={<Cuts></Cuts>}></Route>
        <Route path='/brews' element={<Brews></Brews>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
