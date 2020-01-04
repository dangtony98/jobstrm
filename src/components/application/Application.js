import React, { Component } from 'react';

export default class Application extends Component {
    constructor(props) {
        super(props);

        this.invertExpanded = this.invertExpanded.bind(this);

        this.state = {
            isExpanded: false
        }
    }

    invertExpanded() {
        this.setState((prevState) => ({
            isExpanded: !prevState.isExpanded
        }));
    }

    render() {
        const { isExpanded} = this.state;
        const { application, applications, index } = this.props;
        const { 
            company,
            position,
            location,
            description,
            notes 
        } = application;
        return (
            <div className="layout-flex">
                <div className="application-image marg-r-sm">

                </div>
                <div className="layout-flex--grow">
                    <div className="layout-flex layout-flex--between">
                        <div>
                            <h4>{position}</h4>
                            <p className="marg-b-sm">{company}</p>
                        </div>
                        <div onClick={() => this.invertExpanded()}>
                            {!isExpanded ? (
                                <i 
                                    className="fas fa-chevron-down icon"
                                />
                            ) : (
                                <i 
                                    className="fas fa-chevron-up icon"
                                />
                            )}
                        </div>
                    </div>
                    {isExpanded && (
                        <div>
                            <h5>Location</h5>
                            <p className="marg-b-sm">{location}</p>
                            <h5>Job Description</h5>
                            <p className="marg-b-sm">{description}</p>
                            <h5>Notes</h5>
                            <p className="marg-b-sm">{notes}</p>
                        </div>
                    )}
                    {(index < applications.length - 1) && (
                        <hr className="marg-b-sm" />
                    )}
                </div>
            </div>
        );
    }
}