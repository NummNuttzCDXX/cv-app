// Utility function module

import {format, isToday} from 'date-fns';

export function formatDate(date) {
	const day = new Date(date).getDate();
	const newDate = new Date(date).toString();
	date = new Date(newDate.replace(day, day + 1));

	if (isToday(date)) {
		return 'Present';
	} else {
		return format(date, 'P');
	}
}
