import React from 'react';

export default ({ application }) => {
    const { 
        company,
        position,
        location,
        description,
        notes 
    } = application;
    return (
        <div>
            <h4>{position}</h4>
            <p className="marg-b-sm">{company}</p>
            <h5>Location</h5>
            <p className="marg-b-sm">{location}</p>
            <h5>Job Description</h5>
            <p className="marg-b-sm">{description}</p>
            <h5>Notes</h5>
            <p className="marg-b-sm">{notes}</p>
        </div>
    );
}