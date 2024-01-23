import { redirect } from 'react-router-dom';
import { loggedIn } from '../firebaseConfig';

export async function loader() {
  const islogged = await loggedIn((user) => {
    if (user) {
      return true;
    }
    return false;
  });

  if (!islogged) {
    return redirect('/login');
  }
  return null;
}

/**
 * formatTime -> formats a date string and returns the time in hours and minutes
 * @param time -> date strings
 * @returns -> formated time in HH:MM [PM|AM]
 */

export const formatTime = (time: number) => {
  const date = new Date(time);
  const hours = date.getHours();
  const mins = date.getMinutes();
  return `${hours > 12 ? hours - 12 : hours}:${mins < 10 ? '0' + mins : mins} ${
    hours > 12 ? 'PM' : 'AM'
  }`;
};

export const getDifferenceInDates = (date1: Date, date2: Date) => {
  const diff = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

/**
 * dayDisplay ->  returns
 *                        the date, day or [today | yesterday] for messages sent
 *                        same day or a day before.
 * @param time > date time number
 * @returns > (datestring: string) => string | null
 */
export const dayDisplay = (time: number): string => {
  const valueObject = {
    0: 'today',
    1: 'yesterday',
    '00': 'Sunday',
    '01': 'Monday',
    '02': 'Tuesday',
    '03': 'Wednesday',
    '04': 'Thursday',
    '05': 'Friday',
    '06': 'Saturday',
  };
  const dateCreated = new Date(time);
  const newDate = new Date();
  const dateInfo = getDateStringOrNumber(newDate, dateCreated);

  switch (dateInfo) {
    case 0:
    case 1:
    case '00':
    case '01':
    case '02':
    case '03':
    case '04':
    case '05':
    case '06':
      return valueObject[dateInfo];
    default:
      return dateInfo as string;
  }
};

/**
 * getDateStringOrNumber -> gets the numric date difference or day represented
 *                          "00", "01"... where "00" means sunday or "Month date ,[year]"
 *                          in a single string.
 * @param datediff > the numeric value in difference between two dates
 * @param newDate > a date type instance of the currentdate
 * @param sentDate > a date instance of the sent date of the message
 * @returns > returns either 1 | 2 | "00" | "01" ... "06" | "[month] [date]" | "[month], [date], [year]"
 */
export const getDateStringOrNumber = (
  newDate: Date,
  sentDate: Date
): number | string => {
  const day = sentDate.getDay();
  const year = newDate.getFullYear();
  const sent_year = sentDate.getFullYear();
  const timediff = getDifferenceInDates(newDate, sentDate);
  const dateWithYear = sentDate.toLocaleDateString(undefined, {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
  const dateWithOutYear = sentDate.toLocaleDateString(undefined, {
    month: 'long',
    day: '2-digit',
  });

  return timediff < 2
    ? timediff
    : timediff <= 6
    ? `0${day}`
    : year === sent_year
    ? dateWithOutYear
    : dateWithYear;
};
