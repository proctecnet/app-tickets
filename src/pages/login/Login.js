import React, { useState, useContext } from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import { TextField, Button, Card, CardContent, Typography } from "@material-ui/core";
import { AuthContext } from "../../context/AuthContext"; // Import AuthContext

//const useStyles = makeStyles({ /* Styles... */ });

const Login = () => {
  //const classes = useStyles();
  const { setCurrentUser } = useContext(AuthContext); // Access context values

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulate login logic
    const body = {
      username,
      password,
      license: "licencia-de-ejemplo",
    };

    console.log("Enviando datos al backend:", body);

    // Assuming successful login, set currentUser
    setCurrentUser({ username }); // Update context with user data

    // Simulate successful login message or redirect
    alert("Login exitoso!");
  };

  return (
    <div>
        <div>cdasfda</div>
        <p>fdsafdfadsfdfasd</p>
    </div>
    // <div className={classes.root}>
    //   {/* Rest of your login component code... */}
    // </div>
  );
};

export default Login;