import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li><Link to="/dogs">Dogs</Link></li>
    </ul>
  );
}


export default Nav;
