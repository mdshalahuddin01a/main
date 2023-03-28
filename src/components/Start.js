
import React, { useState } from "react";

import "./App.css"
export function Start() {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (event) => {
         console.log(event.target.checked)
    }
    return (
        <div>
           <div className="startContainer">
           <h1 className="heading">LET'S GET MOVING ON YOUR REQUEST!</h1>
            <p>We look forward to being the best part of your move! To do that, we'll need to collect and store your information, and we may record phone calls. Anything we collect or record will only be used to coordinate the services you request, ensuring the service you receive meet our high standards, and for training our team. You may request to have this information provided to you or deleted at any time. By checking the box below, you are authorizing TWO MEN AND A TRUCK® to contact you via email, phone, or text message including via automated technology. You may ask us to not use any of these communication types at any time by replying "stop" or "unsubscribe" or by asking your move consultant to update your preferences. View our <a href="#">privacy policy</a>.

                If you would rather not use our form, that's cool with us. We'd be happy to chat if you give us a call at 
               <a href="#" className="link">972.666.1211</a> .</p>
              <div>
              <input type="checkbox" onChange={handleChange}/>
              <label >I'm good with that –– let's get started!</label>
              </div>
           </div>

        </div>
    )
}

