import React, { useState } from 'react';
import {useLocation, Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export function EventCreationForm(props) {
    const loc = useLocation();
    const [role, setRole] = useState(loc.state.role);
    const [host, setHost] = useState(loc.state.host);
    const [title, setTitle] = useState(loc.state.title);
    const [description, setDescription] = useState(loc.state.description);
    const [location, setLocation] = useState(loc.state.location);
    const [timeSlot, setTimeSlot] = useState(loc.state.timeSlot);
    const [mode, setMode] = useState(loc.state.mode);
    const [date, setDate] = useState(loc.state.date);
    const [ID, setID] = useState(loc.state.ID);
    const [eventID, setEventID] = useState(loc.state.eventID);
    const [capacity, setCapacity] = useState(loc.state.capacity);
    const [email, setEmail] = useState(loc.state.email);
    const [inviteOnly, setInviteOnly] = useState(loc.state.inviteOnly);
    const URL = 'http://localhost:8080/event/addEvent';
    const eURL = 'http://localhost:8080/event/editEvent?ID=';

    let heading = '';
    if (mode === 'edit') {
        heading = 'Edit Event : ' + title + ' at ' + location + ' from ' + timeSlot;
    }
    if (mode === 'create') {
        heading = 'Create New Event ';
    }

    const saveEvent = (e) => {
        console.log(capacity + " capacity to create");
        console.log(email);
        if (mode === 'create') {
            axios.post(URL, {
                title:title,
                host:host,
                date:date,
                time:timeSlot,
                location:location,
                description:description,
                capacity:capacity,
                inviteOnly:inviteOnly
                })
                .then(function (response) {
            });
        } else {
            axios.post(eURL + eventID, {
                title:title,
                host:host,
                date:date,
                time:timeSlot,
                location:location,
                description:description,
                capacity:capacity,
                inviteOnly:inviteOnly
                })
                .then(function (response) {
            });
        }
        
    }

    return (
        <div>
            {heading}<br />
            <TextField style={{width : '20%'}} type = "text" className = "eventInput" placeholder='Name' value={host} disabled={true}/><br />
            <TextField style={{width : '20%'}} type = "text" className = "eventInput" placeholder='Title' value={title} onChange={e => {setTitle(e.target.value);}}/><br />
            Format date as MM/DD/YYYY<br/>
            <TextField style={{width : '20%'}} type = "text" className = "eventInput" placeholder='Date' value={date} onChange={e => {setDate(e.target.value);}}/><br />
            Format time as Start-End (e.x. 01:20PM-01:30PM)<br/>
            <TextField style={{width : '20%'}} type = "text" className = "eventInput" placeholder='Time' value={timeSlot} onChange={e => {setTimeSlot(e.target.value);}}/><br />
            {/* <TextField style={{width : '20%'}} type = "text" className = "eventInput" placeholder='Location' value={location} onChange={e => {setLocation(e.target.value);}}/><br /> */}
            <Select style={{width : '20%'}} name = "Location" placeholder='Location' onChange={evt => {setLocation(evt.target.value);}}>
                <MenuItem name = "CULC" value='CULC'>CULC</MenuItem>
                <MenuItem name = "Klaus" value='Klaus'>Klaus</MenuItem>
                <MenuItem name = "Student Center" value='Student Center'>Student Center</MenuItem>
                <MenuItem name = "Kendeda" value='Kendeda'>Kendeda</MenuItem>
                <MenuItem name = "Ferst Center of the Arts" value='Ferst Center of the Arts'>Ferst Center of the Arts</MenuItem>
            </Select><br />
            <TextField style={{width : '20%'}} type = "text" className = "eventInput" placeholder='Description' value={description} onChange={e => {setDescription(e.target.value);}}/><br />
            <TextField style={{width : '20%'}} type = "text" className = "eventInput" placeholder='Capacity' value={capacity} onChange={e => {setCapacity(e.target.value);}}/><br />
            <br/>Is this event Invite Only? Enter Yes or No.<br />
            <Select style={{width : '20%'}} name = "Invite Only" placeholder='Invite Only' onChange={evt => {setInviteOnly(evt.target.value);}}>
                <MenuItem href = "#/action-1" name = "Yes" value={true}>Yes</MenuItem>
                <MenuItem href = "#/action-2" name = "No" value={false}>No</MenuItem>
            </Select><br />
            <Link to={{
                pathname: '/events',
            }}
            state={{'name' : host, 'role' : role}}>
                <Button style={{margin : '15px'}} 
                                type = "button" 
                                className = "loginButton" 
                                onClick = {saveEvent}>
                    <Link to="/changesMade" state={{'name':host, 'role':role, 'ID':ID, 'email':email}}>
                        Submit
                    </Link>
                </Button>
            </Link>
        </div>
    )
}