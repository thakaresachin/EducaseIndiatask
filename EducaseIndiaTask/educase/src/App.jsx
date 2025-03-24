
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Landing } from './Pages/Landing'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Signup from './Pages/Signup'

function App() {
  

  return (
    <>
      {/* <Landing/>
      <Login/>
      <Signup/>
      <Profile/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
    </Router> 
    </>
  )
}

export default App
