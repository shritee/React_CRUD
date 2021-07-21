import React, {useContext, useState} from'react'
import TextField from '@material-ui/core/TextField';
import {stdContext} from '../context/stdContext'


export default function Forms(props) {
    const context=useContext(stdContext)
    const [qualifation, setqualifation] = useState("")
    const [course, setcourse] = useState("")
    const [institute, setinstitute] = useState("")
    const [year, setyear] = useState("")
    const [percent, setpercent] = useState("")

    const changeSave=(e,type)=>{
        if(type === "quali") setqualifation(e.target.value)
        else if (type === "course") setcourse(e.target.value)
        else if (type === "institute") setinstitute(e.target.value)
        else if(type === "year") setyear(e.target.value)
        else if(type === "percent") setyear(e.target.value)
    }
    const submit=()=>{
        context.add(qualifation,course,institute,year,percent)
        setqualifation("")
        setcourse(" ")
        setinstitute(" ")
        setyear(" ")
        setpercent(" ")
        
    }
    return(
        <>
        <div>
        <div style={{justifyContent:"center" ,display:"grid"}}>
        <h2 id="simple-modal-title" style={{color:"#336699"}}>Educational</h2>
        </div>
        <div>
      
      <form noValidate autoComplete="off" >
      <TextField id="standard-basic"  label="Your Qualification" name="qualifation" style={{margin:10}} onChange={(e)=>{changeSave(e,"quali")}}/>
      <TextField id="standard-basic"  label="Course" name="course" style={{margin:10}} onChange={(e)=>{changeSave(e,"course")}}/>
      <TextField id="standard-basic"  label="Institution" name="institute"style={{margin:10}} onChange={(e)=>{changeSave(e,"institute")}}/>
      <TextField id="standard-basic"  label="Passing Year" name="year" style={{margin:10}} onChange={(e)=>{changeSave(e,"year")}}/>
      <TextField id="standard-basic" label="Percentage" name="percent" style={{margin:10}} onChange={(e)=>{changeSave(e,percent)}}/>
      </form>
      </div>
        </div> 
        <br />
      <button type="button" onClick={submit} style={{background:"#00CCFF",color:"white" ,border:"1px solid #00CCFF",borderRadius:10, padding:10, width:100,float:"right"}}>
      Add
      </button>
        </>
    )
}
