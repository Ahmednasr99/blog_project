import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import './style.css';
import Button from "./Button";
import DltButton from "./DltButton";

const Post = ()=> {
  
  const [posts,setPosts]=useState([])

 // eslint-disable-next-line react-hooks/exhaustive-deps
 const request = async () => {
  let req = await fetch('./posts')
  let res = await req.json()
  console.log(res)
  setPosts(res)  
}
useEffect(request,[])





    return (
      <div >
        {
          posts.map((post) =>{
            return(
            <div className="postItems">
            <h2>{post.title}</h2>
            <img width="300px" height="200px" alt="" src={post.image}/>
            <h3>{post.description}</h3>
            <div id="btns">
            <Link className="button" to="#">Edit</Link>
            <DltButton post={post} setPosts={setPosts}/>
            <Button post={post}/>
            <input className="input" type="text" placholder="comment"></input>
            </div>
            </div>
          )
          })
        }

      </div>

    
    );
  }
  
  export default Post