import React,{useState} from 'react'
import  "./Contact.css"
export function Contact() {
    const [toggle, setToggle] = useState();
    const toggleMaster = (index) => {
            setToggle(index)
            console.log("index", index)
    }
  return (
    <div>
        <div className="contactContainer">
            <h3>HOW WOULD YOU LIKE US TO CONTACT YOU?</h3>
            <p>One of our move consultants will reach out as soon as possible regarding your request. We do our best to use your preferred contact method but in some cases a quick call may be necessary for additional information.</p>
            <div className="buttonContainer">
            {/* <button className="phoneBtnone"  id={toggleState ===0 ? "active" : "phoneBtnone"}onClick={ () => toggleTab(0)} ><i class="fa fa-check" aria-hidden="true"></i> yes</button> */}

                <button className='phn'  id={toggle === 0 ? "activeclass" : "phn"} onClick={ () => toggleMaster(0)}><i class="fa fa-phone" aria-hidden="true"></i> phone</button>

                <button className='phn'  id={toggle ===1 ? "activeclass" : "phn"} onClick={ () => toggleMaster(1)} ><i class="fa fa-paper-plane" aria-hidden="true"></i> Email</button>

                <button className='phn'  id={toggle ===2 ? "activeclass" : "phn"} onClick={ () => toggleMaster(2)}><i class="fa fa-mobile" aria-hidden="true"></i> Text</button>
            </div>
        </div>

    </div>
  )
};

