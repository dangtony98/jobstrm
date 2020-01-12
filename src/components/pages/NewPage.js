import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Input from '../generic/Input';
import { createApplication } from '../../services/api/application';

export class NewPage extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onButtonPressed = this.onButtonPressed.bind(this);

        this.state = {
            company: '',
            position: '',
            location: '',
            description: ''
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onButtonPressed() { 
        const { company, position, location, description } = this.state;
        createApplication({
            company,
            position,
            location,
            description
        }, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { company, position, location, description } = this.state;
        return (
            <div className="pages-new">
                <div className="layout-col-6 marg-c marg-t-m">
                    <h3>New Application</h3> 
                    <div className="element-box">
                        <div className="layout-flex">
                            <div className="application-image marg-r-sm">

                            </div>
                            <div className="layout-flex--grow layout-grouping--xs">
                                <div className="layout-flex">
                                    <div className="marg-r-xxs layout-flex--grow">
                                        <Input 
                                            value={company} 
                                            type="text"
                                            primary={false}
                                            placeholder="Company"
                                            onChange={this.onChange}
                                            name="company"
                                        />
                                    </div>
                                    <div className="marg-l-xxs layout-flex--grow">
                                        <Input 
                                            value={position}
                                            type="text"
                                            primary={false}
                                            placeholder="Job title"
                                            onChange={this.onChange}
                                            name="position"
                                        />
                                    </div>                        
                                </div>
                                <div className="layout-grouping-xs">
                                    <Input 
                                        value={location}
                                        type="text"
                                        primary={false}
                                        placeholder="Location"
                                        onChange={this.onChange}
                                        name="location"
                                    />
                                </div>
                                <div className="layout-grouping-xs">
                                    <textarea 
                                        rows="10" 
                                        placeholder="Job description"
                                        className="textarea"
                                    />
                                </div>
                                <div className="layout-grouping-xs marg-b-sm">
                                    <textarea 
                                        value={description}
                                        rows="10" 
                                        placeholder="Notes"
                                        onChange={this.onChange}
                                        className="textarea"
                                        name="description"
                                    />
                                </div>
                                {/* <hr className="marg-b-sm" />
                                <h5 className="marg-b-xs">Timeline</h5>
                                <div className="layout-flex marg-b-m">
                                    <div className="marg-r-xxs layout-flex--grow">
                                        <Input 
                                            type="text"
                                            primary={false}
                                            placeholder="Stage name"
                                        />
                                    </div>
                                    <div className="marg-l-xxs layout-flex--grow">
                                        <Input 
                                            type="text"
                                            primary={false}
                                            placeholder="Stage date"
                                        />
                                    </div>                      
                                </div> */}
                                <div className="layout-grouping-xs marg-b-sm">
                                    <button
                                        className="layout-size--full-width button button--primary"
                                    >
                                        + Attach files
                                    </button>
                                </div>
                                <div className="layout-flex layout-flex--between">
                                    <button
                                        className="button button--secondary"
                                        onClick={() => this.props.history.push("/")}
                                    >
                                        Discard
                                    </button>
                                    <button
                                        className="button button--primary"
                                        onClick={() => this.onButtonPressed()}
                                    >
                                        Add
                                    </button>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(NewPage);