const shelves = ['none', 'currentlyReading', 'wantToRead', 'read'];

export function GetShelfIdFromName(shelfName) {
	return shelves.indexOf(shelfName);
}

export function GetShelfNameFromId(shelfId) {
	return shelves[shelfId];
}

export const Shelves = {
	readingShelf: {
		id: 1,
		name: 'currentlyReading',
		displayName: 'Reading'
	},
	wantToReadShelf: {
		id: 2,
		name: 'wantToRead',
		displayName: 'To Read'
	},
	readShelf: {
		id: 3,
		name: 'read',
		displayName: 'Read'
	}
};
