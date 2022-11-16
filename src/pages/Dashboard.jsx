import React from 'react';
import "./Dashboard.css";
import { SliderData } from "../components/SliderData";
import Card from "../components/Card";
import Topbar from '../components/Topbar';
const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <div className="head">
                    <Topbar />
                </div>
                <div className="card-dashboard">
                    <Card slides={SliderData} />
                </div>
                <div className="buttons">
                    <button>MARKET</button>
                    <button>PLAY</button>
                </div>
            </div>
        </>
    )
}

export default Dashboard