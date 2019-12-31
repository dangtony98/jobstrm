import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Input from '../generic/Input';
import Button from '../generic/Button';

import { login } from '../../services/api/authentication';

export class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onButton = this.onButtonPressed.bind(this);
        this.onSubmitPressed = this.onSubmitPressed.bind(this);

        this.state = {
            index: 0,
            email: '',
            password: ''
        }
    }

    onChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    onButtonPressed(index) {
        this.setState({
            ...this.state,
            index
        });
    }

    onSubmitPressed() {
        const { email, password } = this.state;
        login({ email, password }, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { index, email, password } = this.state;
        return (
            <div className="pages-signin">
                <div className="element-box layout-position--center layout-col-4 marg-c">
                    <h3 className="text-align-c marg-t-m marg-b-m">JOBSTRM</h3>
                    {(index == 0) ? (
                        <Input
                            value={email}
                            type="text"
                            primary={false}
                            placeholder="Email"
                            onChange={this.onChange}
                            name="email" 
                        />
                    ) : (
                        <Input 
                            value={password}
                            type="password"
                            primary={false}
                            placeholder="Password"
                            onChange={this.onChange}
                            name="password"
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
                                onClick={() => this.props.history.push("/signup")}
                            />
                        ) : (
                            <Button 
                                text="Back"
                                primary={false}
                                onClick={() => this.onButtonPressed(0)}
                            />
                        )}
                        {(index == 0) ? (
                            <Button 
                            text="Next"
                            primary={true}
                            onClick={() => this.onButtonPressed(1)}
                        />
                        ) : (
                            <Button 
                                text="Login"
                                primary={true}
                                onClick={() => this.onSubmitPressed()}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginPage);