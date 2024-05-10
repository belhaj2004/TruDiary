import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

export function FindProviders(props) {
  console.log(loc.state);
  return (
    <div style={{ "background-color": "#87CB81", height: "100vh" }}>
      <h1 style={{ "background-color": "#87CB81", margin: "0px" }}>
        Healthcare Providers Nearby
      </h1>
      <br />
      <br />
      <Button style={{ "background-color": "#25292C", color: "#ffffff" }}>
        Kemp Kelda M - Doctor
      </Button>
      <br />
      <br />
      550 W Peachtree St<br></br>
      <br />
      <br />
      <br></br>
      <Button style={{ "background-color": "#25292C", color: "#ffffff" }}>
        {" "}
        Mitchell - Nurse Practitioner
      </Button>
      <br />
      <br />
      735 Piedmont Ave NE
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button style={{ "background-color": "#25292C", color: "#ffffff" }}>
        Atlanta Healthcare and Medical Center
      </Button>
      <br></br>
      1016 Piedmont Ave NE
      <Button style={{ "background-color": "#25292C", color: "#ffffff" }}>
        <Link to="/Providers" style={{ color: "#ffffff" }}>
          Back to Providers
        </Link>
      </Button>
    </div>
  );
}
