import React from 'react';

export default ({ value, type, name, primary, placeholder, onChange }) => (
    <input 
        value={value}
        type={type}
        name={name}
        onChange={(e) => onChange(e)}
        placeholder={placeholder} 
        className={primary ? "input input--primary" : "input input--secondary"}
    />
)