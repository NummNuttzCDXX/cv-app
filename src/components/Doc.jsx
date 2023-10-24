/* eslint-disable react/prop-types */
// This will be the Document that the inputs get displayed on
import '../styles/Doc.css';
import {formatDate} from '../modules/utility.js';

export default function Doc({fullName, email, phone, educationArr}) {
	return (
		<div className="document">
			<div className="head">
				<div className="contact">
					<div className="email">{email}</div>
					<div className="phone">{phone}</div>
				</div>

				<div className="name">{fullName}</div>
			</div>

			<div className="education">
				<h2>Education</h2>
				{educationArr.map((data) => // Render EduSections for every school
					<EducationSection key={data.id} education={data} />)}
			</div>
		</div>
	);
}

function EducationSection({education}) {
	return (
		<>
			<div className="time-place-container">
				<ul>
					<li className='date'>{education.start &&
						formatDate(education.start) +' - '+ formatDate(education.end)}</li>
					<li className="place"> {education.location} </li>
				</ul>
			</div>

			<div className="school-info">
				<ul>
					<li className="school">{education.school}</li>
					<li className="degree">{education.degree}</li>
				</ul>
			</div>
		</>
	);
}
