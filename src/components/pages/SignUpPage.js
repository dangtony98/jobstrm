import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Input from '../generic/Input';
import Button from '../generic/Button';

import { register } from '../../services/api/authentication';

export class SignUpPage extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmitPressed = this.onSubmitPressed.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            repassword: ''
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitPressed() {
        register(this.state, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {
            first_name,
            last_name,
            email,
            password,
            repassword
        } = this.state;
        return (
            <div className="pages-signup">
                <div className="element-box layout-position--center layout-col-4 marg-c">
                    <h3 className="text-align-c marg-t-m marg-b-m">JOBSTRM</h3>
                    <div className="layout-flex layout-grouping--xs">
                        <div className="marg-r-xxs">
                            <Input
                                value={first_name} 
                                type="text"
                                primary={false}
                                placeholder="First name"
                                onChange={this.onChange}
                                name="first_name"
                            />
                        </div>
                        <div className="marg-l-xxs">
                            <Input
                                value={last_name} 
                                type="text"
                                primary={false}
                                placeholder="Last name"
                                onChange={this.onChange}
                                name="last_name"
                            />
                        </div>                        
                    </div>
                    <div className="layout-grouping-xs">
                        <Input
                            value={email} 
                            type="text"
                            primary={false}
                            placeholder="Email address"
                            onChange={this.onChange}
                            name="email"
                        />
                    </div>
                    <div className="layout-grouping-xs">
                        <Input
                            value={password} 
                            type="password"
                            primary={false}
                            placeholder="Password"
                            onChange={this.onChange}
                            name="password"
                        />
                    </div>
                    <div className="layout-grouping-xs">
                        <Input
                            value={repassword} 
                            type="password"
                            primary={false}
                            placeholder="Re-enter password"
                            onChange={this.onChange}
                            name="repassword"
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
                            onClick={() => this.props.history.push("/signin")}
                        />
                        <Button 
                            text="Create"
                            primary={true}
                            onClick={() => this.onSubmitPressed()}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUpPage);