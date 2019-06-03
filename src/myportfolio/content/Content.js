import React from 'react';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';

function Content() {
	return (
		<div className="content">
			<About />
			<Skills />
			<Projects />
		</div>
	);
}

export default Content;
