import React, { Fragment } from 'react';
import { Tween, Timeline, SplitLetters } from 'react-gsap';

import './animate.scss';

function Header(props) {
	const styleHeader = {
		display: 'flex',
		//marginTop: '32vh',
		width: '92%',
		justifyContent: 'flex-end',
		color: '#dadada',
		paddingRight: '90px',
		margin: '0px 10px 20px 10px'
	};
	const styleImg = {
		height: '100px',
		width: '100px',
		marginTop: '32px',
		marginRight: '20px',
		borderRadius: '50%',
		transition: 'transform 14s ease-in'
	};
	const styleTitles = {
		marginTop: '0.91em',
		fontFamily: 'Montserrat, serif'
	};
	const styleName = {
		fontFamily: 'Bree Serif, serif',
		marginRight: 0
	};
	const styleOccup = {
		position: 'relative',
		bottom: '5vh'
	};
	return (
		<div className="header" style={styleHeader} onMouseOver={props.handler}>
			<img id="myimg" src="assets/img/bananaboy.jpg" alt="bananaboy" style={styleImg} />
			<div className="titles" style={styleTitles}>
				<h1 className="myName" style={styleName}>
					<Tween from={{ x: '-500px' }} to={{ x: '80px' }} duration={0.7} ease="Elastic.easeOut" delay={1} />
					<Tween staggerTo={{ y: '55px' }} stagger={0.2} duration={0.1} ease="Back.easeOut" position="+=1" />
					<Tween staggerTo={{ x: '700px' }} stagger={0.2} duration={0.7} ease="Back.easeOut" position="+=1" />

					<Timeline
						wrapper={<div style={{ position: 'relative' }} />}
						target={
							<Fragment>
								<SplitLetters>
									<div id="name" style={{ fontSize: '40px', display: 'inline-block' }}>
										Wajih&nbsp;Tagourty
									</div>
								</SplitLetters>
							</Fragment>
						}
					>
						<Tween staggerFrom={{ opacity: 0 }} staggerTo={{ opacity: 1 }} stagger={0.1} position="+=1" />
					</Timeline>
				</h1>
				<h2 className="occup" style={styleOccup}>
					<Tween from={{ y: '-500px' }} to={{ y: '0px' }} duration={0.7} ease="Elastic.easeOut" delay={1} />

					<Timeline
						wrapper={<div style={{ position: 'relative' }} />}
						target={
							<Fragment>
								<SplitLetters>
									<div id="occup" style={{ fontSize: '30px', display: 'inline-block' }}>
										Developer.
									</div>
								</SplitLetters>
							</Fragment>
						}
					>
						{' '}
						<Tween staggerFrom={{ opacity: 0 }} staggerTo={{ opacity: 1 }} stagger={0.1} position="+=2" />
						<Tween staggerFrom={{ x: 0 }} staggerTo={{ x: -2 }} stagger={0.1} position="+=0.01" />
					</Timeline>
				</h2>
			</div>
		</div>
	);
}

export default Header;
