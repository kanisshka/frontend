import React from 'react';
import "./Dashboard.css";
import { SliderData } from "../components/SliderData";
import Card from "../components/Card";
const Dashboard = () => {
return(
    <>
    <Card slides={SliderData}/>;
    </>
)
}

export default Dashboard