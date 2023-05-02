import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './nav.css'

const Nav = ({setloggedin}) => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
        <div className="iconContainer">
          <div style={{height:"100%",width:"30%"}}>
            <Link to="/home">
            {/* <img style={{height:"100%",width:"100%",borderRadius:"64px"}} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /> */}
            <h1>GITHUB</h1>
            </Link>
            </div>
        </div>


      <div className='NavLink'>
        <ul>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/searchpage'>  <li>Search</li>  </Link>
          <Link to='/myprofile'>  <li>Profile</li>  </Link>

          <li  onClick={() => {
                setloggedin(false)
                navigate("/")
            }}>Logout</li>
          
          
        </ul>
      </div>


        
    </div>
  )
}

export default Nav