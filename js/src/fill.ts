const author: string = "Acan Xie";

// Auto Filling

// year, month, monthName, date, day, dayName, hour, minute, second
const init_date = (): void => {
  const date_array_1: string[] = [
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
  const date_array_2: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate: Date = new Date();

  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth();
  const monthName: string = date_array_1[month];
  const date: number = currentDate.getDate();
  const day: number = currentDate.getDay();
  const dayName: string = date_array_2[day];
  const hour: number = currentDate.getHours();
  const minute: number = currentDate.getMinutes();
  const second: number = currentDate.getSeconds();

  const updateElements = (className: string, value: string | number): void => {
    const elements: Element[] = Array.from(
      document.getElementsByClassName(className)
    );
    elements.forEach((item) => {
      (item as HTMLElement).innerText = value.toString();
    });
  };

  updateElements("current_year", year);
  updateElements("current_month", month);
  updateElements("current_monthName", monthName);
  updateElements("current_date", date);
  updateElements("current_day", day);
  updateElements("current_dayName", dayName);
  updateElements("current_hour", hour);
  updateElements("current_minute", minute);
  updateElements("current_second", second);
};

// author
const init_author = (): void => {
  const elements: Element[] = Array.from(
    document.getElementsByClassName("author")
  );
  elements.forEach((item) => {
    (item as HTMLElement).innerText = author;
  });
};

init_date();
init_author();
