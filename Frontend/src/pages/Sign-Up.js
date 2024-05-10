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


export function SignUp(props) {
    const [name, setName] = useState('');
    const [passwordHidden, setPasswordHidden] = useState('password');
    const [passwordToggleMessage, setPasswordToggleMessage] = useState('View Password');
    const [email, setEmail] = useState('');
    const [address_l1, setAddress_l1] = useState('');
    const [lname, setLname] = useState('');
    const [address_state, setAddress_state] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [id, setID] = useState();
    const [nameErrorVisibility, setnameErrorVisibility] = useState(false);
    const [loginErrorVisibility, setLoginErrorVisibility] = useState('none');
    const pURL = 'http://localhost:8080/user/addUser';
    const gURL = 'http://localhost:8080/user/getUserByEmail?email=';
    const [cookies, setCookie] = useCookies(["user"]);

    const submitRegister = (e) => {
        axios.post(pURL, {
            email:email,
            first_name:name,
            role:'user',
            })
            .then(function (response) {
                if (response.status == 200) {
                    console.log("success");
                    axios.get(gURL + email, {
                        email:email
                    }).then(function(response) {
                        console.log(response);
                        setID(response.data.id);
                        console.log(response.data.id);
                        console.log(id);
                        setCookie("user", {email:email, name:name, role:'user', lname:lname}, { path: "/" });
                        document.getElementById("successful-login").click();
                    });
                } else {
                    console.log("hi");
                    setLoginErrorVisibility('inline');
                    console.log(loginErrorVisibility);
                }
                console.log(response);
        }).catch((e) => {
            console.log("hi");
            setLoginErrorVisibility('inline');
            console.log(loginErrorVisibility);
        });;
    }

    const updateNameState = (e) => {
        setName(e.target.value);
    }

    const updateEmailState = (e) => {
        setEmail(e.target.value);
    }

    const updateAddressLine1State = (e) => {
        setAddress_state(e.target.value);
    }

    const updateCity = (e) => {
        setCity(e.target.value);
    }

    const updateAddress = (e) => {
        setAddress_l1(e.target.value);
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

    const updateLname = (e) => {
        setLname(e.target.value);
    }

        return (
            <div>
                {/* <Navbar></Navbar> */}
                <div className = "innerContainer">
                    <div className = "heading">
                        <h1>Register</h1>
                    </div>
                    <form onSubmit={submitRegister}>
                        {/* <InputLabel>Name: */}
                            <TextField type="text" value={name} placeholder = 'First Name' onChange={updateNameState} style={{margin : '5px'}}/>
                        {/* </InputLabel> */}
                        <TextField type="text" value={lname} placeholder = 'Last Name' onChange={updateLname} style={{margin : '5px'}}/><br/><br/>
                        <TextField required type = "text" value = {email} placeholder = "Email" onChange={evt => updateEmailState(evt)} style={{margin : '5px'}}/><br/><br/>
                        {/* <TextField required type = "text" value = {address_l1} placeholder = "Address Line 1" onChange={evt => updateAddress(evt)} style={{margin : '5px'}}></TextField> */}
                        {/* <TextField required type = "text" value = {city} placeholder = "City" onChange={evt => updateCity(evt)} style={{margin : '5px'}}></TextField> */}
                        {/* <TextField required type = "text" value = {address_state} placeholder = "State" onChange={evt => updateAddressLine1State(evt)} style={{margin : '5px'}}></TextField><br/> */}
                        <TextField required type = {passwordHidden} value = {password} placeholder = "Password" onChange={evt => updatePassword(evt)} style={{margin : '5px'}}></TextField>
                        <Button onClick={togglePasswordView} style={{margin : '5px'}}>{passwordToggleMessage}</Button><br/>
                        <p style={{color : 'red', display:loginErrorVisibility}}>Unable to login. Please try again.</p><br />
                        <Link to="/knowledge-hub"><Button id = "successful-login"></Button></Link>
                        {/* <Link to="/knowledge-hub" state = {{'name':name, 'email':email}}> */}
                            <Button variant="outlined" style={{margin : '15px'}} type = "button" className = "loginButton" onClick = {submitRegister}>
                                Register
                            </Button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        )
}