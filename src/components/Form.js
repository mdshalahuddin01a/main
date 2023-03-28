import React, {useState} from 'react'
import {Start} from './Start';
import {Email} from './Email';
import {Phone} from './Phone';
import {Gmail} from './Gmail';
import {Contact} from './Contact'
import {Help} from './Help'
import {End} from './End'
import "./Phone.css"
import "./From.css"

function Form() {
    const [next, setNext] = useState(0);
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        // color:"",
        gmail: "",
        phone: "",
        contact: ""

    });
    
    const formItems = ["Start",  "Gmail",  "Email", "Contact", "Phone", "Help", "End" ] 

    const displayPage = () => {
        if (next === 0) {
            return <Start /> ;
        } 
        else if (next === 1){
            return <Email formData = {formData} setFormData = {setFormData}/>
        }else if ( next === 2){
            return <Gmail formData = {formData} setFormData = {setFormData} />
        }else if ( next === 3){
            return <Phone formData = {formData} setFormData = {setFormData} />
        }else if ( next === 4){
            return <Contact formData = {formData} setFormData = {setFormData} />
        }
        else if ( next === 5){
            return <Help formData = {formData} setFormData = {setFormData} />
        }
        else {
            return < End formData = {formData} setFormData = {setFormData} />
        }
        
    }
  return (
    <div className = "form">
        
        <div className="formContainer">
            <div className="header">
                <h1>{formItems[next]}</h1>
            </div>

            <div className="body">
                {displayPage()}
            </div>
            <div className="progress">
                <div className='progressChild' style={{width: next === 0 ? "0%": next === 1 ? "16%":next === 2 ? "33%":next === 3 ? "50%":next === 4 ? "66%":  next=== 5 ? "82%": "100%"}}>
                  
              
                </div>
            </div>
            <div className="footer">
                <button 
                disabled = {next == 0}
                onClick={() => {setNext((currentPage) => currentPage - 1)}} className="prev">Prev</button>
                <button 
                disabled= {next == formItems.length - 1}
                onClick={() => {setNext((currentPage) => currentPage + 1)}} className="next">Next</button>
            </div>
        </div>
    </div>
  )
}

export default Form;