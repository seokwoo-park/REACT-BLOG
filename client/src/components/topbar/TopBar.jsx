import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">WRITE</Link>
                    </li>
                    <li className="topListItem">{user && "LOG OUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                        className="topImg"
                        src="https://wallpapercave.com/wp/wp6196631.jpg"
                        alt=""
                        />
                    )
                        :
                        <ul className="topList">
                            <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                            <Link className="link" to="/signup">SIGNUP</Link>
                            </li>
                        </ul>
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
