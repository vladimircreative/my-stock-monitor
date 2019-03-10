import React, { Component } from 'react';
import Triangle from "./Triangle";
import "./Card.css"

class Card extends Component {   
    render() {
        
        const data = {
            "name": this.props.data[0],
            "price": this.props.data[2] || "-", 
            "rate": this.props.data[25],
        };
        return (
            <a href={`https://www.moex.com/ru/issue.aspx?board=TQBR&code=${data.name}`} target="_blank" rel="noopener noreferrer" className="card" >                
                <div className="title">{data.name}</div>
                <div className="price">{data.price.toString().substring(0, 7)}</div>
                <Triangle up={data.rate > 0 ? true : false}/>   <span className="rate">{data.rate}%</span>
            </a>
        )
    }    
}

export default Card;