import React from 'react';
import {Icon} from 'semantic-ui-react'
import './close.css'
const {ipcRenderer} = window.require('electron')

function Close(){
    function closeOrHide(str){
        ipcRenderer.send(str)
    }
    return (
        <div className="close-btn">
        <Icon
            name="minus" 
            size="small" 
            link 
            style={{ marginRight: 15 }} 
            onClick={()=>{
                closeOrHide('hide-main-window')
            }}
        />
        <Icon 
            name="close" 
            size="small" 
            link 
            style={{ marginRight: 10 }} 
            onClick={()=>{
                closeOrHide('close-main-window')
            }}
        />
        </div>
    )
}

export default Close