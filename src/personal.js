import { useEffect, useState } from "react"

function Personal(props){
    const {myper,personal}=props
    const perde={pername:"",mail:"",phone:"",adress:""}
    const[person,up_person]=useState(perde)
    const [pb,setpb]=useState(false)

    const handlechange=(event)=>{
        const{name,value}=event.target

        up_person({...person,[name]:[value]})

    }

    useEffect(()=>{
        myper(person)
    },[person])
      // ............................
 const open=(event)=>{
    event.preventDefault();
    if(pb==false){
      setpb(true)
      document.getElementById('openbutton').innerText="close"
      
       
    }
    if(pb==true){
        setpb(false)
      document.getElementById('openbutton').innerText="open"
  }}
    // .........................................
   
  
    return (
        <>
            <div id="perform" className="june">
                <div className="but-area">
                <h3>personal details</h3>
                <button id="openbutton"onClick={open}>open</button> 
                </div>
       
          {pb==true? <form>
          <label>name: <br/><input type="text" name="pername" onChange={handlechange} value={personal.pername}></input></label>  
          <label> mail :<br/> <input type="text" name="mail" onChange={handlechange} value={personal.mail}></input></label>  
          <label>phone :<br/><input type="text" name="phone" onChange={handlechange} value={personal.phone}></input></label>  
          <label>Address:<br/><textarea name="adress" onChange={handlechange} value={personal.adress}></textarea></label>  

         </form>:null}
            </div>
       
        </>
    )
}
export default Personal