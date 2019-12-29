import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Input from '../generic/Input';
import Button from '../generic/Button';

export class SignUpPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="pages-signup">
                <div className="element-box layout-position--center layout-col-4 marg-c">
                    <h3 className="text-align-c marg-t-m marg-b-m">JOBSTRM</h3>
                    <div className="layout-flex layout-grouping--xs">
                        <div className="marg-r-xxs">
                            <Input 
                                type="text"
                                primary={false}
                                placeholder="First name"
                            />
                        </div>
                        <div className="marg-l-xxs">
                            <Input 
                                type="text"
                                primary={false}
                                placeholder="Last name"
                            />
                        </div>                        
                    </div>
                    <div className="layout-grouping-xs">
                        <Input 
                            type="text"
                            primary={false}
                            placeholder="Email address"
                        />
                    </div>
                    <div className="layout-grouping-xs">
                        <Input 
                            type="password"
                            primary={false}
                            placeholder="Password"
                        />
                    </div>
                    <div className="layout-grouping-xs">
                        <Input 
                            type="password"
                            primary={false}
                            placeholder="Re-enter password"
                        />
                    </div>
                    <div className="layout-grouping-xs marg-b-sm">
                        <Input 
                            type="text"
                            primary={false}
                            placeholder="Location"
                        />
                    </div>                    
                    <div className="layout-flex layout-flex--between">
                        <Button 
                            text="Back"
                            primary={false}
                            onPress={() => this.props.history.push("/signin")}
                        />
                        <Button 
                            text="Create"
                            primary={true}
                            onPress={() => this.props.history.push("/")}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUpPage);