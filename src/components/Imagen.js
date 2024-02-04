import React from "react";
import logo from '../lap.png';

export default function Imagen(props){
    return(
        <div style={{
            border: props.border,
            color: props.color
        }}>
        <img src={logo} alt="una imagen" />
        </div>
    )
}