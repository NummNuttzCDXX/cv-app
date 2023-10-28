// Header Component
import {useState} from 'react';
// Color Scheme icons
import lightMode from '../assets/light-mode.svg';
import darkMode from '../assets/dark-mode.svg';

export default function Header() {
	return (
		<header>
			<h1>CV Generator <ColorScheme /> </h1>
		</header>
	);
}

function ColorScheme() {
	const [mode, setMode] = useState('dark');

	function switchMode() {
		// Set mode
		setMode(mode == 'light' ? 'dark' : 'light');

		// Alternate classes -- Toggle one on and one off
		const root = document.querySelector(':root');
		root.classList.toggle('light');
		root.classList.toggle('dark');
	}

	return (
		<>
			{ mode == 'dark' &&
			// If dark mode is set, show Light Mode Icon
				<img src={lightMode} alt='Set color scheme: Light' className='icon'
					onClick={switchMode} /> ||
			// If light mode is set, show Dark Mode Icon
			mode == 'light' &&
				<img src={darkMode} alt='Set color scheme: Dark' className='icon'
					onClick={switchMode} />
			}
		</>
	);
}
