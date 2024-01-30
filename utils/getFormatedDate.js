/**
 ** ======================================================
 ** Function [getFormatedDate]
 ** ======================================================
 */
//Return a date as formated string
export const getFormatedDate = (date) => {
  //1) Day of the month
  let day = date.getDate();
  day = day < 9 ? "0" + day : day;

  //2) Month of the year
  let mon = date.getMonth() + 1;
  mon = mon < 9 ? "0" + mon : mon;

  //3) Year
  const year = date.getFullYear();

  //4) Return formated
  return `${day}-${mon}-${year}`;
};

export default getFormatedDate;
