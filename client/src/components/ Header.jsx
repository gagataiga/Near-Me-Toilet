import React from "react";
import "./Header.css"
import { Link } from 'react-router-dom';
export default function Header(props) {

  const {path} = props;

  return (
    <div className="header">
      <h1>Near Me toilet</h1>
      <div className="button-container">
        { path !== "home" ?
          (
            <Link to="/post">
          <button className="btn">POST</button>
            </Link>
          ) :
          (
            <Link to="/">
          <button className="btn">HOME</button>
            </Link>
          )
        }
      </div>
    </div>
    )
}