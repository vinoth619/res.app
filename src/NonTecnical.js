import { useEffect, useState } from "react";

function NonTechskill(props){
  const{myNTsk,Ntechskil}=props
    const [pb,setpb]=useState(false)
    const [inp,geninp]=useState(['']);
    const[Tsk,upTsk]=useState([])


    // ..............................
    const open=(event)=>{
        event.preventDefault();
        if(pb==false){
          setpb(true)
          document.getElementById('openbut').innerText="close"
          }
        if(pb==true){
            setpb(false)
          document.getElementById('openbut').innerText="open"
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
       myNTsk(Tsk)
      },[Tsk])

       const generate=()=>{
     
      geninp([...inp,''])
       }
     
    return(<>
        <div id="NTech-area" className="june">
                <div className="but-area">
                <h3>  personal skills</h3>
                <button id="openbut"onClick={open}>open</button> 
                </div>

                <div id="tech-fr">
                {pb==true?inp.map((e,i)=>{
                  return  <div key={i}><label>skill{i+1}:<br/><input type="text"  value={Ntechskil[i] || ''}onChange={(e)=>handlechange(e,i)}></input><br></br></label></div>
                }):null}
                  </div>
                {pb==true?<button id="addmore" onClick={generate}>ADDMORE</button>:null}
              
                </div>

    </>)
    // myNTsk={myNTsk} Ntechskil={Ntechskil}
}
export default NonTechskill