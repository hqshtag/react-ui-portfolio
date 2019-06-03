import React from 'react';
class SkillCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.data.title,
			icon: props.data.icon,
			color: props.data.color
		};
	}
	render() {
		//this what makes React Awesome
		const reactStyle = {
			background: '#1a2d4c',
			color: this.state.color
		};

		let cardStyle = {
			display: 'flex',
			alignItems: 'center',
			borderRadius: '4px',
			border: `2px solid ${this.state.color}`,
			height: '30px',
			padding: '0px 8px',
			background: 'white',
			margin: '10px 10px 10px 10px',

			fontSize: '18px'
		};
		if (this.state.name === 'React') {
			cardStyle = {
				...cardStyle,
				...reactStyle
			};
		}
		const iconStyle = {
			color: this.state.color,
			fontSize: '22px',
			paddingRight: '6px'
		};
		const nameStyle = {};

		return (
			<div className="skill-card" style={cardStyle}>
				<i style={iconStyle} className={this.state.icon} />
				<p className="skill-name" style={nameStyle}>
					{this.state.name}
				</p>
			</div>
		);
	}
}

export default SkillCard;
