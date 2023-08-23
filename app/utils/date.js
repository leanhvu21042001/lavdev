// Original date string in "YYYY-MM-DD" format
export const changeDateFormat = (originalDateString) => {
  // Convert the original date string to a Date object
  const dateObject = new Date(originalDateString);

  // Define arrays for ordinal indicators and month names
  const ordinalIndicators = ["th", "st", "nd", "rd"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract day, month, and year components
  const day = dateObject.getDate();
  const monthIndex = dateObject.getMonth();
  const year = dateObject.getFullYear();

  // Get the correct ordinal indicator for the day
  const ordinal =
    ordinalIndicators[day % 10 > 0 && day % 10 < 4 ? day % 10 : 0];

  // Format the date in the desired format
  const formattedDate = `${day}${ordinal} ${monthNames[monthIndex]}, ${year}`;

  return formattedDate;
};
