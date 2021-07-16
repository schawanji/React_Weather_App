import { useState } from "react";

export default function Dates() {
  let timestamp = new Date();
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let year = timestamp.getFullYear();
  let day = timestamp.getDay();
  let date = timestamp.getDate();
  let hour = timestamp.getHours();
  let min = timestamp.getMinutes();

  return (
    <div className="weather-summary-text">
      Last Update: {date} {days[day]} {year} {hour}:{min}
    </div>
  );
}
