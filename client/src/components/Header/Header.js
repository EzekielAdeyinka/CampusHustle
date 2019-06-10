import React from 'react';
import { Link } from 'react-router-dom';

const header = (props) => {
    return (
        <header>
			<div className="logo">
				<Link to="/"> <span className="green">Campus</span> Hustle </Link>
			</div>
			<nav className="main-nav">
				<ul className="main-nav__list">
					<li className="main-nav__list-item">
						<Link to="/">Login</Link>
					</li>
					<li className="main-nav__list-item">
						<Link to="/">Sign Up</Link>
					</li>
				</ul>
			</nav>
		</header>
    );
}

export default header;