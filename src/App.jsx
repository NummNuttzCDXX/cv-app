import {v4 as uuid} from 'uuid';
import {useState} from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Header from './components/Head';
import Doc from './components/Doc';
import Education from './components/Education';
import Dropdown from './components/Dropdown';
import Experience from './components/experience';

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

	// Experience
	// Input states
	const [company, setCompany] = useState('');
	const [title, setTitle] = useState(''); // Job Title
	const [expStart, setExpStart] = useState('');
	const [expEnd, setExpEnd] = useState('');
	const [expLocation, setExpLocation] = useState('');
	const [expDesc, setExpDesc] = useState('');
	const [expArr, setExpArr] = useState([{
		company: 'Umbrella Corp',
		title: 'Viral Specialist',
		start: '4/13/2010',
		end: new Date,
		location: 'Classified',
		desc: 'Classified',
		id: uuid(),
	}]);

	// Input handlers
	const expHandlers = (() => {
		function handleCompany(e) {
			setCompany(e.target.value);
		}

		function handleTitle(e) {
			setTitle(e.target.value);
		}

		function handleStart(e) {
			setExpStart(e.target.value);
		}

		function handleEnd(e) {
			setExpEnd(e.target.value);
		}

		function handleLocation(e) {
			setExpLocation(e.target.value);
		}

		function handleDesc(e) {
			setExpDesc(e.target.value);
		}

		function handleEdit(id) {
			const index = expArr.findIndex((item) => item.id == id);
			const newArr = [...expArr];

			// Edit object at `index`
			newArr[index].company = company;
			newArr[index].title = title;
			newArr[index].start = expStart;
			newArr[index].end = expEnd;
			newArr[index].location = expLocation;
			newArr[index].desc = expDesc;

			// Update array state and clear inputs
			setExpArr(newArr);
			clearInputs();
		}

		function clearInputs() {
			setCompany('');
			setTitle('');
			setExpStart('');
			setExpEnd('');
			setExpLocation('');
			setExpDesc('');
			// Clear msg box
			document.querySelector('.exp span.msg').textContent = '';
		}

		function handleDelete(id) {
			setExpArr(expArr.filter((item) => item.id != id));
		}

		function handleAdd() {
			/* Set Experience Array to be a new array
			using spread syntax and add new object to the array */
			setExpArr([...expArr, {
				company: company,
				title: title,
				start: expStart,
				end: expEnd,
				location: expLocation,
				desc: expDesc,
				id: uuid(),
			}]);

			clearInputs();
		}

		function setInputs(id) {
			// Get object from arr
			const item = expArr.find((item) => item.id == id);

			// Set inputs to values
			setCompany(item.company);
			setTitle(item.title);
			setExpStart(item.start);
			setExpEnd(item.end);
			setExpLocation(item.location);
			setExpDesc(item.desc);
		}

		return {handleCompany, handleTitle, handleStart, handleEnd,
			handleLocation, handleDesc, handleEdit, clearInputs, handleDelete,
			handleAdd, setInputs};
	})();

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

					<Dropdown title={'Experience'} name={'exp'}>
						<Experience company={company}
							handleCompany={expHandlers.handleCompany}
							title={title} handleTitle={expHandlers.handleTitle}
							start={expStart} handleStart={expHandlers.handleStart}
							end={expEnd} handleEnd={expHandlers.handleEnd}
							location={expLocation}
							handleLocation={expHandlers.handleLocation}
							desc={expDesc} handleDesc={expHandlers.handleDesc}
							expArr={expArr}
							onEdit={expHandlers.setInputs}
							handleEdit={expHandlers.handleEdit}
							onCancel={expHandlers.clearInputs}
							onDelete={expHandlers.handleDelete}
							onAdd={expHandlers.handleAdd} />
					</Dropdown>
				</div>

				{/* Document section -- Header has default values if blank */}
				<Doc fullName={fullName == ' ' ? 'Name' : fullName}
					email={email || 'fake@fakemail.com'}
					phone={phone || '555-555-5555'}
					educationArr={educationArr}
					expArr={expArr} />
			</main>
		</>
	);
}

export default App;
