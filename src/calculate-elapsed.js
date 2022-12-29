import dayjs from 'dayjs';
import { iso8601 } from './humanize.js';


export default (startedAt, stoppedAt = new Date(), hr = false) => {
    if (startedAt) {
        return iso8601(dayjs.duration(dayjs(stoppedAt).diff(dayjs(startedAt))).toISOString(), hr)
    }
}
