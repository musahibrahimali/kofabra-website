import React from 'react';

function Marker(props) {
    const { text } = props;
    return (
        <div>
            <div>{text}</div>
        </div>
    )
}

export default Marker;
