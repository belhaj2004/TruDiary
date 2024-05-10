import React from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "../styles/KnowledgeHub.css";

export function Providers() {
  return (
    <div
      classname="providers"
      style={{ "background-color": "#87CB81", height: "100vh" }}
    >
      <h1 style={{ "background-color": "#87CB81", margin: "0px" }}>
        Knowledge Hub
      </h1>
      <br />
      <Button style={{ "background-color": "#25292C", color: "#ffffff" }}>
        <Link style={{ color: "#ffffff" }} to="/FindProviders">
          Find Providers Near Me
        </Link>
      </Button>
      <br />
      <br />
      <Button style={{ "background-color": "#25292C", color: "#ffffff" }}>
        <Link style={{ color: "#ffffff" }}>Contact Healthcare Provider</Link>
      </Button>
      <br />
      <br />
    </div>
  );
}
