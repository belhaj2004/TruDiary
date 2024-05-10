import React, { useState, useEffect } from 'react';
import {useLocation, Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

export function Description(props) {
    const loc = useLocation();
    const [title, setTitle] = useState(loc.state.title);
    const [capacity, setCapacity] = useState(loc.state.capacity);
    const [date, setDate] = useState(loc.state.date);
    const [description, setDescription] = useState(loc.state.description);
    const [host, setHost] = useState(loc.state.host);
    const [location, setLocation] = useState(loc.state.location);
    const [time, setTime] = useState(loc.state.time);

    console.log(loc.state);
    return (
        <div style={{'background-color': '#87CB81', 'height': '100vh'}}>
            <h1 style={{'background-color': '#87CB81', 'margin': '0px'}}>Details for the event : {title}</h1><br/><br/>
            {description} <br/><br/>
            Date: {date} <br/><br/>
            Time: {time} <br/><br/>
            Location: {location} <br/><br/>
            Capacity: {capacity} <br/><br/>
            <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}>RSVP HERE</Button><br/><br/>
            <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}><Link to="/events" style={{'color': '#ffffff'}}>Back to Events</Link></Button>
        </div>
    )
}