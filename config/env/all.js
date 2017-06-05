module.exports = {
	app: {
		title: 'Beets',
		authors: "SJ & Sej Kim",
		description: 'Spotify Recommendation Platform',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: 3000,
	sessionSecret: 'McGoogle',
	sessionCollection: 'sessions',
	assets: {},
	db: 'mongodb://localhost/beets',
	spotifyAuth: {
		clientID: 'f85c6f433fc24272b7879e045e1cc366',
		clientSecret: '463eed5dc7fe4011b25ce6e78677fe7e',
		callbackURL: '/auth/spotify/callback'
	}
};
