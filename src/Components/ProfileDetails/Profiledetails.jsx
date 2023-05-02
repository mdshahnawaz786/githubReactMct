import React from 'react'
import { useSelector } from 'react-redux'
import './profiledetails.css'
import { Link } from 'react-router-dom'

const Profiledetails = () => {

  const data = useSelector((state)=>{

   return state.userData
  })

  const repo = useSelector((state)=>{

    return state.userRepo
   })



  return (
    <div className='profileDetails'>

<h2 style={{marginBottom:"20px"}}>GitHub Profile</h2>
      
      <div className='ProfileContainer'>
        <div className='leftContainer'>
          <img src={ data && data.avatar_url} alt="" />
        </div>
        <div className='rightContainer'>
          <div className="innerrightContainer">
          <h2>{data ? data.login : "api fetching"}</h2>
          </div>
          <div className="innerrightContainer" style={{display:"flex",gap:"15px"}}>
            <div className="div" style={{height:"40px",width:"120px",borderRadius:"16px",backgroundColor:"purple",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h3>Repos:{data && data.public_repos}</h3>
            </div>

            <div className="div" style={{height:"40px",width:"180px",borderRadius:"16px",backgroundColor:"#f100b8",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h3>followers:{ data && data.followers}</h3>
            </div>
            <div className="div" style={{height:"40px",width:"180px",borderRadius:"16px",backgroundColor:"#3d4451",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h3>following:{ data && data.following}</h3>
            </div>
            
            
            
          </div>
          <div className="innerrightContainer">
          <i class="fa-sharp fa-solid fa-location-check"></i>
            <h3>{ data && data.location}</h3>
          </div>
          <div className="innerrightContainer">
            <button><a href={ data && data.html_url}>VIEW PROFILE </a></button>
          </div>
        </div>
      </div>
      
<h2 style={{marginBottom:"20px"}}>Repositories</h2>

      <div className='repoContainer'>
       {repo && repo.map((ele)=>{
        return(
          <div className='repo'>
            <div className="leftrepoCreatedDiv">
            <div className="repLangDiv" style={{display:"flex",gap:"20px"}}>
           <div className="repoDiv">
            <p style={{color:"#ebb546"}}> Repo Name: {ele.name}</p>
            </div>
            <div className="languageDiv" style={{height:"20px",width:"170px",borderRadius:"16px",backgroundColor:"purple",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p>{ele.language}</p>
            </div>
           </div>
            
            <div className="TimingDiv">
            <p style={{color:"#ebb546"}}>Created At:{ele.created_at}</p>
            
            <p style={{color:"#ebb546"}}>Pushed At:{ele.pushed_at}</p>
            </div>
            </div>
            
            <div className="buttonDivFinal">
            <button><a href={ele.svn_url}>view repo</a></button>
            <button><a href={ele.homepage}>live demo</a></button>
            </div>
 
          </div>
        )
       })} 
      </div>
    </div>
  )
}

export default Profiledetails