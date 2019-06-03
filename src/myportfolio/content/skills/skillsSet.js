/**
 * defining both names and icons ( font awesome )
 * for skill cards;
 * 
 * 
 * 
 */

const Names = [
	'Html',
	'Css',
	'JavaScript',
	'React',
	'Bootstrap',
	//'gasp',
	'Php',
	'Node js',
	'Laravel',
	//'wordpress',
	'MySQL'
];
const Icons = [
	'fab fa-html5',
	'fab fa-css3-alt',
	'fab fa-node-js',
	'fab fa-react',
	'fab fa-bootstrap',
	//gasp,
	//bulma
	'fab fa-php',
	'fab fa-node',
	'fab fa-laravel',
	//worldpress
	'fa fa-database'
];

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

const skillSet = Names.map((elem, index) => {
	return {
		title: elem,
		icon: Icons[index],
		color: Colors[index]
	};
});

export default skillSet;
