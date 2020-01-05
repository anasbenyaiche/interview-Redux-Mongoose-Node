import React from "react";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";     
import Paper from "material-ui/Paper";
import { getFormValues } from "redux-form";
import { connect } from "react-redux";

const SimpleTable = ({ values = { members: [{firstName:"Anas",lastName:"Ben Yaiche",birthYear:1990,birthPlace:"Tunis"}] } }) => (
  <Paper>
    <Table>
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
        {values.members.map((n,i) => {
          return (
            <TableRow key={`${i}-${n.firstName}-${n.lastName}`}>
              <TableCell>{n.firstName}</TableCell>
              <TableCell>{n.lastName}</TableCell>
              <TableCell>{n.birthYear}</TableCell>
              <TableCell>{n.birthPlace}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

export default connect(state => ({
  values: getFormValues("MyForm")(state)
}))(SimpleTable);

