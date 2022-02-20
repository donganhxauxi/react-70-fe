import React, { Component } from 'react';

export class EventRCCEvent extends Component {
    constructor() {
        super();
        this.state = { login: false };
        this.userName = 'Nguyen Dong Anh';
    }

    toggleInfo() {
        this.setState({ login: !this.state.login });
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                {this.state.login && (
                    <p style={{ color: 'white' }}>{this.userName}</p>
                )}
                <button onClick={this.toggleInfo.bind(this)}>ToggleInfo</button>
            </div>
        );
    }
}

export default EventRCCEvent;
