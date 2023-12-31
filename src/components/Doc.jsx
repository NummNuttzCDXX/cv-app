/* eslint-disable react/prop-types */
// This will be the Document that the inputs get displayed on
import '../styles/Doc.css';
import {formatDate} from '../modules/utility.js';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';

export default function Doc({fullName, email, phone, educationArr, expArr,
	alignment, accentColor, font, fontSize, headFontColor}) {
	if (fontSize.length <= 0) fontSize = 16;

	// Styles to be added to `.document`
	const styles = {
		fontSize: fontSize + 'px',
	};

	const headstyles = {color: headFontColor, backgroundColor: accentColor};

	return (
		<div className={`document ${alignment} ${font}`} style={styles} >
			<div className="head" style={headstyles} >
				<div className="contact">
					<div className="email">
						<img src={emailIcon} className='icon' alt='Email'/>
						{email}
					</div>
					<div className="phone">
						<img src={phoneIcon} className='icon' alt='Phone' />
						{phone}
					</div>
				</div>

				<div className="name">{fullName}</div>
			</div>

			<div className="content">
				<div className="education">
					<h2 style={headstyles} >Education</h2>
					{educationArr.map((data) => // Render EduSections for every school
						<EducationSection key={data.id} education={data} />)}
				</div>
				<div className="experience">
					<h2 style={headstyles} >Work Experience</h2>
					{expArr.map((item) => <ExperienceSection experience={item}
						key={item.id} />)}
				</div>
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
						formatDate(education.start) +' - '+ formatDate(education.end)}
					</li>
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

function ExperienceSection({experience}) {
	return (
		<>
			<div className="time-place-container">
				<ul>
					<li className="date"> {experience.start &&
						formatDate(experience.start) + ' - ' + formatDate(experience.end)}
					</li>
					<li className="place"> {experience.location} </li>
				</ul>
			</div>

			<div className="exp-info">
				<ul>
					<li className="company"> {experience.company} </li>
					<li className="title"> {experience.title} </li>
					<li className="desc"> {experience.desc} </li>
				</ul>
			</div>
		</>
	);
}
