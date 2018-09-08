import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default props => (
    <div>
        <h1 className="center">Fire Chat</h1>
        <div className="home-container">
            <Link to="../set_name" className="btn red darken-2">Start Chat</Link>
        </div>
    </div>
)