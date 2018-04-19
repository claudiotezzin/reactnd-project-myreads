const shelves = ['none', 'currentlyReading', 'wantToRead', 'read'];

export function GetShelfIdFromName(shelfName) {
	return shelves.indexOf(shelfName);
}
