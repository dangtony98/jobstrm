import React from 'react';
import Filter from '../tools/Filter';
import Application from '../application/Application';

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

export default () => (
    <div className="layout-col-4 marg-c">
        <Filter />
        <h3>Applications</h3> 
        <div className="application-box">
            {applications.map((application, index) => (
                <Application 
                    application={application}
                    applications={applications} 
                    index={index}
                    key={application.id}
                />
            ))}
        </div>
    </div>
);