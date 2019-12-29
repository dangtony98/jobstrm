import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);

        this.onSearchTyped = this.onSearchTyped.bind(this);

        this.state = {
            searchTerm: ''
        }
    }

    onSearchTyped (e) {
        this.setState({
            searchTerm: e.target.value
        });
    }

    render() {
        const { searchTerm } = this.state;
        const { 
            type, 
            primary,
            placeholder 
        } = this.props;
        return (
            <input 
                type={type}
                value={searchTerm}
                onChange={(e) => this.onSearchTyped(e)}
                placeholder={placeholder} 
                className={primary ? "input input--primary" : "input input--secondary"}
            />
        );
    }
}