import React from "react";
import NavbarAuth from "./comps/navbar-auth"
import VideoCallFrame from './VideoCallFrame';
export function Meeting() {
    
    return (
        <div id="vidcontainerout">
            <NavbarAuth />
            <div className="container" id="vidcontainer">
                <br />
                <h1>Meeting</h1>
                <p>This is a drop-in call room. Feel free to schedule times to meet here with your peers!</p>
                <VideoCallFrame
          url={ "https://tutorlist.daily.co/yXuOJp2H43tbobdNfirz" }
        ></VideoCallFrame>
            </div>
        </div>
    )

}