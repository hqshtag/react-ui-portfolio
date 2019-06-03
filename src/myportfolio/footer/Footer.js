import React from 'react';

function Footer() {
	const footerStyle = {
		background: 'black',
		margin: '20px 10px 0px',

		color: 'white',
		fontSize: '26px',
		textAlign: 'center',
		padding: '1px 0px'
	};
	return (
		<footer className="footer" style={footerStyle}>
			<p className="cpright">
				{' '}
				<span style={{ color: getRandomColor() }}>&copy;</span> wajihTagourty #twenty<span style={{ color: getRandomColor() }}>ninteen</span>
			</p>
		</footer>
	);
}

export default Footer;

const getRandomColor = () => {
	return Colors[Math.floor(Math.random() * Colors.length)];
};

const Colors = [
	'#e34f26', //html
	'#4197d0', // css
	'#f7df1e', //js
	'#61DAFB', //react
	'#7952b3', //bootstrap
	'#8892BF', //php
	'#026e00', //node
	'#d9534f', //laravel
	'#4479a1' //mysql
];
