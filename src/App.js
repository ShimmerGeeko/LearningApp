
import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    input1: 0,
    input2: 0,
    outVal: 0
  };
  // this.handleChange = this.handleChange.bind(this);
  // this.handleClick = this.handleClick.bind(this);
}

handleChange = (event, name) => {
  debugger
  this.setState({ [event.target.name]: [event.target.value] });

}

handleClick(input1, input2) {
  debugger
  let multiVal = input1 * input2;
  this.setState({
    outVal: multiVal
  })
}


onClear() {
  this.setState({
    outVal: ""
  })
}

render() {
  return (

    <div style={{ display: "flex", marginTop: "1rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <TextField 
          name="input1" label="Outlined" 
          variant="outlined" 
          value={this.state.input1} 
          onChange={(e) => this.handleChange(e)} />

        </Grid>
        <Grid item xs={2}>
          <TextField  
          name="input2" 
          label="Outlined" 
          variant="outlined" 
          value={this.state.input2}
          onChange={(e) => this.handleChange(e)} />

        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={(e) => this.handleClick(this.state.input1, this.state.input2)}>
            {this.state.outVal || "Result"}
          </Button>
          <Button variant="contained" color="primary" onClick={(e) => this.onClear()}>
          </Button>
        </Grid>
      </Grid>
    </div>

  );
}
}
export default App;
