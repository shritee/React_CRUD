import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/Delete';
import Adddata from'../Components/Adddata'
import Editdata from '../Components/Editdata'


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




export default function CustomizedTables(props) {
  return (
    <>
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Education</StyledTableCell>
            <StyledTableCell align="center">Course</StyledTableCell>
            <StyledTableCell align="center">University </StyledTableCell>
            <StyledTableCell align="center">Passing Year</StyledTableCell>
            <StyledTableCell align="center">Percentage</StyledTableCell>
            <StyledTableCell align="center"><Adddata/></StyledTableCell>
          </TableRow>
        </TableHead>    
        <TableBody>

          {props.stdDetails.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.qualifation}
              </StyledTableCell>
              <StyledTableCell align="center">{row.course}</StyledTableCell>
              <StyledTableCell align="center">{row.institue}</StyledTableCell>
              <StyledTableCell align="center">{row.year}</StyledTableCell>
              <StyledTableCell align="center">{row.percent}</StyledTableCell>
              <StyledTableCell align="center"><Editdata/><Delete/></StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
  );
}
