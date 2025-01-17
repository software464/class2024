import React from 'react'
import { useEffect,useState } from 'react';
import {Link} from 'react-router'


export default  function  LoadUsers() {
    const[state,setState]=useState({
        data:[]
    })


    const colors=["red",
        'green','blue','purple','orange'
    ]
    let colorNumber=0;
    function getColor(){
        if (colorNumber==4)
            colorNumber=0;
        
        return colors[colorNumber++];
    }
    
    useEffect(()=>{
        
        async function loadData(){
            try {
            
                const r = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!r.ok) {
                    throw new Error(`${r.status} - ${r.statusText}`);
                }
                console.log("effect called");
                  const users = await r.json();
               
                setState({data:users})
               
                
                
                
                
    
    
            } catch (error) {
                console.error(error);
    
            }

        }
        loadData();


    },[]);
    const userData=state.data.length?state.data.map(u=>{ 
        const color=getColor();
        return <div className='user' key={u.id} style={{color:color}}> <h1>{u.name}</h1> <p>{u.company.name}</p>{u.email} <p></p> <Link to={`/posts/${u.id}/${u.name}/${color}`}>See posts</Link></div>}):<h1>loading</h1>
    
   
    
  return (
    
   
    <div className='users'>
    
      
      {userData}
      
     
     
    </div>
  )
}
