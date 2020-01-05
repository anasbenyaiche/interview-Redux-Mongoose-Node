import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getFormValues } from "redux-form";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PhotoIcon from "@material-ui/icons/Photo";

import { getUsers } from "../redux/action/action";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const SimpleTable = ({
  getUsers,
  classes = useStyles,
  values = {
    members: [
      {
        firstName: "Anas",
        lastName: "Ben Yaiche",
        birthYear: 1990,
        birthPlace: "Tunis"
      },
      {
        firstName: "Anas",
        lastName: "Ben Yaiche",
        birthYear: 1990,
        birthPlace: "Tunis"
      },
      {
        firstName: "Anas",
        lastName: "Ben Yaiche",
        birthYear: 1990,
        birthPlace: "Tunis"
      }
    ]
  }
}) => {
  useEffect(() => {
    console.log("zied");
    getUsers();
  }, []);

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
          {values.members.map((n, i) => {
            return (
              <TableRow key={`${i}-${n.firstName}-${n.lastName}`}>
                <TableCell align="center">{n.firstName}</TableCell>
                <TableCell align="center">{n.lastName}</TableCell>
                <TableCell align="center">{n.birthYear}</TableCell>
                <TableCell align="center">{n.birthPlace}</TableCell>
                <TableCell align="center">
                  <Button>
                    <Link to={`user/${i + 1}/gallery`}>
                      <PhotoIcon />
                    </Link>
                  </Button>
                  <button>Delete</button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = state => {
  return {
    values: getFormValues("MyForm")(state)
  };
};

export default connect(mapStateToProps, { getUsers })(SimpleTable);
