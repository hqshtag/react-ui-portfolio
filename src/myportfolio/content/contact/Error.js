import React from 'react';

function Error(props) {
	return (
		<div
			className="error"
			style={{
				fontFamily: "'Noto Sans HK',sans-serif",
				height: '30vh',
				fontSize: '38px',
				background: 'whitesmoke',
				color: '#a61414',

				paddingBottom: '70vh'
			}}
		>
			<h1
				style={{
					margin: '40px 0px 0px 8%'
				}}
			>
				Sorry Mr/Mme {props.name}!
			</h1>
			<p
				style={{
					marginLeft: '4%'
				}}
			>
				An error occured and your mail could not be sent. Please try again later.
			</p>
		</div>
	);
}

export default Error;
