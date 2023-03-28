import React, { useState } from 'react'
import  {Checkbox, InputLabel, FormControl, FormLabel, FormControlLabel} from "@mui/material"
import "./Help.css"
export function Help() {
    const [selector, setSelector] = ([]);
    const handleTheCheckBox = (e) => {
        const {value, checked} = e.target;
        
        // if(checked){
        //     setSelector([...selector, value])
        // }else{
         
        //     setSelector(selector.filter((e) => e !== value))
        // }
        // console.log(`${value} is ${checked}`)
        // console.log(e.target.checked)
        // console.log(e.target.value)
    }
    return (
        <div className='Help'>
            <h2 className='how'>HOW CAN WE HELP YOU?</h2>
            <p>We offer a variety of services to give you the best experience possible. Which of the following services are you asking about today?</p>
            <div className="main" style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="left">
                    {/* <FormControlLabel  control={<Checkbox />} label ="Help Me Move" value="Help Me Move" onChange={handleTheCheckBox}/>
                    <hr />
                    <FormControlLabel  control={<Checkbox />} label ="Help Me Move" value="Help Me Move" onChange={handleTheCheckBox} />
                    <hr />
                    <FormControlLabel  control={<Checkbox />} label ="Help Me Move" value="Help Me Move"onChange={handleTheCheckBox} />
                    <hr /> */}

                    <div className="move" style={{ display: "flex", cursor: "pointer" }}>

                        <input type="checkbox" onChange={handleTheCheckBox}/>
                        <p>Help Me Move</p>
                    </div>
                    <hr style={{ height: "0px" }} />
                    <div className="pack" style={{ display: "flex", cursor: "pointer" }}>

                    <input type="checkbox" onChange={handleTheCheckBox}/>
                        <p>Help Me Move</p>
                    </div>
                    <hr />
                    <div className="supply" style={{ display: "flex", cursor: "pointer" }}>
                    <input type="checkbox" onChange={handleTheCheckBox}/>
                        <p>Help Me Move</p>
                    </div>
                 
                </div>
                <div className="right"  >
                     <div className="space" style={{ display: "flex", cursor: "pointer" }} >
                    <input type="checkbox" onChange={handleTheCheckBox}/>
                        <p>Help Me Move</p>
                    </div>
                    <hr />
                    <div className="junk" style={{ display: "flex", cursor: "pointer" }}>
                    <input type="checkbox" onChange={handleTheCheckBox}/>
                        <p>Help Me Move</p>
                    </div>
                    <hr />
                    <div className="stoarge" style={{ display: "flex", cursor: "pointer" }}>
                    <input type="checkbox" onChange={handleTheCheckBox}/>
                        <p>Help Me Move</p>
                    </div> 
                    
                     {/* <FormControlLabel  control={<Checkbox />} label ="Help Me Move" value="Help Me Move" onChange={handleTheCheckBox}/>
                    <hr />
                    <FormControlLabel  control={<Checkbox />} label ="Help Me Move" value="Help Me Move" onChange={handleTheCheckBox}/>
                    <hr />
                    <FormControlLabel  control={<Checkbox />} label ="Help Me Move" value="Help Me Move" onChange={handleTheCheckBox}/>
                    <hr /> */}
                   
                </div>
            </div>
        </div>
    )
}

