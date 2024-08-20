import logo from './logo.svg';
import './App.css';
import Personal from './personal';
import { useEffect,  useRef, useState } from 'react';
import Techskill from './techskills';
import NonTechskill from './NonTecnical';
import Education from './Education';
import Project from './Project';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

 
function App() {
  const pdfref=useRef()

  const perde={pername:"",mail:"",phone:"",adress:""}
  const initialValue={
    collegeName:"",
    course:"",
    year:""
  }

  const download=()=>{
      document.getElementById("form-area").style.display='none'
        const element=pdfref.current;
     

      html2canvas(element,{
        scale:20,useCORS:true
      }).then((canvas)=>{
        const imgdata=canvas.toDataURL('image/jpeg',2.0);
        const pdf=new jsPDF('p','mm','a4')
        const imgwidth=pdf.internal.pageSize.getWidth();
        const imgheight=(canvas.height*imgwidth)/canvas.width;
        const pageheight=pdf.internal.pageSize.getHeight();
        let heightleft=imgheight;
        let position=0;
        pdf.addImage(imgdata,'JPEG',0,position,imgwidth,imgheight);
        heightleft-=pageheight;
        while(heightleft>=0){
          position=heightleft-imgheight;
          pdf.addImage(imgdata,'JPEG',0,position,imgwidth,imgheight)
          heightleft-=pageheight

        }
        pdf.save('resume.pdf')
        document.getElementById("form-area").style.display="flex"


})
  

  
    
  }

  const initial={projectname:'',projectsum:'',start:'',end:''}

   
  const [personal,myperde]=useState(perde)
  const [educational,MyEducation]=useState([initialValue]);
  const[techskil,uptechskil]=useState(['']);
  const[Ntechskil,Nuptechskil]=useState(['']);
  const[projects,myproject]=useState([initial])
  let pervalues=Object.values(personal) 

  const myper=(e)=>{
    myperde(e)
   }
   const myTsk=(e)=>{
     uptechskil(e)
   }
   const myNTsk=(e)=>{
    Nuptechskil(e)
   }

   const myEdu=(e)=>{
     MyEducation(e)
   }
   const  myproj=(e)=>{
      myproject(e)
   }
    
  return (
     <>
        
     <div id="con">

      <div id="form-area">
     <Personal myper={myper}  personal={personal}/>
     <Education myEdu={myEdu} educational={educational}></Education>
     <Techskill myTsk={myTsk} techskil={techskil}></Techskill>
     <Project myproj={myproj} projects={projects}></Project>

     <NonTechskill myNTsk={myNTsk} Ntechskil={Ntechskil}></NonTechskill>
     </div>
     <button id='pdf' onClick={download}>DOWNLOAD</button>
      
   {/* ......................template column ............................................*/}
    <div id="temp-area" ref={pdfref}>

     <div id="per-temp">
     <h4 id="na" >{pervalues[0]}</h4>

     {pervalues.map((e,i)=>{
      return e!=''?<li key={i}>{e}</li>:null;
      })}
      </div>
      {/* personal information complted */}
        {/* education information start */}
       <div id="edu-temp">
       {educational[0].collegeName!=''||educational[0].course!=''?<h4>EDUCATION</h4>:null}
        {educational[0].collegeName!=''||educational[0].course!=''?<table>
          <thead>
        <tr>
          <th>Institution</th>
          <th> course</th>
          <th> year of pass out</th>


        </tr>
        </thead>
        <tbody>
        {educational.map((e,i)=>{
          return  <tr key={i}>{e.collegeName!=''?<td>{e.collegeName}</td>:null}
                     {e.course!=''?<td>{e.course}</td>:null}
                      {e.year!=''?<td>{e.year}</td>:null}
                      </tr>
          
        })}
        </tbody>
         
     </table>:null}
       </div>

       {/* education information end */}


       <div id="fl">
       <h4>TECHNICAL SKILLS</h4>

      <div id="tech-temp">
        {techskil.map((e,i)=>{
           return   e!=''?<li key={i}>{e}</li>:null;
        })}
        {/* technical skills complted */}
       </div>
        {/* projects start */}
        <h4>PROJECTS</h4>

        <div id="pro-temp">

        {projects.map((e,i)=>{
          return <div key={i}>{e.projectname!=''?<p>Project name : {e.projectname}</p>:null}<p className='jvl'>{e.projectsum}</p>{e.start!=''?<p> from :{e.start}</p>:null}{e.end!=''?<p>To :{e.end}</p>:null}</div> 
          })}
      </div >



      <h4>PERSONAL SKILLS</h4>

      <div id='Ntech-temp'>
      {Ntechskil.map((e,i)=>{
           return   e!=''?<li key={i}>{e}</li>:null;
        })}
      </div>

      </div>


      
  
      {/* pesonal skills complted */}

  
      </div>
     </div>
      

       
     </>
  );
}

export default App;
