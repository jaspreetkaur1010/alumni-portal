import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage';
import MessagePortal from './Pages/MessagePortal';
import UserProfile from './Pages/UserProfie';
import { userDemo } from './constants';


function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/message" element={<MessagePortal />} />
      <Route path="/userprofile" element={<UserProfile  />} />
    </Routes>

  )
}

export default App
