import React from 'react'
import './Topbar.css'
import user from '../assets/user.png'
const Topbar = () => {
    return (
        <>
            <div className="topbar">
                <div className="coins"><h2>Coins:123</h2></div>
                <div className="user">
                    <img src={user} alt="" />
                </div>
            </div>
        </>
    )
}

export default Topbar