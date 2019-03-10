import React from 'react';
import "./Triangle.css"

const Triangle = ( {up} ) => { 
    return (
        <span className = "triangle" style={{color: up ? "#00c853" : "#f44336"}}>
        {up ? "▲" : "▼"}
        </span>
    )
}

export default Triangle;