const model = {
	app: {
		currentPage: "main",
		searchQuery: "",
		loggedIn: true,
		currentUser: users[id],
		isDarkMode: false,
		currentSortMode: "date",
	},
	inputs: {
		registerUser: {
			name: "",
			password: "",
			email: "",
			phone: "",
			imgURL: "",
		},
		login: {
			email: "",
			password: "",
		},
		search: {
			query: "",
		},
		registerActivity: {
			name: "",
			rating: 0,
			difficulty: 0,
			description: "",
			duration: 0,
			dateAdded: "",
			imgURL: "",
			category: "",
		},
	},
	data: {
		activities: [
			{
				id: 0,
				name: "sykling",
				rating: 3,
				difficulty: 2,
				description: "gøy",
				duration: 15,
				dateAdded: "01-10-2025",
				imgURL: "",
				category: "ute",
				comments: [
					{
						user: "bjarne",
						rating: 2,
						text: "ikke gøy",
					},
				],
			},
			{
				id: 1,
				name: "bading",
				rating: 5,
				difficulty: 1,
				description: "vått",
				duration: 30,
				dateAdded: "04-09-2025",
				imgURL: "",
				category: "sommer",
				comments: [
					{
						user: "bjarne",
						rating: 5,
						text: "veldig gøy",
					},
				],
			},
		],
		users: [
			{
				id: 0,
				username: "bjarne",
				password: "",
				userLevel: "admin",
				email: "bjarne@post.no",
				phone: "99988777",
				imgURL: "",
			},
		],
	},
};
