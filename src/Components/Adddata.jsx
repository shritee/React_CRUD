import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import AddCircleIcon from '@material-ui/icons/AddCircle';

import TextField from '@material-ui/core/TextField';
import {stdContext} from '../context/stdContext'


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    borderRadius:20,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal( props) {
 
  const classes=useStyles()
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    // const [open, setOpen] = React.useState(false);

  // const context=useContext(stdContext)
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
      if(props.type === "new")
      {
      props.add({qualifation,course,institute,year,percent})
      setqualifation("")
      setcourse(" ")
      setinstitute(" ")
      setyear(" ")
      setpercent(" ")
      props.close();
      }
      else
      {
          props.update({qualifation,course,institute,year,percent})
          props.close()
      }
      
  }
  // const handleClose = () => {
  //   setOpen(false);
  // };
  useEffect(() => {
      if(Object.keys(props.info).length>0)
      {
          setqualifation(props.info.qualifation)
          setcourse(props.info.course)
          setinstitute(props.info.institute)
          setyear(props.info.year)
          setpercent(props.info.percent)
      }
      else{
          setqualifation("")
          setcourse("")
          setinstitute("")
          setyear("")
          setpercent("")
      }
  },[props])
  const body = (
    <div style={modalStyle} className={classes.paper}>
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
      <TextField id="standard-basic" label="Percentage" name="percent" style={{margin:10}} onChange={(e)=>{changeSave(e,"percent")}}/>
      </form>
      </div>
        </div> 
        <br />
      <button type="button" onClick={submit} style={{background:"#00CCFF",color:"white" ,border:"1px solid #00CCFF",borderRadius:10, padding:10, width:100,float:"right"}}>
          {props.type === "new" ? "Add" : "update"}
      </button>
      </div>
      
  );

  return (
    <div>
      <Modal
        open={props.show}
        onClose={props.close}
        // onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {body}
      </Modal>
    </div>
  );
}
