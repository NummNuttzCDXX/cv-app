import {useState} from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Header from './components/Head';
import Doc from './components/Doc';
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
				</div>

				<Doc fullName={fullName} email={email} phone={phone}/>
			</main>
		</>
	);
}

export default App;
