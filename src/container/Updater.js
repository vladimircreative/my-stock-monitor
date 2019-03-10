import React, { Component } from 'react';
import CardList from "./CardList";
import {indicators} from '../indicators.json';
import {API} from '../api.json';

class Updater extends Component {

    constructor(props) {
        super(props);
        this.state = {   
          loaded: false,  
          
      }
    }

    componentDidMount() {
        API.unshift("https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities/.json?securities=" + indicators.join(","))
        this.timerID = setInterval(() => this.tick(), 3000);  
        this.tick()       
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {        
        const getData = async function(API) { // for await of
            const arrayOfPromises = Object.values(API).map(url => fetch(url));
            const tickers = [];
            for await (let request of arrayOfPromises) {
                const data = await request.json();
                tickers.push(data.marketdata.data);
            }
            return tickers;
        }
    
    getData(API)
      .then(r => this.setState({
        loaded: true,
        indicators: r,
      }))
    }

    render() {
        //console.log(this.state);
        switch(this.state.loaded) {
            default:
                return (
                    <p>LOADING...</p>
                );
            case true:
                return (
                    <div>
                        <p>Я отслеживаю:</p>
                        <CardList cards={this.state.indicators[0]} /> 
                        <p>Лидеры торгов:</p>  
                        <CardList cards={this.state.indicators[1]} />   
                        <p>Лидеры роста:</p>    
                        <CardList cards={this.state.indicators[2]} /> 
                        <p>Лидеры падения:</p>    
                        <CardList cards={this.state.indicators[3]} /> 
                        <p>Обновлено: <span className="time">{new Date().toLocaleTimeString()}</span></p>
                    </div>
                )
        }
    }
}

export default Updater;