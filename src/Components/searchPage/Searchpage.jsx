import React, { useEffect, useState } from 'react'
import './searchpage.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Searchpage = () => {

    const dispatch = useDispatch()
    const data = useSelector((state)=>{

        return state.userData
       })
      

    const [ state, setstate] = useState([])
    const [ input, setInput] = useState("")
    const [ toggle, setToggle] = useState(false)



    

    const apiFetching = async() =>{
        var res = await fetch(`https://api.github.com/users/${input}`)
        var data = await res.json()
        console.log(data);
        dispatch({
            type:'userData',
            payload:data
          })
    }

    const apiFetching2 = async () => {
      var res = await fetch(`https://api.github.com/users/${input}/repos`);
      var data = await res.json();
      console.log(data,"UserData");
      dispatch({
        type:'userRepo',
        payload:data
      })
    };

  return (
    <div className='searchPage'>

<div style={{textAlign:"center"}}>
<h1 style={{color:"#ebb546"}}>GitFetch - Profile Finder</h1>
<h1 style={{color:"#ebb546"}}>For GitHub</h1><br />
<h4 style={{color:"#92908d "}}>Chech out the repos, followers and more,</h4>
<h4 style={{color:"#92908d "}}>just by entering a Username!</h4><br />
</div><br /><br />
        
        <div className='ipContainer'>
        <input placeholder='Enter your username ' onChange={(e) => {
            setInput(e.target.value)
        }} type="text" />

<Link to={`/profiledetails`}>
<button onClick={() => {
        apiFetching()
        apiFetching2()
        console.log(data);

}}>SEARCH</button></Link>
        </div>


        
       
        </div>
  )
}

export default Searchpage






