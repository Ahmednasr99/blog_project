import React, {useState,useEffect} from "react";

const AddPost = ()=>{
  const [form, setForm] = useState({title: '', image: '', description: ''})
  const [posts,setPosts]=useState([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const request = async () => {
   let req = await fetch('./posts')
   let res = await req.json()
   console.log(res)
   setPosts(res)  
 }
 useEffect(request,[])
 
  const updateForm =(e)=>{
    setForm({...form, [e.target.getAttribute('name')]: e.target.value})
  }



    return (
        <div className="formarea">
        <h3>Add a Post</h3>
        <form className="newpost" onSubmit={async (e) => {
        e.preventDefault()
        let req = await fetch("./posts", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(form) 
        })
        let res = await req.json()
        setPosts((prevState) => {return [...prevState, res]})
        alert("done")
      }} >
          <input type="text"  placeholder="Title" name="title" value={form.title} onChange={e => updateForm(e)}/>
          <br></br>
          <input type="url" placeholder="image" name="image" value={form.image} onChange={e => updateForm(e)} />
          <textarea type="text" placeholder="Description" name="description" value={form.description} onChange={e => updateForm(e)} />
          <button type="submit">Submit</button>
        </form>
        </div>
      );
}

export default AddPost