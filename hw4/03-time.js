const pluralize = (word, quantity) => {
  if (quantity === 1) {
    return word;
  } else {
    return word + "s";
  }
}

const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  date1 = (new Date(date1)).getTime();
  date2 = (new Date(date2)).getTime();

  if (Number.isNaN(date1) || Number.isNaN(date2)) {
    return "Error: Invalid input provided.";
  }

  let diffMillis = Math.abs(date1 - date2);

  // I'm afraid leap years are above my pay grade
  let years = Math.floor(diffMillis/31556952000);
  let months = Math.floor((diffMillis - years*31556952000)/2629800000);

  // Build message string
  let message = "Time elapsed: ";
  if (years !== 0) {
    message += years.toString() + pluralize(" year", years) + ", ";
  }
  if (months !== 0) {
    message += months.toString() + pluralize(" month", months);
  }

  return message;
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, 'May 1, 1995'));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, '1975-8-11'));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, 'birthdate'));
// Error: Invalid input provided.
