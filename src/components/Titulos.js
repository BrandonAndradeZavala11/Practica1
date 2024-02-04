import React from "react";

export default function Titulos(props){

    return(
        <div style={{
            color: props.color,
            fontFamily: props.fontFamily,
            fontSize: props.fontSize
        }}>
            <h1>Titulo de Practica 1</h1>
        </div>
    )
}