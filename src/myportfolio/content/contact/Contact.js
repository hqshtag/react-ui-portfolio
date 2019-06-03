import React from 'react';
import ContactForm from './Form';
import Success from './Success';
import Error from './Error';

import { push as Menu } from 'react-burger-menu';

//import './contact.css';

//very obvious; vo
const API = 'http://localhost/contact-form-api/log-messages-api.php';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			message: '',
			placeholder: '',
			response: {}
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message
		};

		fetch(API, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((response) => {
				var contentType = response.headers.get('content-type');
				if (contentType && contentType.includes('application/json')) {
					return response.json();
				}
				throw new TypeError("Oops, we haven't got JSON!");
			})
			.then((data) => {
				this.setState((prevState) => {
					return {
						...prevState,
						response: { ...data }
					};
				});
			});
	};

	handleChange = (event) => {
		let { name, value } = event.target;
		let newState = fieldControl(name, value);
		this.setState((prevState) => {
			return {
				...prevState,
				...newState
			};
		});
	};

	/**/
	render() {
		//            if you are rendering one of the result component make them full screen ()
		const whichStyle = this.state.response.hasOwnProperty('success') ? null : { alignItems: 'center' };

		const contactStyle = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			//width: '80%',
			fontFamily: 'Ranga, cursive',
			...whichStyle
		};

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
				background: '#303B5B',
				padding: '2.5em 1.5em 0',
				fontSize: '1.15em',
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
			marginRight: '22px',
			marginTop: '5px'
		};

		return (
			<div id="outer-container">
				<Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} styles={styles}>
					<a id="home" className="menu-item" href="/">
						<i className="fas fa-portrait" style={iconStyle} />Portfolio
					</a>
					<a id="cv" className="menu-item" href="assets/cv/mycv.pdf">
						<i className="far fa-file-alt" style={iconStyle} /> Get My CV
					</a>
				</Menu>
				<main id="page-wrap">
					<div className="contact" style={contactStyle}>
						{/**/ this.state.response.hasOwnProperty('success') ? this.state.response.success ? (
							<Success name={this.state.name} email={this.state.email} />
						) : (
							<Error name={this.state.name} />
						) : (
							<ContactForm
								handleChange={this.handleChange}
								handleSubmit={this.handleSubmit}
								data={this.state}
								capName={capName}
							/>
						) /**/}
					</div>
				</main>
			</div>
		);
	}
}

//fieldcontrol
let capName = {};
const fieldControl = (name, value) => {
	if (name === 'name') {
		if (value !== '') {
			capName = { textTransform: 'capitalize' };
		} else {
			capName = { textTransform: 'none' };
		}
	}

	return {
		[name]: value
	};
};
