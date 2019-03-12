import React, { Component } from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['green', 'orange', 'red', 'yellow', 'blue', 'pink'];
    const randomColour = colors[Math.floor(Math.random() * 5+1)];
    const className = randomColour + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        );
    }
};

export default Rainbow;