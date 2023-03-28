import React from 'react'
import "./Gmail.css"
export function Gmail({ formData, setFormData }) {
  return (
    <div>

      <div className="gmailContainer">
        <h3>This is the new Gmail...</h3>
        <input type="text" placeholder='Enter the valid Gmail..' value={formData.gmail} onChange={(event) => setFormData({ ...formData, gmail: event.target.value })} />
        <div className="pera" id='this'>
          <button  className='yes' style={{fontSize:"7px", padding:"9px 50px", border:"none", borderRadius:"50px", background:"#fff", marginRight:"9px",  boxShadow: "1px 1px 4px #fff"}}><i class="fa fa-check" aria-hidden="true"></i> yes</button>
          <button className='yes'
           style={{fontSize:"7px", padding:"9px 50px", border:"none", borderRadius:"50px", background:"#fff", marginLeft:"9px", boxShadow: "1px 1px 4px #fff"}}> <i class="fa fa-times" aria-hidden="true"></i> No</button>
        </div>
      </div>
    </div>
  )
};

