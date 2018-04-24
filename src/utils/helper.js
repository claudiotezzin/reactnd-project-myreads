const shelves = ['none', 'currentlyReading', 'wantToRead', 'read'];

export function GetShelfIdFromName(shelfName) {
	let index = shelves.indexOf(shelfName);
	if (index < 0) {
		index = 0;
	}
	return index;
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
