import React, { useState } from 'react'

const  TodoList = () => {
    const[activity,setActivity]=useState("");
    const[listData,setListData]=useState([]);
    function addActivity(){
        //setActivity([...listData,activity])
        //console.log(listData)
        setListData((listData)=>{
            const updateList=[...listData,activity]
            console.log(updateList)
            setActivity("");
            return updateList 

        })
    }
    function removeActivity(i){
      const updatListData=listData.filter((elem,id)=>{
        return i!=id;
      })
      setListData(updatListData);
    }
    function removeAll(){
      setListData([])
    }
  return (
    <>
    <div className='container'>
        <div className='header'>ToDoList</div>
        <input type="text" placeholder='Enter your todo' onChange={(e)=>setActivity(e.target.value)}  />
        <button onClick={addActivity}>Add</button><br/><br/><br/>
        <p className='list-heading'>Here is your Todo list:{")"}</p>
        {listData!=[] && listData.map((data,i)=>{
          return(<>
          <p key={i}>
            <div className='listData'>{data}</div>
            <div className='btn-position'><button onClick={()=>removeActivity(i)}>remove(-)</button></div>

          </p>
          </>)
        })}
        {listData.length>=1 && <button onClick={removeAll}>Remove all</button>} 
        
    </div>
    </>
  )
}

export default  TodoList