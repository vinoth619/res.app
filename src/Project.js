import { useEffect, useState } from "react";

function Project(props){
  const {myproj,projects}=props
  const initial={projectname:'',projectsum:'',start:'',end:''}
  const [pb,setpb]=useState(false);
  const [pro,uppro]=useState([initial])

 const handlechange=(event,index,keyValue)=>{
    const {name,value}=event.target;
   uppro((predata) => {
      let newData = JSON.parse(JSON.stringify(predata));
      newData[index][keyValue] = value;
      return newData;
    });
 }

 useEffect(()=>{
  myproj(pro)
 },[pro])


          // ............................
 const open=(event)=>{
    event.preventDefault();
    if(pb==false){
      setpb(true)
      document.getElementById('openb').innerText="close"
      
       
    }
    if(pb==true){
        setpb(false)
      document.getElementById('openb').innerText="open"
  }}
    // .........................................

    const generate=()=>{
      uppro((pre)=>[...pre,initial])
    }
   
    return (
        <>
          <div id="pro-area" className="june">
            <div className="but-area">
              <h3>Projects</h3>
              <button id="openb" onClick={open}>open</button>
            </div>



            <div id="pro-fr">
                {pb==true?projects.map((e,i)=>{
                  return  <div key={i}><label>project name{i+1}:<br/><input type="text"  onChange={(e)=>handlechange(e,i,'projectname') }value={projects[i].projectname}></input><br></br></label>
                  <br/>
                  <label>project summary:<br/><textarea onChange={(e)=>handlechange(e,i,'projectsum')}value={projects[i].projectsum}></textarea ><br/></label>
                  <br/>
                  <label>starting date:<br/><input type="date" onChange={(e)=>handlechange(e,i,'start')}value={projects[i].start}></input><br/></label>
                  <br/>
                  <label>Ending date:<br/><input type="date" onChange={(e)=>handlechange(e,i,'end')}value={projects[i].end}></input><br/></label>
                  <hr></hr>
                  <br/>
                  </div>
                }):null}
                  </div>
                {pb==true?<button id="addmore" onClick={generate}>ADDMORE</button>:null}
           </div>
        </>)
   
}

export default Project