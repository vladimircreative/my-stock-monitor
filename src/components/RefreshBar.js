import React, { Component } from 'react';

class RefreshBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div className="refreshBar">
                Обновлено: <div className="refreshTime">{this.state.time}</div>
            </div>
        )        
    }
}

export default RefreshBar;