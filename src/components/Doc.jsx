/* eslint-disable react/prop-types */
// This will be the Document that the inputs get displayed on
import '../styles/Doc.css';

export default function Doc({fullName, email, phone}) {
	return (
		<div className="document">
			<div className="name">{fullName}</div>
			<div className="email">{email}</div>
			<div className="phone">{phone}</div>
		</div>
	);
}
