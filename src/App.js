
import './App.css';
import Table from './Components/Table'
import { useState } from "react";
import {stdContext} from './context/stdContext'
// import Forms from './Components/Forms'
import Adddata from './Components/Adddata'

// import Table222 from './Components/Table222'


function App() {
  const [info, setinfo] = useState([{
    qualifation:"12th",
    course:"Science",
    institute:"orchid",
    year:"2017",
    percent:"72"
  },
  {
    qualifation:"graduate",
    course:"bca",
    institute:"SAMS",
    year:"2020",
    percent:"70" 
  },
  {
    qualifation:"post graduate",
    course:"Mca",
    institute:"SAMS",
    year:"2020",
    percent:"65" 
  }])
  const [show, setShow] = useState(false)
  const [modal, setmodal] = useState("new")
  const [curIndex, setCurIndex] = useState(0)

  // const close=()=>{
  //   setShow(false)
  // }
  const open=(type,i)=>{
    setShow(true)
    setmodal(type)
    setCurIndex(i)

  }
  const add=(data)=>{
    const temp=[...info,data]
    setinfo(temp)
  }
  const update = (data) => {
    const temp = [...info]
    temp.splice(curIndex, 1, data)
    setinfo(temp)
  }
  const empty={}
  return (
    <>

<Table stdDetails={info} open={open} />
    {show === true ? (
      <Adddata 
      show = {show}
      info={modal === "new" ? empty : info.length > 0 ? info[curIndex]:empty}
      type={modal}
      add = {add}
      update ={update}/>
    ):null}
    </>
  );
}

export default App;
