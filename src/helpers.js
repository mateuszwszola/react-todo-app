import uuid from 'uuid';

export function getRandomId() {
	return uuid.v4();
}
