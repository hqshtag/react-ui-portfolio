import React from 'react';
function Success(props) {
	return (
		<div
			className="success"
			style={{
				height: '70vh',
				marginTop: '16px',
				paddingTop: '30vh',
				background: '#5ab0a0',
				padding: '80px',
				color: 'whitesmoke'
			}}
		>
			<h1
				style={{
					marginLeft: '8%',
					fontSize: '92px',
					color: '#4b6e97'
				}}
			>
				Mr /Mme {props.name},
			</h1>
			<p
				style={{
					position: 'relative',
					bottom: '60px',
					fontSize: '46px',
					color: '#36829c'
				}}
			>
				Your message was sent successfully, I'll respond to{' '}
				<span
					className="sbold"
					style={{
						fontWeight: 'bold'
					}}
				>
					{props.email}
				</span>{' '}
				as soon as I get this.
			</p>
			<p
				className="thanks-ah"
				style={{
					marginTop: '20px',
					marginRight: '50px',
					fontSize: '36px',
					float: 'right',
					color: '#479595'
				}}
			>
				Thansk for contacting me. <br />
			</p>
		</div>
	);
}

export default Success;

//You will be redirected to my portfolio in {/*props.timer*/} seconds
