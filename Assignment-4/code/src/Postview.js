
import React, { useEffect, useState } from 'react';
import './Postview.css';
import logo from './Images/logo.svg';
import camera_icon from "./Images/camera_icon.jpg"
import threedot from "./Images/three-dot.png"
import likeButton from "./Images/likeButton.png"
import shareButton from "./Images/shareButton.png"



const Postview=()=> {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3004/user")
      .then(res=>res.json())
      .then((res)=>{
        console.log(res);
        setPosts(res)
        // console.log(posts)
      }).catch((e)=>console.log("error message-->",e))
  },[])
  return (
    <div className="site-container">
      <header>
      <img src={logo} className="logo" alt='Cannot load logo'/>
        <span className='title'>InstaClone</span>
        <a href = "https://www.google.com" target = "_blank" className='camera-icon-link'><img className='camera-icon' src={camera_icon} alt='camera icon not found' /></a>
        </header>
        <div className='blank'></div>


      {/* {posts.length && <ListComponent />} */}
      {posts.length && 
          <ul className='Posts'>
          { posts.map((post,index)=> {
            // const postImage = require(post.PostImage)
            console.log(post.PostImage)

            return (
  // -------------------------------------------------------------------------------
              <li className='post-block' key = {index}>
                <div className='post-header'>
                  <div className='person-info'>
                    <p className='person-name'>{post.name}</p>
                    <p className='person-location'>{post.location}</p>
                  </div>
                  <a href = "#" className='more-options'><img className='threedot' src={threedot} alt='more not found' /></a>
                </div>
                <div className='postImage'>
                 <img className = "image" src={post.PostImage} alt = "post image"/>

                </div>
                <div className='postBody'>
                  <div className='buttons'>
                    <img src = {likeButton} alt = "like button" className='like-button'/>
                    <img src = {shareButton} alt = "share button" className='share-button'/>
                    <span className='date'>{post.date}</span>

                  </div>
                  <div className='likes'>{post.likes} likes</div> <br />
                  <div className='description'>{post.description}</div>


                </div>




                </li>
  // -------------------------------------------------------------------------------    
            )
          } )}
        </ul>
      }
    </div>
  );
}

export default Postview;
