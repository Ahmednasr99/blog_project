import React,{useState} from "react";


const Button = ({post})=>{

    const{like}=post
    const [likes,setLikes]= useState(like)


    
    
    return(
        <div>
            <button onClick={()=>{
                setLikes(likes+1)
            }}>Like:{likes}</button>
        </div>
    )
}

export default Button