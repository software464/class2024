import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import LoadComments from './loadcomments.jsx'


export default  function  LoadPosts(props) {
    
    const[state,setState]=useState({
        data:[]
    })
    const[commentStatus,setCommStatus]=useState(
        []
    )
    const {id,name,color}=useParams();
   
    
    useEffect(()=>{
        
        async function loadData(){
            try {
            
                const r = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
                if (!r.ok) {
                    throw new Error(`${r.status} - ${r.statusText}`);
                }
                console.log("effect called");
                  const users = await r.json();
                 const temp =users.map(()=>
                    false
                )
               
                setState({data:users})
                setCommStatus(temp)
                
               
                
                
                
                
    
    
            } catch (error) {
                console.error(error);
    
            }

        }
        loadData();


    },[]);
    function toggleComments(index){
         const temp=[...commentStatus];
        temp[index]=!temp[index];
        setCommStatus(temp)

    }
    
        

    
    

   
    //addToState(temp);
    
    const postData=state.data.length?state.data.map((p,index)=><div className='post' key={p.id}> <h1>{p.title}</h1> <p>{p.body} <button onClick={
        ()=>{toggleComments(index)}} >{commentStatus[index]?"hide comments":"show comments"}</button></p><div>{commentStatus[index]?<LoadComments id={p.id}/>:null}</div></div>):<h1>loading</h1>
    
   
    
  return (
    
   
    <div className='posts' style={{color:color}}>
        <h1>posts by {name}</h1>
    
      
      {postData}
     
      
     
     
    </div>
  )
}

