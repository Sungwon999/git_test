import React from "react";
import { Link } from "react-router-dom";

const MenuLink = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default MenuLink;
