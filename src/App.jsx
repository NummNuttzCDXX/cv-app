import {v4 as uuid} from 'uuid';
import {useState} from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Header from './components/Head';
import Doc from './components/Doc';
import Education from './components/Education';
import Dropdown from './components/Dropdown';

/**
 * Create app
 * @return {ReactHTMLElement} App
 */
function App() {
	// Declare states for inputs so that
	// the `<Doc>` can update in real time
	const [first, setFirst] = useState('');
	const [last, setLast] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const fullName = first + ' ' + last;

	// Input onChange handlers
	function onChangeFirst(e) {
		setFirst(e.target.value);
	}

	function onChangeLast(e) {
		setLast(e.target.value);
	}

	function onChangeEmail(e) {
		setEmail(e.target.value);
	}

	function onChangePhone(e) {
		setPhone(e.target.value);
	}

	// Education
	const [school, setSchool] = useState('');
	const [degree, setDegree] = useState('');
	const [schoolStart, setSchoolStart] = useState('');
	const [schoolEnd, setSchoolEnd] = useState('');
	const [schoolLocation, setSchoolLocation] = useState('');
	const [educationArr, setEducationArr] = useState([{
		school: 'Fake University',
		degree: 'Fake Degree',
		start: '3/10/19',
		end: new Date,
		location: 'Your mom\'s house',
		id: uuid(),
	}]);

	function onChangeSchool(e) {
		setSchool(e.target.value);
	}

	function onChangeDegree(e) {
		setDegree(e.target.value);
	}

	function onChangeSchoolStart(e) {
		setSchoolStart(e.target.value);
	}

	function onChangeSchoolEnd(e) {
		setSchoolEnd(e.target.value);
	}

	function onChangeSchoolLocation(e) {
		setSchoolLocation(e.target.value);
	}

	function clearEducationInputs() {
		setSchool('');
		setDegree('');
		setSchoolStart('');
		setSchoolEnd('');
		setSchoolLocation('');
	}

	function handleAddEducation() {
		// Add new Education object to array in state
		setEducationArr([...educationArr, {
			school: school,
			degree: degree,
			start: schoolStart,
			end: schoolEnd,
			location: schoolLocation,
			id: uuid(),
		}]);
	}

	function handleDeleteEducation(id) {
		// Filter through arr and remove item that has `id`
		setEducationArr(educationArr.filter((item) => item.id != id));
	}

	function setEducationInputs(id) {
		const item = educationArr.find((item) => item.id == id);

		// Set inputs to values
		setSchool(item.school);
		setDegree(item.degree);
		setSchoolStart(item.start);
		setSchoolEnd(item.end);
		setSchoolLocation(item.location);
	}

	function handleEditEducation(id) {
		// Get index
		const index = educationArr.findIndex((item) => item.id == id);
		// Create new array
		const newArr = [...educationArr];

		// Edit object at `index`
		newArr[index].school = school;
		newArr[index].degree = degree;
		newArr[index].start = schoolStart;
		newArr[index].end = schoolEnd;
		newArr[index].location = schoolLocation;

		// Update array state and clear inputs
		setEducationArr(newArr);
		clearEducationInputs();
	}

	return (
		<>
			<Header/>

			<main>
				{/* Will hold all of the forms */}
				<div className='form-containers'>
					<Dropdown title={'Personal Information'} open={true} name={'general'}>
						<GeneralInfo first={first} onChangeFirst={onChangeFirst}
							last={last} onChangeLast={onChangeLast}
							email={email} onChangeEmail={onChangeEmail}
							phone={phone} onChangePhone={onChangePhone}
						/>
					</Dropdown>

					<Dropdown title={'Education'} name={'education'}>
						<Education school={school} onChangeSchool={onChangeSchool}
							degree={degree} onChangeDegree={onChangeDegree}
							start={schoolStart} onChangeStart={onChangeSchoolStart}
							end={schoolEnd} onChangeEnd={onChangeSchoolEnd}
							location={schoolLocation}
							onChangeLocation={onChangeSchoolLocation}
							onCancel={clearEducationInputs} handleAdd={handleAddEducation}
							schoolsArr={educationArr.map((item) => {
								return {name: item.school, id: item.id};
							})} onDelete={handleDeleteEducation}
							onEdit={setEducationInputs}
							handleEdit={handleEditEducation} />
					</Dropdown>
				</div>

				<Doc fullName={fullName} email={email} phone={phone}/>
			</main>
		</>
	);
}

export default App;
