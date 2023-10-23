import {useState} from 'react';
import '../styles/Education.css';

export default function Education() {
	// State for if add btns been pressed
	const [add, setAdd] = useState(false);

	const handleCancel = () => {
		// Clear inputs
		const inputs = document.querySelectorAll('.education input');
		inputs.forEach((input) => input.value = '');

		// Remove inputs by setting 'add' to false
		setAdd(false);
	};

	return (
		<>
			<form>
				{/* When add btn is clicked, inputs will show */}
				{add &&
				<>
					<label> School: <span>* Required</span>
						<input placeholder='Enter School / University' required />
					</label>

					<label> Degree: <span>* Required</span>
						<input placeholder='Degree / Field of study' required />
					</label>

					<label> Start Date:
						<input type='date' />
					</label>

					<label> End Date:
						<input type='date' />
					</label>

					<label> Location:
						<input placeholder='Enter Location' />
					</label>
				</>
				}

				<div className="btn-container">
					{/* When add-btn is clicked, other btns will show */}
					{add && <button className='cancel-education' type='button'
						onClick={handleCancel}>Cancel</button>}

					<button className="add-education" type='button'
						onClick={() => setAdd(!add)}> Add
					</button>
				</div>
			</form>
		</>
	);
}
