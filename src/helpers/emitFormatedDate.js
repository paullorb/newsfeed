import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export const emitFormatedDate = (dateString) => {
  let date = new Date(dateString);
  return dayjs(date).fromNow();
};
