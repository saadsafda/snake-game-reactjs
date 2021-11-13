import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
        <div className="home-bg">
        </div>
            <Link to="/game">
            <div className="btn">
                start game
            </div>
            </Link>
        </div>
    )
}

export default Home
