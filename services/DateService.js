export const getDaysInMonth = (year, month, dayToStart) => {
   const date = new Date(year, month, dayToStart);

   let days = [];

   while (date.getMonth() === month) {
      days.push({
         fecha: new Date(date),
         dia: date.getDay()
      });
      date.setDate(date.getDate() + 1);
   };

   return days;
};

export const getJustADay = (year, month, dayToStart, dayToSearch) => {
   const fullDays = getDaysInMonth(year, month, dayToStart);
   const justOneDays = [];

   fullDays.forEach(d => {
      if (dayToSearch === d.dia) {
         justOneDays.push(d);
      }
   })

   return justOneDays;
};