import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  btnStyles: {
    backgroundColor: "#080808",
    borderRadius: "25px",
    color: "#FEFFFC",
    fontSize: "18px",
    alignItems: "center",
    alignContent: "center",
  },

  textStyle: {},
}));

export default function CreateStudents() {
  const classes = useStyles();

  //creaet use state hook
  const [student, setStudent] = useState({
    regNo: 0,
    studentName: "",
    faculty: "",
    department: "",
    degree: "",
  });

  const createStudent = () => {
    axios.post("http://localhost:5000/students", student).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <>
      <h2>Add New Student</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.textStyle}
          id="standard-basic"
          label="Name"
          value={student.studentName}
          onChange={(event) => {
            setStudent({ ...student, studentName: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Registration Number"
          value={student.regNo}
          onChange={(event) => {
            setStudent({ ...student, regNo: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Facullty"
          value={student.faculty}
          onChange={(event) => {
            setStudent({ ...student, faculty: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Department"
          value={student.department}
          onChange={(event) => {
            setStudent({ ...student, department: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Degree"
          value={student.degree}
          onChange={(event) => {
            setStudent({ ...student, degree: event.target.value });
          }}
        />
        <Button
          className={classes.btnStyles}
          variant="contained"
          onClick={createStudent}
        >
          Create
        </Button>
      </form>
    </>
  );
}
