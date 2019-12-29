import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Input from '../generic/Input';
import Button from '../generic/Button';

export class NewPage extends Component {
    render() {
        return (
            <div className="pages-new">
                <div className="layout-col-6 marg-c marg-t-m">
                    <h3>Add Application</h3> 
                    <div className="element-box">
                        <div className="layout-flex">
                            <div className="application-image marg-r-sm">

                            </div>
                            <div className="layout-flex--grow layout-grouping--xs">
                                <div className="layout-flex">
                                    <div className="marg-r-xxs layout-flex--grow">
                                        <Input 
                                            type="text"
                                            primary={false}
                                            placeholder="Company"
                                        />
                                    </div>
                                    <div className="marg-l-xxs layout-flex--grow">
                                        <Input 
                                            type="text"
                                            primary={false}
                                            placeholder="Position"
                                        />
                                    </div>                        
                                </div>
                                <div className="layout-grouping-xs">
                                    <Input 
                                        type="text"
                                        primary={false}
                                        placeholder="Location"
                                    />
                                </div>
                                <div className="layout-grouping-xs">
                                    <Input 
                                        type="text"
                                        primary={false}
                                        placeholder="Job description"
                                    />
                                </div>
                                <div className="layout-grouping-xs marg-b-sm">
                                    <Input 
                                        type="text"
                                        primary={false}
                                        placeholder="Notes"
                                    />
                                </div>
                                <hr className="marg-b-sm" />
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
                                </div>
                                <div className="layout-flex layout-flex--between">
                                    <Button 
                                        text="Discard"
                                        primary={false}
                                        onPress={() => this.props.history.push("/")}
                                    />
                                    <Button 
                                        text="Add"
                                        primary={true}
                                        onPress={() => this.props.history.push("/")}
                                    />
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