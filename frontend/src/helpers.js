export function formatDateTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

export function formatDate(date) {
  return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
}

export const getTripDate = (trip) => {
  let trip_date = "";

  if (!trip.trip_date_start) {
    return trip_date;
  }
  trip_date = formatDate(new Date(trip.trip_date_start))
  if (trip.trip_date_end) {
    trip_date += ' - ';
    trip_date += formatDate(new Date(trip.trip_date_end))
  }
  return trip_date
}