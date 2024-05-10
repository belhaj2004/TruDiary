//temp comment
import React, {useState} from 'react';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { CookiesProvider, useCookies } from "react-cookie";

export function Login(props) {
    const [name, setName] = useState('');
    const [passwordHidden, setPasswordHidden] = useState('password');
    const [passwordToggleMessage, setPasswordToggleMessage] = useState('View Password');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setID] = useState('');
    const [loginErrorVisibility, setLoginErrorVisibility] = useState('none');
    const pURL = 'http://localhost:8080/user/addUser';
    const gURL = 'http://localhost:8080/user/getUserByEmail?email=';
    const [lname, setLname] = useState('');
    const [cookies, setCookie] = useCookies(["user"]);

    const submitRegister = (e) => {
        axios.get(gURL + email, {
        }).then(function(response) {
            if (response.data.length != 0) {
                console.log(response);
                setID(response.data[0].id);
                console.log(response.data[0].id);
                console.log(id);
                if (response.data[0].role === 'admin') {
                    console.log('admin user');
                    setCookie("user", {email:email, name:response.data[0].firstName, lname:response.data[0].lastName, role:'admin'}, { path: "/" });
                } else {
                    setCookie("user", {email:email, name:response.data[0].firstName, lname:response.data[0].lastName, role:'user'}, { path: "/" });
                }
                console.log(cookies);
                document.getElementById("successful-login").click();
            } else {
                console.log("hi");
                setLoginErrorVisibility('inline');
                console.log(loginErrorVisibility);
            }
        }).catch((e) => {
            console.log("hi");
            setLoginErrorVisibility('inline');
            console.log(loginErrorVisibility);
        });
    }

    const updateNameState = (e) => {
        setName(e.target.value);
        let inputName = e.target.value;
    }

    const updateEmailState = (e) => {
        setEmail(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const togglePasswordView = (e) => {
        if (passwordHidden === 'password') {
            setPasswordHidden('text');
            setPasswordToggleMessage('Hide Password');
        } else {
            setPasswordHidden('password');
            setPasswordToggleMessage('Show Password');
        }
    }

        return (
            <div>
                {/* <Navbar></Navbar> */}
                <div className = "innerContainer">
                    <div className = "heading">
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={submitRegister}>
                        <TextField required type = "text" value = {email} placeholder = "Email" onChange={evt => updateEmailState(evt)} style={{margin : '5px'}}/><br/><br/>
                        <TextField required type = {passwordHidden} value = {password} placeholder = "Password" onChange={evt => updatePassword(evt)} style={{margin : '5px'}}></TextField>
                        <Button onClick={togglePasswordView} style={{margin : '5px'}}>{passwordToggleMessage}</Button><br/>
                        <Link to="/knowledge-hub" style={{display:'none'}}><Button id = "successful-login"></Button></Link>
                        <p style={{color : 'red', display:loginErrorVisibility}}>Unable to login. Please try again.</p><br />
                        {/* <Link to="/knowledge-hub"> */}
                            <Button variant="outlined" style={{margin : '15px'}} type = "button" className = "loginButton" onClick = {submitRegister} state = {{'name':name, 'email':email}}>
                                Login
                            </Button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        )
}