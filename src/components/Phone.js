import React,{useState} from 'react'
import "./Phone.css"

export function Phone({formData, setFormData}) {
  const[toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index )
    console.log("Hello world", index)
  }
  return (
    <div>
      <div className="phoneContainer">
        <h3>ENTER YOUR PHONE ADDRESS</h3>
        <input type="text"  placeholder='phone...' value={formData.phone} onChange={(event) => setFormData({...formData, phone: event.target.value})}/>
        <h6>DO WE HAVE PERMISSION TO TEXT YOU IF NEEDED (MESSAGE AND DATA RATES MAY APPLY)?</h6>

        <div className="phoneBtnParent">
          <button className="phoneBtnone"  id={toggleState ===0 ? "active" : "phoneBtnone"} onClick={ () => toggleTab(0)} ><i class="fa fa-check" aria-hidden="true"></i> yes</button>
          <button className="phoneBtnone" id={toggleState ===1 ? "active" : "phoneBtnone"} onClick={ () => toggleTab(1)}><i class="fa fa-times" aria-hidden="true"></i> No</button>
        </div>
      </div>
    </div>
  )
};

