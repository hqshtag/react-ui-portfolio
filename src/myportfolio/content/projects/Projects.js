import React from 'react';
import projectSet from './projectSet';
import ProjectCard from './ProjectCard';

import './style.scss';

//import './style.css';

//import { TweenLite } from 'gsap/all';

class Projects extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			//open: false,
			projects: [],
			index: 0
		};
	}

	componentDidMount() {
		this.setState((prevState) => {
			return {
				...prevState,
				projects: projectSet
			};
		});
	}

	clickHandlerUp = () => {
		this.setState((prevState) => {
			let nextIndex = prevState.index + 1;

			if (nextIndex >= prevState.projects.length) {
				return {
					...prevState,
					index: 0
				};
			}
			return {
				...prevState,
				index: nextIndex
			};
		});
	};
	clickHandlerDown = () => {
		this.setState((prevState) => {
			let prevIndex = prevState.index - 1;
			if (prevIndex < 0) {
				return {
					...prevState,
					index: prevState.projects.length - 1
				};
			}
			return {
				...prevState,
				index: prevIndex
			};
		});
	};

	render() {
		const projectCards = this.state.projects.map((elem, index) => {
			let key = 'PR' + index;

			return <ProjectCard data={elem} key={key} id={key} />;
		});

		//styles
		const styleCard = {
			background: '#290741 ',
			paddingBottom: '10px',
			height: '350px',
			margin: 'auto 10px'
		};
		const titleStyle = {
			color: 'white',
			//textAlign: 'right',
			paddingTop: '20px',
			marginRight: '10px',
			marginLeft: '40px',
			paddingRight: '50px',
			paddingBottom: '0px',
			fontSize: '32px',
			fontWeight: '500'
		};

		return (
			<div className="projects" style={styleCard}>
				<h1 className="card-title" style={titleStyle}>
					My Projects
				</h1>
				<button className="nav-btn prev" onClick={this.clickHandlerDown}>
					<i className="fas fa-arrow-left" />
				</button>
				<button className="nav-btn next" onClick={this.clickHandlerUp}>
					<i className="fas fa-arrow-right" />
				</button>
				<div className={`project-slider active-slide-${this.state.index}`}>
					<div
						className="project-slider-wrapper"
						style={{
							transform: `translateX(-${this.state.index * 52}%)`
						}}
					>
						{/* <h1 style={{ color: 'red' }}>{this.state.index}</h1>
						<h1 style={{ color: 'red' }}>{`translateX(-${this.state.index *
							(100 / projectCards.length)} %)`}</h1> */}

						{projectCards}
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
