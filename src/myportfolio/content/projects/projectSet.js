const Titles = [ 'Sign up / in', 'Contact Form', 'project 404', 'project 404' ];

const Thumbnails = [
	'assets/img/thumbnails/signinup.png',
	'assets/img/thumbnails/contact.png',
	'https://sitechecker.pro/wp-content/uploads/2017/12/404.png',
	'https://sitechecker.pro/wp-content/uploads/2017/12/404.png'
];
const Links = [ 'https://codepen.io/hqshtag/full/zQjNba', 'https://codepen.io/hqshtag/full/zQjNba', '#', '#' ];
const Disc = [
	'Animated signin/signup form made with html/css/js',
	'This is my own simple contact form',
	'Looking forward to showcase your project.',
	'Under construction'
];

const projectSet = Titles.map((elem, index) => {
	return {
		title: elem,
		thumbnail: Thumbnails[index],
		link: Links[index],
		disc: Disc[index]
	};
});

export default projectSet;
