import React from 'react';

const footer = (props) => {
    const inverse = props.inverse ? 'inverse' : null;
    return (
        <footer className={inverse}>
			<p>&copy; 2019 Copyright. <span className="green">Campus</span>Hustle.inc</p>
		</footer>
    );
}

export default footer;