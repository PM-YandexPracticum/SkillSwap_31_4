import { format, isToday, isYesterday, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDateLabel = (input: string | Date): string => {
	const date = typeof input === 'string' ? parseISO(input) : input;

	if (isToday(date)) return 'сегодня';
	if (isYesterday(date)) return 'вчера';

	return format(date, 'dd.MM.yyyy', { locale: ru });
};
