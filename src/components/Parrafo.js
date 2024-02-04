import React from "react";

export default function Parrafo(props){
    return(
        <div style={{
            color: props.color,
            fontFamily: props.fontFamily,
            fontSize: props.fontSize
        }}>
            <p>
                Este es un parrafo en React que se usa para
                una demostracion en react. Abajo esta una imagen de una 
                laptop.
            </p>
        </div>
    )
}