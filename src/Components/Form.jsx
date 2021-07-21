// import React, { Component } from 'react'
// import TextField from '@material-ui/core/TextField';
// import Table from './Table'

// export default class Form extends Component {
//   constructor(props){
//     super();
//     this.state={
//       Student:[],
//       qualifation:"",
//       course:"",
//       institute:"",
//       year:"",
//       percent:""

//     };
//     this.onChange = this.onChange.bind(this);
//     this.save = this.save.bind(this);
//   }
//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   save(e) {
//     e.preventDefault();
//     const newShow = {
//       qualifation:this.state.qualifation,
//       course:this.state.course,
//       institute:this.state.institute,
//       year:this.state.year,
//       percent:this.state.percent 
//     };
//     console.log(newShow);
//     this.setState({ [e.target.name]: e.target.value });
//     this.setState({Student: this.state.Student.concat(newShow)});
//   }

//   render() {
//     console.log(this.state)
//     return (
//       <>
       
//         <div>
//         <div style={{justifyContent:"center" ,display:"grid"}}>
//         <h2 id="simple-modal-title" style={{color:"#336699"}}>Educational</h2>
//         </div>
//         <div>
      
//       <form noValidate autoComplete="off" >
//       <TextField id="standard-basic"  label="Your Qualification" name="qualifation" style={{margin:10}} onChange={this.onChange} value={this.state.qualifation} />
//       <TextField id="standard-basic"  label="Course" name="course" style={{margin:10}} onChange={this.onChange} value={this.state.course} />
//       <TextField id="standard-basic"  label="Institution" name="institute"style={{margin:10}} onChange={this.onChange} value={this.state.institute}/>
//       <TextField id="standard-basic"  label="Passing Year" name="year" style={{margin:10}} onChange={this.onChange}  value={this.state.year}/>
//       <TextField id="standard-basic" label="Percentage" name="percent" style={{margin:10}} onChange={this.onChange} value={this.state.percent}/>
//       </form>
//       </div>
//         </div> 
//         <br />
//       <button type="button" style={{background:"#00CCFF",color:"white" ,border:"1px solid #00CCFF",borderRadius:10, padding:10, width:100,float:"right"}} onClick={this.save} >
//       Add
//       </button>
//    </>
//     )
//   }
// }
