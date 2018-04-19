const api = 'https://reactnd-books-api.udacity.com';

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
	token = localStorage.token = Math.random()
		.toString(36)
		.substr(-8);

const headers = {
	Accept: 'application/json',
	Authorization: token
};

const shelfIdMapper = ['none', 'currentlyReading', 'wantToRead', 'read'];

export const get = (bookId) =>
	fetch(`${api}/books/${bookId}`, { headers })
		.then((res) => res.json())
		.then((data) => data.book);

export const getAll = () =>
	fetch(`${api}/books`, { headers })
		.then((res) => res.json())
		.then((data) => data.books);

export const update = (book, shelfId) =>
	fetch(`${api}/books/${book.id}`, {
		method: 'PUT',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ shelf: shelfIdMapper[shelfId] })
	}).then((res) => res.json());

export const search = (query) => {
	console.log(JSON.stringify({ query }));
	return fetch(`${api}/search`, {
		method: 'POST',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query })
	})
		.then((res) => res.json())
		.then((data) => data.books);
};
