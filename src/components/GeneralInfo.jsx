/* eslint-disable react/prop-types */

/**
 * Add general/personal information inputs
 *
 * @return {ReactHTML}
 */
export default function GeneralInfo({
	first, onChangeFirst, last, onChangeLast,
	email, onChangeEmail, phone, onChangePhone,
}) {
	return (
		<>
			<form>
				<label>First Name: <span>* Required</span>
					<input value={first} onChange={onChangeFirst} required
						placeholder="Enter First Name" />
				</label>
				<label> Last Name: <span>* Required</span>
					<input value={last} onChange={onChangeLast} required
						placeholder="Enter Last Name" />
				</label>

				<label> E-Mail:
					<input type="email" id="email"
						value={email} onChange={onChangeEmail}
						placeholder="Enter E-Mail"
					/>
				</label>
				<label> Phone Number:
					<input type='tel' id='phone'
						value={phone} onChange={onChangePhone}
						placeholder="Enter Phone Number"
					/>
				</label>
			</form>
		</>
	);
}
