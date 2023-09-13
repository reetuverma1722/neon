import {Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Feedback from './Pages/Feedback';
import Favourites from './Pages/Favourites';
import Settings from './Pages/Settings';
import Profile from './Pages/Profile';

function App() {
  return (
    <div classNameName="App">
     
  
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
    <Route path="/favourite" element={<Favourites/>}/>
    <Route path="/settings" element={<Settings/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
    </div>
  );
}

export default App;
