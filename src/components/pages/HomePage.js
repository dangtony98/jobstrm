import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../generic/Input';
import Button from '../generic/Button';
import Application from '../application/Application';
import { logout } from '../../services/api/authentication';
import { loadApplications } from '../../services/api/application';

const applications = [{
    id: 1,
    company: 'Google',
    position: 'Research Intern, 2020',
    location: 'Zurich, Switzerland',
    description: 'We follow a simple but vital premise in the User Experience group: “Focus on the user and all else will follow.” We’re ardently interested in our users and strive to learn everything we can about their behaviors, attitudes and emotions to help define the products and experiences we create. The User Experience team is a critical driving force behind gathering these insights and then using them to inspire and inform design. We are a multi-disciplinary team of Interaction Designers, Visual Designers, User Researchers, Copywriters and Web Developers who collaborate closely with each other, and with Engineering and Product Management, to create innovative, usable, great-looking products that people love to use.',
    notes: 'The behavioral interview went fine; but the technical interview was super tough.'
}, {
    id: 2,
    company: 'Facebook',
    position: 'Data Scientist, Analytics, Intern',
    location: 'New York, United States',
    description: 'We follow a simple but vital premise in the User Experience group: “Focus on the user and all else will follow.” We’re ardently interested in our users and strive to learn everything we can about their behaviors, attitudes and emotions to help define the products and experiences we create. The User Experience team is a critical driving force behind gathering these insights and then using them to inspire and inform design. We are a multi-disciplinary team of Interaction Designers, Visual Designers, User Researchers, Copywriters and Web Developers who collaborate closely with each other, and with Engineering and Product Management, to create innovative, usable, great-looking products that people love to use.',
    notes: 'Submitted resume; not too confident about this one.'
}, {
    id: 3,
    company: 'IBM',
    position: '2020 Research Summer Intern-Graduate',
    location: 'New York, United States',
    description: 'We follow a simple but vital premise in the User Experience group: “Focus on the user and all else will follow.” We’re ardently interested in our users and strive to learn everything we can about their behaviors, attitudes and emotions to help define the products and experiences we create. The User Experience team is a critical driving force behind gathering these insights and then using them to inspire and inform design. We are a multi-disciplinary team of Interaction Designers, Visual Designers, User Researchers, Copywriters and Web Developers who collaborate closely with each other, and with Engineering and Product Management, to create innovative, usable, great-looking products that people love to use.',
    notes: 'Submitted resume; cover for this one was twisted a little.'
}];

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.onButtonPressed = this.onButtonPressed.bind(this);
        this.state = {
            'applications': []
        }
    }

    componentDidMount() {
        loadApplications().then(data => {
            this.setState({'applications':data.data.data});
            console.log(this.state)
        });

    }

    onButtonPressed() {
        logout(() => {
            this.props.history.push('/signin');
        });
    }

    render() {
        return (
            <div className="pages-home">
                <div className="layout-col-6 marg-c marg-t-m">
                    <div className="element-box layout-flex layout-flex--center layout-grouping-s">
                        <Input
                            type="text"
                            primary={false} 
                            placeholder="Search"
                        />
                        <div 
                            onClick={() => this.onButtonPressed()}
                            className="element-circle marg-l-sm"
                        >
                            <i className="fas fa-users-cog icon"></i>
                        </div>
                    </div>
                    <div className="layout-flex layout-flex--between layout-flex--center layout-grouping-s">
                        <h3>Applications</h3> 
                        <Button 
                            text="New Application"
                            primary={true}
                            onClick={() => this.props.history.push("/new")}
                        />
                    </div>
                    <div className="element-box">
                        {this.state['applications'].map((application, index) => (
                            <Application 
                                application={application}
                                applications={applications} 
                                index={index}
                                key={application.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(HomePage);