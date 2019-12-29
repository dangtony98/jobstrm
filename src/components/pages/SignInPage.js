import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Input from '../generic/Input';
import Button from '../generic/Button';

export class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.onButton = this.onButtonPressed.bind(this);

        this.state = {
            index: 0
        }
    }

    onButtonPressed(index) {
        this.setState({
            index
        });
    }

    render() {
        const { index } = this.state;
        return (
            <div className="pages-signin">
                <div className="element-box layout-position--center layout-col-4 marg-c">
                    <h3 className="text-align-c marg-t-m marg-b-m">JOBSTRM</h3>
                    {(index == 0) ? (
                        <Input 
                            type="text"
                            primary={false}
                            placeholder="Email"
                        />
                    ) : (
                        <Input 
                            type="password"
                            primary={false}
                            placeholder="Password"
                        />
                    )}
                    <p className="marg-t-xs marg-b-m">
                        Forgot <span className="span-highlight">email</span> or <span className="span-highlight">password</span>?
                    </p>
                    <div className="layout-flex layout-flex--between">
                        {(index == 0) ? (
                            <Button 
                                text="Create account"
                                primary={false}
                                onPress={() => this.props.history.push("/signup")}
                            />
                        ) : (
                            <Button 
                                text="Back"
                                primary={false}
                                onPress={() => this.onButtonPressed(0)}
                            />
                        )}
                        {(index == 0) ? (
                            <Button 
                            text="Next"
                            primary={true}
                            onPress={() => this.onButtonPressed(1)}
                        />
                        ) : (
                            <Button 
                                text="Login"
                                primary={true}
                                onPress={() => this.props.history.push("/")}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginPage);