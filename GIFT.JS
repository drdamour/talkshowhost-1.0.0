todaysTime = new Date();
todaysYear = todaysTime.getFullYear();
todaysMonth = todaysTime.getMonth();
todaysDate = todaysTime.getDate();<!--This is for Birthday year

if (todaysMonth + 1 > 5) {
  damourYear = todaysYear+1 };
else if (todaysMonth + 1 < 5) {
  damourYear = todaysYear };
else if (todaysDate < 12) {
  damourYear = todaysYear };
else {
  damourYear = todaysYear+1 };<!--This is for christmas year

if (todaysMonth + 1 > 12) {
  chirsYear = todaysYear+1 };
else if (todaysMonth + 1 < 12) {
  chrisYear = todaysYear };
else if (todaysDate < 25) {
  chrisYear = todaysYear };
else {
  chrisYear = todaysYear+1 };

if (todaysMonth < 5) {
  birthYear = damourYear;
  birthMonth = 4;
  birthDate = 12 };
else if ((todaysMonth == 5) && (todaysDate > 12)) {
  birthMonth = 11;
  birthYear = chrisYear;
  birthDate = 25 };
else if (todaysMonth == 5) {
  birthYear = damourYear;
  birthMonth = 4;
  birthDate = 12 };
else if ((todaysMonth == 12) && (todaysDate > 25)) {
  birthYear = damourYear;
  birthMonth = 4;
  birthDate = 12 };
else {
  birthMonth = 11;
  birthYear = chrisYear;
  birthDate = 25 }; <!-- Adjusts for Leap Year Info

if ((birthYear / 4) == (Math.round(birthYear / 4))) {
   countLeap = 29 };
else {
   countLeap = 28 };<!-- Calculate the days in the month

if (birthMonth == 2) {
   countMonth = countLeap};
else {
     if (birthMonth == 4) {
        countMonth = 30};
else { 
       if (birthMonth == 6) {
           countMonth = 30};
else {
       if (birthMonth == 9) {
              countMonth = 30};
else {
       if (birthMonth == 11) {
              countMonth = 30};
else {
              countMonth = 31}
              };
    };
};

};<!-- Doing the subtactions

if (birthDate > todaysDate) {
   diffDate = birthDate - todaysDate;
   calcMonth = 0};
else {
   diffDate = birthDate + countMonth - todaysDate;
   calcMonth = -1};

if (birthMonth < todaysMonth) {
    calcMonth = calcMonth +12};

diffMonth = birthMonth - todaysMonth + calcMonth;<!-- Making sure it all adds up correctly

if (diffDate == countMonth) {
   diffDate = 0;
   diffMonth = diffMonth + 1};<!-- Figuring out the weeks

diffWeek = Math.floor(diffDate / 7);
finalDate = (diffDate - (diffWeek * 7));<!-- Building the strings

if (diffMonth == 1) {
 first = " Month " };
else {
 first = " Months " };

if (diffWeek == 1) {
 second = " Week " };
else {
 second = " Weeks " };

if (finalDate == 1) {
 third = " day"};
else {
 third = " days" };

if (birthMonth == 11) {
  finalwords = " left to find me a Christmas Present!</font></center>" };
else {
  finalwords = " to buy a gift for my birthday!</center>" }; <!-- Writing the values
