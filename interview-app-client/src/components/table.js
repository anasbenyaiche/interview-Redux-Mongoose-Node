

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
});




export default function SimpleTable(props) {
  const classes = useStyles();
  const rows = props.rows
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">Name</TableCell>
            <TableCell align="center">Surname</TableCell>
           
            <TableCell align="center">birth Year</TableCell>
            <TableCell align="center">Birth Place</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow key={i}>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.surname}</TableCell>
              <TableCell align="center">{row.BirthYear}</TableCell>
              <TableCell align="center">{row.BirthPlace}</TableCell>
              <TableCell align="center">{row.Actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}