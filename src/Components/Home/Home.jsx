import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './home.css'
import { Link } from "react-router-dom";


const Home = () => {
  const [userName, setname] = useState([]);

  const dispatch = useDispatch();
  const { user } = useSelector((storeData) => {
    return storeData;
  });

  // console.log(user);

  useEffect(() => {
    // if(user.length === 0){
    //     console.log("data send");
    //     apiFetching(apiFetching1)
    //   }
    apiFetching();
  }, []);

  const apiFetching = async () => {
    var res = await fetch("https://api.github.com/users");
    var data = await res.json();

    // console.log(data);
    dispatch({
      type: "user",
      payload: data,
    });
  };


  const apiFetching1 = async (name) => {
    var res = await fetch(`https://api.github.com/users/${name}`);
    var data = await res.json();
    console.log(data,"UserData");
    setname(data);
    dispatch({
      type:'userData',
      payload:data
    })
  };



  const apiFetching2 = async (name) => {
    var res = await fetch(`https://api.github.com/users/${name}/repos`);
    var data = await res.json();
    console.log(data,"UserData");
    dispatch({
      type:'userRepo',
      payload:data
    })
  };

  const apiFetching3 = async (url) => {
    var res = await fetch();
    var data = await res.json();
    console.log(data,"UserData");
    dispatch({
      type:'userlanguage',
      payload:data
    })
  };


  return (
    <div className="HomeContainer" >
      {user.length > 0 ? (
        <>
          {user.map((ele) => {
            return (
              <Link to={`/profiledetails`}>
              <div className="gridContainer" onClick={()=>{
                apiFetching1(ele.login)
                apiFetching2(ele.login)
                apiFetching3(ele.languages_url)
                
              }}>
                <div className="imgContainer">
                  <Link to={`/profiledetails`}>
                  <img onClick={()=>{
                    apiFetching1(ele.login)
                    apiFetching2(ele.login)
                    apiFetching3(ele.languages_url)
                    
                  }} src={ele.avatar_url} alt="" />
                  </Link>
                  
                </div>
                <div className="ContentContainer">
                  
                  <div className="uperContentContainer">
                  <p className="userName">{ele.login}</p>
                  <p>llowing/other_user</p>
                  </div>
                  <div className="lowerContentContainer">
                    <div className="flexDiv">
                        <p>Articles</p>
                        <p>38</p>
                    </div>
                    <div className="flexDiv">
                    <p>followers</p>
                        <p>980</p>
                    </div>
                    <div className="flexDiv">
                    <p>Rating</p>
                        <p>8.9</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            );
          })}
        </>
      ) : (
        <h3>No users fetched</h3>
      )}
    </div>
  );
};

export default Home;
