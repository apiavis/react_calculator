import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Home() {
    return (
        <div class="home">
            <h2>
                Welcome to the React Calculator!
            </h2>
            <button class="performCalc">
                <Link to="/calculator">
                    Make a Calculation
                </Link>
            </button>
        </div>
    );
}

export default Home;