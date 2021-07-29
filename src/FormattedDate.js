function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
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

  let timestamp = props.timestamp;

  let day = timestamp.getDay();
  let today = timestamp.getDate();
  let year = timestamp.getFullYear();
  let month = timestamp.getMonth();
  let hour = timestamp.getHours();
  let min = timestamp.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }

  return (
    <div className="Date">
      Last update: {days[day]} {today} {months[month]} {year} {hour}:{min}
    </div>
  );
}

export default FormattedDate;
