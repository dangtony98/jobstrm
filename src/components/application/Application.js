import React from 'react';

export default ({ application, applications, index }) => {
    const { 
        company,
        position,
        location,
        description,
        notes 
    } = application;
    return (
        <div className="application layout-flex">
            <div className="application__left marg-r-sm">
                <div className="application-image">

                </div>
            </div>
            <div className="application__right">
                <h4>{position}</h4>
                <p className="marg-b-sm">{company}</p>
                <h5>Location</h5>
                <p className="marg-b-sm">{location}</p>
                <h5>Job Description</h5>
                <p className="marg-b-sm">{description}</p>
                <h5>Notes</h5>
                <p className="marg-b-sm">{notes}</p>
                {(index < applications.length - 1) && (
                    <hr className="hr" />
                )}
            </div>
        </div>
    );
}