
import './App.css';
import Table from './Components/Table'
import { useState } from "react";
import {stdContext} from './context/stdContext'

// import Table222 from './Components/Table222'


function App() {
  const [info, setinfo] = useState([{
    qualifation:"12th",
    course:"Science",
    institue:"orchid",
    year:"2017",
    percent:"72"
  },
  {
    qualifation:"graduate",
    course:"bca",
    institue:"SAMS",
    year:"2020",
    percent:"70" 
  },
  {
    qualifation:"post graduate",
    course:"Mca",
    institue:"SAMS",
    year:"2020",
    percent:"65" 
  }])
 
  const add=(data)=>{
    const temp=[...info,data]
    setinfo(temp)
  }
  const data={info,add}
  return (
    <>
    <stdContext.Provider value={data}>
    <Table stdDetails={info} />
    </stdContext.Provider>
    </>
  );
}

export default App;
