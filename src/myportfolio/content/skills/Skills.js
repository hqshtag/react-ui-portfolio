import React from 'react';
import SkillCard from './SkillCard';
import skillSet from './skillsSet';

import './skill.css';

class Skills extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			skills: []
		};
	}

	componentDidMount() {
		this.setState({
			skills: skillSet
		});
	}

	render() {
		const skillCards = this.state.skills.map((elem, index) => {
			let key = 'SK' + index;
			return <SkillCard data={elem} key={key} />;
		});

		const primary = 'rgb(169, 19, 19)';
		const secondary = '#fee9eb';

		const cardStyle = {
			background: primary,
			paddingBottom: '50px',
			//height: '230px',
			margin: 'auto 10px'
		};
		const titleStyle = {
			color: 'white',
			textAlign: 'right',
			paddingTop: '20px',
			marginRight: '30px',
			marginLeft: '40px',
			paddingRight: '50px',
			paddingBottom: '0px',
			fontSize: '32px',
			fontWeight: '500'
		};

		const skillContainerStyle = {
			display: 'flex',
			flexWrap: 'wrap',
			width: '98%',
			//height: '100px',
			margin: '0px auto',
			background: secondary
		};
		return (
			<div className="skills card" style={cardStyle}>
				<h1 className="card-title" style={titleStyle}>
					My Skills
				</h1>
				<div className="skill-container" style={skillContainerStyle}>
					{shuffle(skillCards)}
				</div>
			</div>
		);
	}
}

//helper: shuffle the skills baby!!

function shuffle(array) {
	var m = array.length,
		t,
		i;

	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}

export default Skills;
