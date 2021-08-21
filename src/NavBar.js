import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hooks from './Hooks';
import InternetSpeed from './InternetSpeed';
import Form from './Form';
import App from './App';
export class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        Welcome to my Page :)
                    </Toolbar>
                </AppBar>
                {/* <div style={{padding: "15px"}}>
                <App />
                </div>
                <div style={{padding: "15px"}}>
                <Hooks />
                </div>
                <div style={{padding: "15px"}}>
                <InternetSpeed />
                </div> */}
                <div style={{padding: "15px"}}>
                    <Form/>

                </div>
               
               
              
            </div>
        )
    }
}
export default Navbar