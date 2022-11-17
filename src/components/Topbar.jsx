import React from 'react'
import './Topbar.css'
import user from '../assets/user.png'
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="topbar">
                <button className='back' onClick={() => navigate("/")}>BACK</button>
                <div className="coins"><h2>Coins:{123}</h2></div>
                <div className="user">
                    <img src={user} alt="" />
                    <ul className="dropdown-content">
                        <li><a href="" >Profile</a></li>
                        <li><a href="/" >Logout</a></li>

                    </ul>
            </div>

        </div>
        </>
    )
}

export default Topbar