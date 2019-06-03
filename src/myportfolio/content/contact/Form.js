import React from 'react';

function ContactForm(props) {
	const formStyle = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		background: '#303b5b',
		color: '#dbdce1',
		marginTop: '15px',
		padding: '80px',
		paddingTop: '20px',
		paddingBottom: '20px'
	};

	const titleStyle = {
		fontSize: '52px'
	};
	const paraStyle = {
		fontSize: '24px',
		position: 'relative',
		bottom: '80px'
	};

	const inputStyle = {
		width: '100%',
		height: '36px',
		outline: 'none',
		border: 'none',
		marginBottom: '10px',
		borderRight: '6px solid #97bbc7',
		background: '#dbdce1',
		color: '#46467a',

		fontWeight: '600',
		fontSize: '16px',

		paddingLeft: '12px'
	};

	const txtAreaStyle = {
		outline: 'none',

		width: '100%',
		background: '#dbdce1',
		color: '#2348a3	',
		borderRight: '5px solid #97bbc7',
		paddingTop: '4px',
		paddingLeft: '8px',
		fontSize: '14px',
		fontWeight: '600'
	};

	const btnStyle = {
		alignSelf: 'flex-end',
		marginTop: '20px',
		width: '120px',
		height: '30px',

		border: 'none',
		color: 'white',
		fontSize: '14px',
		fontWeight: '600',
		letterSpacing: '2px',
		background: '#97bbc7'
	};

	return (
		<form className="form" action="" /*method="POST"  onSubmit={props.handleSubmit}*/ style={formStyle} netlify>
			<h1 className="form-title" style={titleStyle}>
				Send me an email
			</h1>
			<p style={paraStyle}>I should be able to respond within 24 hours.</p>
			<input
				type="text"
				name="name"
				id="name"
				onChange={props.handleChange}
				value={props.data.name}
				placeholder="What is your name?"
				style={{
					...props.capName,
					...inputStyle
				}}
			/>
			<input
				type="email"
				name="email"
				id="email"
				onChange={props.handleChange}
				value={props.data.email}
				placeholder="Your email"
				style={inputStyle}
			/>
			<label
				htmlFor="message"
				style={{
					display: 'flex',
					flexDirection: 'column',
					fontSize: '22px'
				}}
			>
				Message:
				<textarea
					name="message"
					id="message"
					onChange={props.handleChange}
					value={props.data.message}
					placeholder={props.data.placeholder}
					cols="80"
					rows="8"
					style={txtAreaStyle}
				/>
			</label>
			<button className="btn" style={btnStyle}>
				Send
				<i className="far fa-paper-plane" />
			</button>
		</form>
	);
}

export default ContactForm;
