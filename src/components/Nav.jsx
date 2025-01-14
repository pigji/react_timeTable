import React, { useEffect, useState } from "react";
import "../styles/Nav.scss"; //스타일
import { FaWifi } from "react-icons/fa6";
import { FaBluetoothB } from "react-icons/fa6";
import { FaBatteryThreeQuarters } from "react-icons/fa6";

const Nav = () => {



  return (
    <div className="navbar">
      <div className="navBox">
        <div className="leftMenu">
          <ul className="circle">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <FaWifi size="25" color="white" />
        </div>
        <div className="time">
          <p>{new Date().toLocaleDateString()}</p>
        </div>
        <div className="rightMenu">
          <FaBluetoothB size="25" color="white"/>
          <FaBatteryThreeQuarters size="25" color="white"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
