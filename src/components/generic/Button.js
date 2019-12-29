import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.onButtonPressed = this.onButtonPressed.bind(this);
    }

    onButtonPressed() {

    }

    render() {
        const { 
            text, 
            primary,
            onPress 
        } = this.props;
        return (
            <button
                onClick={() => onPress()}
                className={primary ? "button button--primary" : "button button--secondary"}
            >
                {text}
            </button>
        );
    }
}