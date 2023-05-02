import './App.css';
import { Routes,Route } from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import Searchpage from './Components/searchPage/Searchpage';
import Profiledetails from './Components/ProfileDetails/Profiledetails';
import Login from './Components/Login/Login';
import { useState } from 'react';
import Profile from './Components/Myprofile/Profile';

function App() {

  const [loggedin, setloggedin] = useState(false)

  return (
    <div className="App">
     {/* <Nav/> */}
     {loggedin ? <><Nav setloggedin={setloggedin}/></> : null}
     <Routes>
      <Route path='/' element={loggedin ? <Home/> : <Login setloggedin={setloggedin}/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profiledetails' element={<Profiledetails/>}/>
      <Route path='/searchpage' element={<Searchpage/>}/>
      <Route path='/myprofile' element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
