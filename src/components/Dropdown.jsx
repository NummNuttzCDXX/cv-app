/* eslint-disable react/prop-types */
// Create Dropdown menu

import {useState} from 'react';
import '../styles/Dropdown.css';

function Dropdown({title, children, open=false, name}) {
	// Declare Drop state (true = open, false = close)
	const [drop, setDrop] = useState(open);

	// Class for actual dropdown; if open, add `dropped` class
	const dropClass = `dropdown ${drop ? 'dropped' : ''}`;

	function handleDrop() {
		setDrop(!drop);
	}

	return (
		<div className={'dropdown-menu round-light ' + name}>
			<h2 onClick={handleDrop}>{title} <span className='msg hide'></span> </h2>
			<div className={dropClass}>
				{children}
			</div>
		</div>
	);
}

export default Dropdown;
