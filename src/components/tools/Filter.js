import React, { Component } from 'react';

export default class Filter extends Component {
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
        return (
            <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => this.onSearchTyped(e)}
                placeholder="Search" 
                className="filter"
            />
        );
    }
}