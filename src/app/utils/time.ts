import TimeAgo from 'javascript-time-ago'

// English.
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')

export const getTimeAgo = (date: Date | undefined) => {
    if (!date) {
        return timeAgo.format(new Date());
    }
    return timeAgo.format(date.getTime(), 'round');
}