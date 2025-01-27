function Calculation() {
    let birthDate = document.getElementById('birthday').value;
        console.log(birthDate);

    let date = new Date();
        console.log(date);

    let base = Date.parse(date) - Date.parse(birthDate);
        console.log(base);

    let seconds = base / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let roundedDays = days.toFixed(0);

    let week = 0;
    let month = 0;
    let year = 0;
    let monthLength = 31;
    let monthNumber = 0;
    let leapYear = 0;
    while (roundedDays > 7) {
        while (roundedDays > 365) {
          if (leapYear < 4) {
            year++;
            leapYear++;
            roundedDays = roundedDays - 365;
            } else {
              roundedDays = roundedDays - 366;
              leapYear = 0;
            }
        }
        while (roundedDays > monthLength) {

            switch (monthNumber) {
                case 0:
                  monthName = "January";
                  monthLength = 31;
                  break;
                case 1:
                  monthName = "February";
                  monthLength = 28;
                  break;
                case 2:
                   monthName = "March";
                   monthLength = 31;
                  break;
                case 3:
                  monthName = "April";
                  monthLength = 30;
                  break;
                case 4:
                  monthName = "May";
                  monthLength = 31;
                  break;
                case 5:
                  monthName = "June";
                  monthLength = 30;
                  break;
                case 6:
                  monthName = "July";
                  monthLength = 31;
                  break;
                case 7:
                  monthName = "August";
                  monthLength = 31;
                  break;
                case 8:
                  monthName = "September";
                  monthLength = 30;
                  break;
                case 9:
                   monthName = "October";
                   monthLength = 31;
                  break;
                case 10:
                  monthName = "November";
                  monthLength = 30;
                  break;
                case 11:
                  monthName = "December";
                  monthLength = 31;
                  break;
              }
            console.log(monthName);
            month++;
            monthNumber++;
            roundedDays = roundedDays - monthLength;
        }
        while (roundedDays > 7) {
            week++;
            roundedDays = roundedDays - 7;
        }
    }

    document.getElementById('result').innerHTML = `You are ${roundedDays} days, ${week} weeks, ${month} months, ${year} years old.`;
}