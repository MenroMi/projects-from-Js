function timer(id, deadline) {
     // TIMER

    //  const deadline = "2022-08-30T23:58:59.000Z"; // data końcowa

     function getTimeRemainig(endtime) {
         // różnica między datą aktualną i datą końcową
         let t = Date.parse(endtime) - Date.now(),
               days, hours, minutes, seconds;
         
         if (t <= 0) {
 
             days = 0;
             hours = 0;
             minutes = 0;
             seconds = 0;
 
         } else {
             days = Math.floor(t / (1000 * 60 * 60 * 24)),
             // w nawiasach sprawdzamy ile mamy millisekund w dobie
             // 1 000 ms = 1 s
             // 60 000 ms = 1 m
             // 3 600 000 ms = 1 h
             // 86 400 000 ms = 1 day
     
             // dzieląc wybraną datę końcową na dobę w millisekundach
             // dostajemy ilość dni do zakończenia akcji
             // Math.floor usuwa liczby po przecinku za pomocą zaokrąglenia
     
                   hours = Math.floor((t / (1000 * 60 * 60) % 24)),
             // dzięki operacji matematycznej dostajemy ilość godzin do zakończenia
                   minutes = Math.floor((t / (1000 * 60) % 60)),
             // tutaj minuty
                   seconds = Math.floor((t / 1000) % 60);
             // tutaj sekundy
             // priorytet należy do dzielenia, później modulo
 
         }
 
         return {
             'total': t, // millisekundy ogółem
             // 
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds,
         };
     }
 
     // console.log(getTimeRemainig(deadline));
 
     function getZero(numb) {
         if (numb >= 0 && numb < 10) {
             return `0${numb}`;
         } else {
             return numb;
         }
     }
 
     function setClock(selector, endtime) {
         const timer = document.querySelector(selector),
               days = timer.querySelector("#days"),
               hours = timer.querySelector("#hours"),
               minutes = timer.querySelector("#minutes"),
               seconds = timer.querySelector("#seconds"),
               timeInterval = setInterval(updateClock, 1000);
     
         updateClock(); 
 
         function updateClock() {
 
             const t = getTimeRemainig(endtime);
 
             days.innerHTML = getZero(t.days);
             hours.innerHTML = getZero(t.hours);
             minutes.innerHTML = getZero(t.minutes);
             seconds.innerHTML = getZero(t.seconds);
 
             if (t.total <= 0) {
                 clearInterval(timeInterval);
             }
 
         }
         
     }
 
     setClock(id, deadline);
}

export default timer;