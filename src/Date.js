function Date(props) { console.log(props);
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

  let date = props.date;
  let day = date.getDay();
  let today = date.getDate();
  let year = date.getFullYear();
  let month = date.getMonth();
  let hour = date.getHours();
  let min = date.getMinutes();
  console.log(date);
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
export default Date;
