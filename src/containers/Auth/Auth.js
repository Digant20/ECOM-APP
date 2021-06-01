import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';







const useStyles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
});

class Auth extends Component{

    render(){


        const {classes} = this.props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
        <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          helperText=''
        />
        
      </div>
      <div>
        
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        
      </div>
    </form>
  );

    }

  
}
export default withStyles(useStyles)(Auth);

