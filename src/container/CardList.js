import React from 'react';
import Card from "../components/Card"
import "./CardList.css"

const CardList = ({cards}) => {
    return (
        <div className="cardList">
            {                        
                cards.map((card, i) => {return (<Card data={card} key = {i} />)})
            }                        
        </div>
    );
}

export default CardList;