import React, {useEffect, useState} from 'react';
import { Table, TableRow, TableHead, TableCell, TableBody } from '@mui/material';
import {useLocation, Link} from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';


export function Events(props) {
    const loc = useLocation();
    const [events, setEvents] = useState([]);

    const URL = 'http://localhost:8080/event/';

    useEffect(() => {
        console.log('hi');
        axios.get(URL+'getAll').then((res) => {
            setEvents(res.data);
            console.log(res.data);
        });
        console.log(events);
    },[]);

    const generateEventsList = () => {
        let table = [];
        for (const prop of events) {
                table.push(
                    <TableRow>
                        <TableCell>{prop.title}</TableCell>
                        <TableCell>{prop.date}</TableCell>
                        <TableCell>{prop.time}</TableCell>
                        <TableCell>
                            <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}>
                                <Link style={{'color': '#ffffff'}} to="/description" state = {{title: prop.title, date: prop.date, time:prop.time, capacity:prop.capacity, description: prop.description, host: prop.host, location: prop.location}}>
                                    Details
                                </Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                ); 
        }
        return table;
    }

    return (
        <div style={{'background-color': '#87CB81', 'height': '100vh'}}>
            <h1 style={{'background-color': '#87CB81', 'margin': '0px'}}>EVENTS</h1>
            <div id="eventTable">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Event</TableCell> 
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {generateEventsList()}
                    </TableBody>
                </Table>
            </div> <br/><br/>
            <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}><Link to="/knowledge-hub" style={{'color': '#ffffff'}}>Back to Knowledge Hub</Link></Button>
        </div>
    )

}