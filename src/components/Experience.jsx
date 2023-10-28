/* eslint-disable react/prop-types */
import {useState} from 'react';
import editIcon from '../assets/edit-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';
import {isBefore, isFuture, parseISO} from 'date-fns';

export default function Experience({
	company, title, start, end, location, desc,
	handleCompany, handleTitle, handleStart, handleEnd,
	handleLocation, handleDesc, expArr, handleEdit, onCancel,
	onDelete, onAdd, onEdit,
}) {
	// State for if add btns been pressed
	const [add, setAdd] = useState(false);
	const [isEdit, setEdit] = useState(false);
	const [editId, setEditId] = useState(null);

	function reset() {
		onCancel(); // Clear inputs
		setAdd(false);
		setEdit(false);
		setEditId(null);
	}

	function edit(id) {
		// set add to true to show form
		setAdd(true);
		// Set edit to true to initiate an edit
		setEdit(true);
		// Save id for later
		setEditId(id);
		// Set inputs
		onEdit(id);
	}

	function checkValidity() {
		const msgBox = document.querySelector('.exp span.msg');
		let valid = true;

		// Check required fields
		if (company.length <= 0 || title.length <= 0) {
			msgBox.innerHTML += '<br> Required fields must be completed';
			valid = false;
		}

		// Check dates
		if (isFuture(parseISO(start)) || isFuture(parseISO(end))) {
			msgBox.innerHTML += '<br> Dates must be in past or present';
			valid = false;
		// Check if start is before end
		} else if (!isBefore((parseISO(start)), parseISO(end)) &&
		(start != '' || end != '')) {
			msgBox.innerHTML = '<br> Start date must be before end date';
			valid = false;
		}

		// If valid, hide box and remove txt
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
			{!add &&
				<div className="companies">
					<ul>
						{expArr.map((item) => {
							return (
								<li key={item.id}>
									{item.company}

									<div className="icon-container">
										<img src={editIcon} className='icon' alt="Edit"
											onClick={() => edit(item.id)} />
										<img src={deleteIcon} className='icon' alt="Delete"
											onClick={() => onDelete(item.id)} />
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			}

			<form>
				{/* Show inputs when add btn is clicked */}
				{add &&
				<>
					<label>Company Name: <span>* Required</span>
						<input value={company} placeholder="Enter Name of Company" required
							onChange={handleCompany} />
					</label>

					<label>Position Title: <span>* Required</span>
						<input value={title} placeholder="Enter Job Title" required
							onChange={handleTitle} />
					</label>

					<label>Start Date:
						<input type="date" value={start} onChange={handleStart} />
					</label>

					<label>End Date:
						<input type="date" value={end} onChange={handleEnd} />
					</label>

					<label>Location:
						<input value={location} placeholder="Enter Location"
							onChange={handleLocation} />
					</label>

					<label>Description:
						<textarea value={desc} placeholder="Brief Description of your Job"
							onChange={handleDesc} />
					</label>
				</>}

				<div className="btn-container">
					{add &&
						<button className='cancel-btn' type='button'
							onClick={reset}>
								Cancel
						</button>
					}

					{!isEdit &&
						<button className='add-btn' type='button'
							onClick={() => {
								if (add) {
									if (!checkValidity()) return;
									onAdd(); // Add new
								}

								// Switch add so form will show or hide
								setAdd(!add);
							}}>
							Add
						</button> ||
					isEdit &&
						<button className='edit-btn' type='button'
							onClick={() => {
								// If invalid, return
								if (!checkValidity()) return;

								handleEdit(editId); // Handle the edit
								reset(); // Reset everything
							}}>
								Edit
						</button>
					}
				</div>
			</form>
		</>
	);
}
