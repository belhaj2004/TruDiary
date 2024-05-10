//temp comment
import React, {useState} from 'react';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Link, useLocation } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import { CookiesProvider, useCookies } from "react-cookie";

export function MyInfo(props) {
    const loc = useLocation();
    const [cookies, setCookie] = useCookies(["user"]);
    const [name, setName] = useState(cookies.user.name);
    const [lname, setLname] = useState(cookies.user.lname);
    const [passwordHidden, setPasswordHidden] = useState('password');
    const [passwordToggleMessage, setPasswordToggleMessage] = useState('View Password');
    const [email, setEmail] = useState(cookies.user.email);
    const [address_l1, setAddress_l1] = useState('');
    const [address_state, setAddress_state] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState('');
    const [nameErrorVisibility, setnameErrorVisibility] = useState(false);
    const URL = 'http://localhost:8080/user/addUser';
    const gURL = 'http://localhost:8080/user/getUserByEmail?email=';
    const addressStates = ["Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"]

    const submitRegister = (e) => {
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
            <div className = "innerContainer">
                <div className = "heading">
                    <h1>Your Info</h1>
                </div>
                <form onSubmit={submitRegister}>
                    {/* <InputLabel>Name: */}
                        <TextField disabled="true" type="text" value={name} placeholder = 'Name' onChange={updateNameState} style={{margin : '5px'}}/>
                    {/* </InputLabel> */}
                    <TextField disabled="true" type="text" value={lname} placeholder = 'Last Name' onChange={updateLname} style={{margin : '5px'}}/><br/><br/>
                    <TextField disabled="true" required type = "text" value = {email} placeholder = "Email" onChange={evt => updateEmailState(evt)} style={{margin : '5px'}}/><br/><br/>
                    {/* <TextField disabled="true" required type = "text" value = {address_l1} placeholder = "Address Line 1" onChange={evt => updateAddress(evt)} style={{margin : '5px'}}></TextField> */}
                    {/* <TextField disabled="true" required type = "text" value = {city} placeholder = "City" onChange={evt => updateCity(evt)} style={{margin : '5px'}}></TextField> */}
                    {/* <TextField disabled="true" required type = "text" value = {address_state} placeholder = "State" onChange={evt => updateAddressLine1State(evt)} style={{margin : '5px'}}></TextField><br/> */}
                    <TextField disabled="true" required type = {passwordHidden} value = {password} placeholder = "Password" onChange={evt => updatePassword(evt)} style={{margin : '5px'}}></TextField>
                    <Button onClick={togglePasswordView} style={{margin : '5px'}}>{passwordToggleMessage}</Button><br/>
                    <Link to="/knowledge-hub"><Button variant="outlined" style={{margin : '15px'}} type = "button" className = "loginButton" onClick = {submitRegister}>Register</Button></Link>
                </form>
                {/* <div className = "box">
                    <form onSubmit={submitRegister}>
                    <div className = "inputGroup">
                        <TextField style={{width : '20%'}} type = "text" className = "loginInput" placeholder='Name' onChange={evt => updateNameState(evt)}/>
                        { nameErrorVisibility ? <NameError /> : null }
                    </div><br/>
                    <TextField required type = "text" placeholder="Email" onChange={evt => updateEmailState(evt)}/>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Link to={{pathname : eventsLink,
                                }}
                            state = {{'name':name, 'role':role, 'email':email}}>
                        <Button style={{margin : '15px'}} 
                            type = "button" 
                            className = "loginButton" 
                            onClick = {submitRegister}
                            >Submit</Button>
                    </Link>
                    </form>
                </div> */}
            </div>
        )
}