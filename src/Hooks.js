import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function Hooks() {


    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState();


    function resultVal() {
        debugger
        var m = parseInt(number1) * parseInt(number2);
        setResult(m);
    }
console.log(result,"result")
    return (
        <Grid container spacing={3}>
            <Grid item xs={2} >
                <TextField id="number1"
                 name="input1" 
                 label="Outlined"
                 type="number"
                 variant="outlined"
                 value = {number1}
                 onChange={(e)=>{setNumber1(e.target.value)}} />

            </Grid>
            <Grid item xs={2}>
                <TextField 
                id="number2"
                 name="input1"
                 type="number" 
                 label="Outlined" 
                 variant="outlined"
                 value = {number2}
                 onChange={(e)=>{setNumber2(e.target.value)}} />

            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" color="primary" onClick={resultVal}>
                    {result}
                </Button>
            </Grid>
        </Grid>
    );
}
export default Hooks;