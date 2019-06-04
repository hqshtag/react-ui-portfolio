import React from 'react';

import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

import { push as Menu } from 'react-burger-menu';

const Home = () => {
	var styles = {
		bmBurgerButton: {
			position: 'fixed',
			width: '36px',
			height: '30px',
			left: '36px',
			top: '36px'
		},
		bmBurgerBars: {
			background: '#373a47'
		},
		bmBurgerBarsHover: {
			background: '#a90000'
		},
		bmCrossButton: {
			height: '24px',
			width: '24px'
		},
		bmCross: {
			background: '#bdc3c7'
		},
		bmMenuWrap: {
			position: 'fixed',
			height: '100%'
		},
		bmMenu: {
			background: '#575757',
			padding: '2.5em 1.5em 0',
			fontSize: '1.15em',
			borderLeft: '12px solid #373737',
			overflow: 'hidden'
		},
		bmMorphShape: {
			fill: '#373a47'
		},
		bmItemList: {
			color: '#b8b7ad',
			padding: '0.8em'
		},
		bmItem: {
			display: 'flex',
			textDecoration: 'none',
			background: '#373737',
			color: 'white',
			padding: '5px 10px',
			margin: '4px',
			fontSize: '24px'
		},
		bmOverlay: {
			background: 'rgba(0, 0, 0, 0.3)'
		}
	};

	var iconStyle = {
		marginRight: '24px',
		marginTop: '5px'
	};

	return (
		<div
			style={{
				background: 'rgb(2,0,36)',
				background:
					'linear-gradient(308deg, rgba(2,0,36,1) 0%, rgba(108,7,15,1) 0%, rgba(121,9,28,1) 12%, rgba(67,4,119,1) 69%, rgba(26,21,135,1) 100%)',
				overflow: 'hidden'
			}}
		>
			<div id="outer-container">
				<Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} styles={styles}>
					<a id="contact" className="menu-item" href="/contact">
						<i className="far fa-envelope" style={iconStyle} />Contact Me
					</a>
					<a
						id="linkdin"
						className="menu-item"
						href="https://www.linkedin.com/in/wajih-tagourty-865086184/"
						target="_blanc"
						rel="noopener noreferrer"
					>
						<i className="fab fa-linkedin" style={iconStyle} /> Linkedin
					</a>
					<a
						id="linkdin"
						className="menu-item"
						href="
https://www.freecodecamp.org/fcc8be5b3b9-7e52-4596-823b-afd488ce36f0"
						target="_blanc"
						rel="noopener noreferrer"
					>
						<i
							class="fab fa-free-code-camp"
							style={{
								...iconStyle,
								marginRight: '10px'
							}}
						/>{' '}
						FCodeCamp
					</a>
					<a id="contact" className="menu-item" href="assets/cv/mycv.pdf">
						<i
							className="far fa-file-alt"
							style={{
								...iconStyle,
								alignSelf: 'flex-end'
							}}
						/>{' '}
						Get My CV
					</a>
				</Menu>
				<main id="page-wrap">
					<Header />
					<Content />
					<Footer />{' '}
				</main>
			</div>
		</div>
	);
};

export default Home;
