import React from "react";
import { Grid, Button } from "@material-ui/core";
import "./assignment.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import ContentRenderer from "../../../ContentRenderer/ContentRenderer";
import { Home } from "@material-ui/icons";
import { renderComponent } from "recompose";
import HiddenContent from "../../../ContentRenderer/HiddenContent";
import {connect} from 'react-redux';

var accept = ".pdf";
var data = require("../../../../assets/db.json");

const mapStateToProps = (state) => {
  return {
    courses: state.allCourses.courses,
    userId: state.userId.id,
  }
}

function handleChange(selectorFiles: FileList){
  alert("File " + selectorFiles[0]["name"] + " Submitted!");
  console.log(selectorFiles);    
}

function Assignment(props) {

  var courseName = props.match.params.courseName;
  var assignmentName = props.match.params.assignmentName;
  var dueDate;
  var points; 
  var description;
  //var fileType;
  for (var i = 0; i < data.courses.length; i++) {
    var title = data.courses[i].title;
    if(title === courseName){
      var assignments = data.courses[i].assignments;
      for (var j = 0; j < assignments.length; j++) {
        var obj = assignments[j];
        if(obj.title === assignmentName){
          dueDate = obj.dueDate;
          points = obj.points;
          description = obj.description;
         // fileType = obj.fileType;
        }
      }
    }
  }
  return (
    <>
      
      <div className="wrapper">
        <Grid
          container
        >
          <NavLink
            to={"/CourseHome/" + props.match.params.courseName}
            className="navLink"
          >
            <Typography className="navtab">Course Home</Typography>
          </NavLink>
        </Grid>

        <Grid className="assignmentContainer" spacing={2}>
          <Paper className="listContainer">
            <p id="assignmentInfo">{assignmentName}
              <input id="button-file" type="file" accept={accept} style={{display: "none"}} onChange={ (e) => handleChange(e.target.files) }/> 
              <label htmlFor="button-file" id="submitButton"> 
                <Button raised component="span" variant="contained" size="small" color="primary"> 
                  Submit Assignment
                </Button> 
              </label> 
            </p>
            <hr className="line" />
            <p><span id="date"><span id="emphasize">Due</span> {dueDate.substring(0,15)}</span><span id="points"><span id="emphasize">Points</span> {points}</span><span id="submitting"><span id="emphasize">Submitting</span> a PDF file</span></p>
            <hr className="line" />
            <p id="assignmentTitle">
            {assignmentName}
            </p>
            <p id="desc">
              {description}
            </p>
        
        </Paper>
        </Grid>
        <Grid className="assignmentContainer" spacing={2}>
        <Paper>
          
        </Paper>
            <HiddenContent></HiddenContent>
        </Grid>
      </div>
    </>
  );
}

// function Homework1(props) {
//   return (
//     <>
      
//       <div className="wrapper">
//         <Grid
//           container
//         >
//           <NavLink
//             to={"/CourseHome/" + props.match.params.courseName}
//             className="navLink"
//           >
//             <Typography className="navtab">Course Home</Typography>
//           </NavLink>
//         </Grid>

//         <Grid className="assignmentContainer" spacing={2}>
//           <Paper className="listContainer">
//             <p id="assignmentInfo">{props.match.params.assignmentName}
//               <input id="button-file" type="file" accept={accept} style={{display: "none"}} onChange={ (e) => handleChange(e.target.files) }/> 
//               <label htmlFor="button-file" id="submitButton"> 
//                 <Button raised component="span" variant="contained" size="large" color="primary"> 
//                   Submit Assignment
//                 </Button> 
//               </label> 
//             </p>
//             <hr className="line" />
//             <p><span id="date"><span id="emphasize">Due</span> Thursday by 11:59pm</span><span id="points"><span id="emphasize">Points</span> 10</span><span id="submitting"><span id="emphasize">Submitting</span> a PDF file</span></p>
//             <hr className="line" />
//             <p id="assignmentTitle">
//               Assignment #1- Due Thursday, April 25
//             </p>
//             <p id="desc">Submit to Canvas by 11:59pm – late homework will not be accepted. <br></br>

//               Chapter 5 problems – please do the problems in the document hw1_asgt.pdf <br></br>

//               Please put your name and assignment number (1) on your homework.
//             </p>
        
//         </Paper>
//         </Grid>
//         <Grid className="assignmentContainer" spacing={2}>
//         <Paper>
//           {/* <ContentRenderer></ContentRenderer> */}
//         </Paper>
//             <HiddenContent></HiddenContent>
//         </Grid>
//       </div>
//     </>
//   );
// }

// // function ProjectProposal(props) {
// //   return (
// //     <>
// //       <div className="wrapper">
// //         <Grid
// //           container
// //         >
// //           <NavLink
// //             to={"/CourseHome/" + props.match.params.courseName}
// //             className="navLink"
// //           >
// //             <Typography className="navtab">Course Home</Typography>
// //           </NavLink>
// //         </Grid>

// //         <Grid className="assignmentContainer" spacing={2}>
// //           <Paper className="listContainer">
// //             <p id="assignmentInfo">{props.match.params.assignmentName} 
// //               <Button  id="submitButton" variant="contained" size="large" color="primary" >
// //                 Submit Assignment
// //               </Button> 
// //             </p>
// //             <hr className="line" />
// //             <p><span id="date"><span id="emphasize">Due</span> 5/2/2019 by 11:59pm</span><span id="points"><span id="emphasize">Points</span> 100</span><span id="submitting"><span id="emphasize">Submitting</span> a PDF file</span></p>
// //             <hr className="line" />
// //             <p id="assignmentTitle">
// //               Project Proposal- Due Thursday, May 2
// //             </p>
// //             <p id="desc">Submit to Canvas by 11:59pm – late proposals will not be accepted. <br></br>

// //               For more details please see ProjectProposal.pdf <br></br>

// //             </p>
        
// //         </Paper>
// //         </Grid>
// //         <Grid className="assignmentContainer" spacing={2}>
// //         <Paper>
// //           {/* <ContentRenderer></ContentRenderer> */}
// //         </Paper>
// //             <HiddenContent></HiddenContent>
// //         </Grid>
// //       </div>
// //     </>
// //   );
// // }



export default connect(mapStateToProps)(Assignment); 
export {
  //Homework1,
 // ProjectProposal
} 
