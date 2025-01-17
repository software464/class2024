import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router';



export default  function  LoadPosts(props) {
    const {id}=props;
    const[state,setState]=useState({
        data:[]
    })

    
    
    useEffect(()=>{
        
        async function loadData(){
            try {
            
                const r = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
                if (!r.ok) {
                    throw new Error(`${r.status} - ${r.statusText}`);
                }
                console.log("effect called");
                  const comments= await r.json();
               
                setState({data:comments})
               
                
                
                
                
    
    
            } catch (error) {
                console.error(error);
    
            }

        }
        loadData();


    },[]);
    const commentData=state.data.length?state.data.map(c=><div className='comment' key={c.id}>  <p >{c.email}:</p>{c.body}<hr></hr></div>):null
    
    
    
   
    
  return (
    
   
    <div className='comments'>
    
      
      {commentData}
      
     
     
    </div>
  )
}

