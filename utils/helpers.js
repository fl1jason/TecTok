const dayjs = require("dayjs");
module.exports = {
  format_date: (date) => {
    // dayjs.extend()

    // dayjs.updateLocale('en', {
    //   relativeTime: {
    //     dd: "%d days",
    //     M: "a month",
    //   }
    // })
    
    // return date.toLocaleDateString(); 
    return dayjs(date).format("DD/MM/YYYY HH:mm:ss")
  },
  };
