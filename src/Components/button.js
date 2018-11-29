import React, { Component } from 'react';

class button extends Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.submitHandle}>Add</button>
                <button onClick = {this.props.submitMinus}>minus</button>
                <button onClick = {this.props.submitMultiply}>multiply</button>
                <button onClick = {this.props.submitDivied}>divided</button>
            </div>
        );
    }
}

export default button;