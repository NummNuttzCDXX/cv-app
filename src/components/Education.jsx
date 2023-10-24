/* eslint-disable react/prop-types */
import {useState} from 'react';
import '../styles/Education.css';
// Icons
import editIcon from '../assets/edit-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';
import {isBefore, isFuture, isToday, parseISO} from 'date-fns';

export default function Education({school, onChangeSchool, degree,
	onChangeDegree, start, onChangeStart, end, onChangeEnd, location,
	onChangeLocation, onCancel, handleAdd, schoolsArr, onDelete,
	onEdit, handleEdit}) {
	// State for if add btns been pressed
	const [add, setAdd] = useState(false);
	const [edit, setEdit] = useState(false);
	const [editId, setEditId] = useState(null);

	function checkValidity() {
		const msgBox = document.querySelector('.education span.msg');
		let valid = true;

		// Check required fields
		if (school == '' || school == ' ' ||
		degree == '' || degree == ' ') {
			msgBox.textContent = 'Required fields must be filled out';
			valid = false;
		}

		// Check if dates are future
		if ((isFuture(parseISO(start)) || isFuture(parseISO(end))) &&
		(!isToday(parseISO(start)) || !isToday(parseISO(end))) &&
		(start != '' || end != '')) {
			msgBox.textContent.length > 0 ?
				msgBox.innerHTML += '<br> Dates must be in the past or present' :
				msgBox.textContent = 'Dates must be in the past or present';
			valid = false;
		}

		// Check if start date is before end date
		if (!isBefore(parseISO(start), parseISO(end)) &&
		(start != '' || end != '')) {
			msgBox.textContent.length > 0 ?
				msgBox.innerHTML += '<br> Start date must be before end date' :
				msgBox.textContent = 'Start date must be before end date';
			valid = false;
		}

		if (valid) {
			msgBox.classList.add('hide');
			msgBox.textContent = '';
		} else {
			msgBox.classList.remove('hide');
		}

		return valid;
	}

	return (
		<>
			{/* When add btn is NOT clicked */}
			{!add &&
				<div className='school-names'>
					<ul>
						{schoolsArr.map((item) => {
							return (
								<li key={item.id}> {item.name}
									<div className="icon-container">
										<img src={editIcon} className='edit-icon' alt='Edit Icon'
											onClick={() => {
												// Set `add` to true to show form
												setAdd(true);
												setEdit(true);
												onEdit(item.id);
												setEditId(item.id);
											}} />
										<img src={deleteIcon} className='delete-icon'
											alt="Delete Icon" onClick={() => onDelete(item.id)} />
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			}

			<form>
				{/* When add btn is clicked, inputs will show */}
				{add &&
				<>
					<label> School: <span>* Required</span>
						<input placeholder='Enter School / University' required
							value={school} onChange={onChangeSchool} />
					</label>

					<label> Degree: <span>* Required</span>
						<input placeholder='Degree / Field of study' required
							value={degree} onChange={onChangeDegree} />
					</label>

					<label> Start Date:
						<input type='date' value={start} onChange={onChangeStart} />
					</label>

					<label> End Date:
						<input type='date' value={end} onChange={onChangeEnd} />
					</label>

					<label> Location:
						<input placeholder='Enter Location' value={location}
							onChange={onChangeLocation} />
					</label>
				</>
				}

				<div className="btn-container">
					{/* When add-btn is clicked, other btns will show */}
					{add && <>
						<button className='cancel-education' type='button'
							onClick={() => {
								// Reset everything on cancel
								onCancel();
								setEdit(false);
								setEditId(null);
								setAdd(false);
								document.querySelector('.education span.msg').textContent = '';
							}}>Cancel</button>
					</>}

					{!edit && <button className="add-education" type='button'
						onClick={() => {
							if (add) {
								if (!checkValidity()) {
									return;
								}

								handleAdd(); // Add new
								onCancel(); // Clear inputs
							}

							setAdd(!add);
						}}> Add </button> ||
					edit && <button className='edit-education' type='button'
						onClick={() => {
							if (!checkValidity()) {
								return;
							}
							handleEdit(editId);
							setEditId(null);
							setEdit(false);
							setAdd(false);
						}}> Edit </button>}
				</div>
			</form>
		</>
	);
}
