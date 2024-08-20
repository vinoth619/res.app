import { useEffect, useState } from "react";

function Techskill(props){
  const{myTsk,techskil}=props
    const [pb,setpb]=useState(false)
    const [inp,geninp]=useState(['']);
    const[Tsk,upTsk]=useState([])


    // ..............................
    const open=(event)=>{
        event.preventDefault();
        if(pb==false){
          setpb(true)
          document.getElementById('openbutt').innerText="close"
          }
        if(pb==true){
            setpb(false)
          document.getElementById('openbutt').innerText="open"
      }}
      //....................................

      const handlechange=(event,index)=>{
       const{name,value}=event.target;

      upTsk(predata=>{
        let newData=[...predata]
        newData[index]=value
        return newData
      })}

      useEffect(()=>{
       myTsk(Tsk)
      },[Tsk])

       const generate=()=>{
     
      geninp([...inp,''])
       }
     
    return(<>
        <div id="Tech-area" className="june">
                <div className="but-area">
                <h3>Technical skills</h3>
                <button id="openbutt"onClick={open}>open</button> 
                </div>

                <div id="tech-fr">
                {pb==true?inp.map((e,i)=>{
                  return  <label key={i}>skill{i+1}:<br/><input type="text"  value={techskil[i] || ''}onChange={(e)=>handlechange(e,i)}></input><br></br></label>
                }):null}
                  </div>
                {pb==true?<button id="addmore" onClick={generate}>ADDMORE</button>:null}
              
                </div>

    </>)
}
export default Techskill