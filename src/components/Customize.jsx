/* eslint-disable react/prop-types */
// Customization Section -- Customize Doc styles
import {useState} from 'react';
import '../styles/Customize.css';

function Customize({handleAlignment, color, handleColor,
	handleFont, fontSize, handleFontSize}) {
	// Declare whether corrosponding settings are open
	const [openAlign, setOpenAlign] = useState(false);
	const [openColor, setOpenColor] = useState(false);
	const [openFont, setOpenFont] = useState(false);

	// Open one of the Settings, close all the others
	function setSettings(cb) {
		const settings = [setOpenAlign, setOpenColor, setOpenFont];
		const current = [openAlign, openColor, openFont];

		settings.forEach((item, i) => {
			if (item == cb) cb(!current[i]);
			else item(false);
		});
	}

	return (
		<>
			<nav>
				<button type="button"
					onClick={() => setSettings(setOpenAlign)} >
				Align
				</button>
				<button type="button" onClick={() => setSettings(setOpenColor)} >
				Accent Color
				</button>
				<button type="button" onClick={() => setSettings(setOpenFont)} >
				Font
				</button>
			</nav>

			{ // Alignment settings
				openAlign &&
				<div className="alignment">
					<button type="button" onClick={() => handleAlignment('top')} >
						<div className="align-visual top"></div>
						Top
					</button>
					<button type="button" onClick={() => handleAlignment('right')} >
						<div className="align-visual right"></div>
						Right
					</button>
					<button type="button" onClick={() => handleAlignment('left')} >
						<div className="align-visual left"></div>
						Left
					</button>
				</div>
			}
			{ // Color settings
				openColor &&
				<div className="color">
					<label > Choose Accent Color:
						<input type='color' value={color} onChange={handleColor}/>
					</label>
				</div>
			}
			{ // Font settings
				openFont &&
				<div className="font">
					<div className="select-font">
						<button type="button" className='rubik' onClick={handleFont}
							value={'rubik'} >
								Rubik
						</button>
						<button type="button" className='archivo' onClick={handleFont}
							value={'archivo'} >
								Archivo
						</button>
						<button type="button" className='caveat' onClick={handleFont}
							value={'caveat'} >
								Caveat
						</button>
					</div>

					<label> Font Size:
						<input type='number' value={fontSize}
							onChange={handleFontSize} />
					</label>
				</div>
			}
		</>
	);
}

export default Customize;
