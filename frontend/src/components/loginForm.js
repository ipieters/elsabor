import React, { useState } from "react";
import { useStyles } from "./Styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function LoginForm() {
  const classes = useStyles();
  const [user, setUser] = useState(""); // user name hook
  const [password, setPassword] = useState(""); // password hook

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" component="h1">
        El Sabor
      </Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <div className={classes.inputStyle}>
          <TextField
            required
            id="standard-required"
            className={classes.textBox}
            label="Username"
            defaultValue="Enter username"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
        </div>
        <div className={classes.inputStyle}>
          <TextField
            required
            id="standard-password-input"
            className={classes.textBox}
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className={classes.inputStyle}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.textBox}
        >
          Login
        </Button>
      </div>

      <div>
        <Typography variant="h8" component="h8">
          Forgot password?
        </Typography>
      </div>
      <div className={classes.inputStyle}>
        <Typography variant="h8" component="h8">
          New to El Sabor? Join now
        </Typography>
      </div>
    </Paper>
  );
}

export default LoginForm;