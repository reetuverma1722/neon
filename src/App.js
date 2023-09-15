import {Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Feedback from './Pages/Feedback';
import Favourites from './Pages/Favourites';
import Settings from './Pages/Settings';
import Profile from './Pages/Profile';
import UpcomingEvents from './Pages/UpcomingEvents';
import Events_details from './Pages/Events_details';
import Notifications from './Pages/Notifications';
import Index1 from './Pages/Index1';

import LoginForm from './Pages/LoginForm';

function App() {
  return (
    <div classNameNameName="App">
     
  
  <Routes>
    <Route path="/" element={<Index1/>}/>
    <Route path="/loginForm" element={<LoginForm/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
    <Route path="/favourites" element={<Favourites/>}/>
    <Route path="/settings" element={<Settings/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/upcomingEvents" element={<UpcomingEvents/>}/>
    <Route path="/favourites/events_details" element={<Events_details/>}/>
    <Route path="/notifications" element={<Notifications/>}/>
  </Routes>
    </div>
  );
}

export default App;
