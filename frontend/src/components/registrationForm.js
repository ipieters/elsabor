import React, { useState } from "react";
import { useStyles } from "./Styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function RegistrationForm() {
  const classes = useStyles();
  const [user, setUser] = useState(""); // user name hook
  const [email, setEmail] = useState(""); // user name hook
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
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            InputLabelProps={{
              classes: {
                root: classes.inputColour,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              style: {
                color: "white",
                borderBottom: "2px solid white"
              }
            }}
          />
        </div>
        <div className={classes.inputStyle}>
          <TextField
            required
            id="standard-required"
            className={classes.textBox}
            label="Username"
            defaultValue="Enter username"
            value={user}
            onChange={e => setUser(e.target.value)}
            InputLabelProps={{
              classes: {
                root: classes.inputColour,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              style: {
                color: "white",
                borderBottom: "2px solid white"
              }
            }}
          />
        </div>
        <div className={classes.inputStyle}>
          <TextField
            required
            id="standard-password-input"
            className={classes.textBox}
            InputLabelProps={{
              classes: {
                root: classes.inputColour,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              style: {
                color: "white",
                borderBottom: "2px solid white"
              }
            }}
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className={classes.inputStyle}>
        <Button variant="contained" size="large" className={classes.textBox}>
          Register
        </Button>
      </div>
    </Paper>
  );
}

export default RegistrationForm;