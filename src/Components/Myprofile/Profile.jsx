import React, { useEffect, useState } from 'react'


import './profile.css'


const Profile = () => {

    const [myprofile, setmyProfile] = useState([])


    useEffect(()=>{
        apiFetchingProfile()
    },[])

    const apiFetchingProfile = async () => {
        var res = await fetch(`https://api.github.com/users/mdshahnawaz786`);
        var data = await res.json();
        console.log(data);
        setmyProfile(data)
      };


  return (
    <div className='myprofileContainer' >
      <h2 style={{marginBottom:"20px"}}>My GitHub Profile</h2>

     
      
      <div className='myProfileContainer'>
        <div className='myleftContainer'>
          <img src={ myprofile && myprofile.avatar_url} alt="" />
          <h3>{myprofile ? myprofile.name : "api fetching"}</h3>
        </div>
        <div className='mymyrightContainer'>
          <div className="myinnerrightContainer">
          <h2>{myprofile ? myprofile.login : "api fetching"}</h2>
          </div>
          <div className="myinnerrightContainer" style={{display:"flex",gap:"15px"}}>
            <div className="mydiv" style={{height:"40px",width:"120px",borderRadius:"16px",backgroundColor:"purple",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h3>Repos:{myprofile && myprofile.public_repos}</h3>
            </div>

            <div className="mydiv" style={{height:"40px",width:"180px",borderRadius:"16px",backgroundColor:"#f100b8",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h3>followers:{ myprofile && myprofile.followers}</h3>
            </div>
            <div className="mydiv" style={{height:"40px",width:"180px",borderRadius:"16px",backgroundColor:"#3d4451",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h3>following:{ myprofile && myprofile.following}</h3>
            </div>
            
            
            
          </div>
          <div className="myinnerrightContainer">
          <i class="fa-sharp fa-solid fa-location-check"></i>
            <h3>{ myprofile && myprofile.location}</h3>
          </div>
          <div className="myinnerrightContainer">
            <button><a href={ myprofile && myprofile.html_url}>VIEW PROFILE </a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
