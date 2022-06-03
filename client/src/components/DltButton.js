import React from "react";


const DltButton = ({post,setPosts}) =>{
    const{id}=post

    console.log(post)
    

    const handleDelete =async()=>{
        let req = await fetch(`./posts/${id}`,{
          method: "DELETE",
        })
        if(req.ok){
          setPosts((prevstate)=>{
            let arr = prevstate.filter((element)=>{
              return element.id!==id
            })
            return arr
          })
        }

      }
    
    return(
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default DltButton