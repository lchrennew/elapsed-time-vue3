import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import duration from 'dayjs/plugin/duration.js';
import { iso8601 } from './humanize.js';

dayjs.extend(utc)
dayjs(duration)

export default (startedAt, stoppedAt = dayjs.utc(), hr = false) => {
    if (startedAt) {
        return iso8601(dayjs.duration(dayjs.utc(stoppedAt).diff(dayjs.utc(startedAt))).toISOString(), hr)
    }
}
