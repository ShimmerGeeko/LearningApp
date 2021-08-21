import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState([])
  const [datetime, setDateTime] = useState('')
  const [dataa, setDataa] = useState([]);
  var myData=useRef([]);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log("myData",dataa)
    // console.log(firstName, lastName, email, password);
    // handleClose();
    let data={firstName, lastName, email, password};
      let newData = {...data}
    myData.current.push(data)


    //   let copyData = newData
    //   copyData.push({
          
    //   })
    //   myData.push(data);
      setDataa(myData.current);
console.log(dataa)
        localStorage.setItem("user", JSON.stringify(data));
  };
  console.log(mobileNumber,"mobileNumber")
  const handleMobileNumber = (e) => {
      debugger
    // if (e.target.value.split("").length <= 10) {
     setMobileNumber(e.target.value)
    // }
   };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      {/* <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      /> */}
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
     <TextField
        label="Enter Mobile Number"
        variant="filled"
        value={mobileNumber}
        onChange={handleMobileNumber}
        type="number"
    />
      <TextField
        id="datetime-local"
        value= {datetime}
        variant="filled"
        onChange ={e => setDateTime(e.target.value)}
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </div>
    </form>
  );
};

export default Form;