import React, { useState, useEffect  } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
// import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

function InternetSpeed() {
    var [date, setDate] = useState(new Date())

    const imageLoadHandler = (e, startTime, image) => {
        debugger
            startTime = date.getTime();
            var loadtime = new Date().getTime() - startTime;
            console.log("image took " + loadtime + "ms to load");
          }

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    
    return (
        <div>
      
           To detect network speed using JavaScript 
           <div style ={{display: "none"}}>
           <img src="..\..\logo192.png" onLoad={(e) => imageLoadHandler(e)}/>
           </div>
         
           <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>
        </div>
    );
}
export default InternetSpeed;