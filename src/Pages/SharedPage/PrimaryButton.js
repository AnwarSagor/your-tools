import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button
            class="btn bg-gradient-to-r from-blue-900 to-cyan-500">
            {children}
        </button>

    );
};

export default PrimaryButton;