import React from 'react';

export default ({ text, primary, onClick }) => (
    <button
        onClick={() => onClick()}
        className={primary ? "button button--primary" : "button button--secondary"}
    >
        {text}
    </button>
);
