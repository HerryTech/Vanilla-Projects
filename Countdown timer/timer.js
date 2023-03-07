const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway = document.querySelector(".giveaway")
const items = document.querySelectorAll(".deadline h4")
const deadlineFormat = document.querySelector(".deadline")
const luckyCandidate = document.querySelector(".lucky")


let todayYear = new Date().getFullYear();
let todayMonth = new Date().getMonth();
let todayDate = new Date().getDate();

const futureDate = new Date(todayYear, todayMonth, todayDate + 10, 23, 59, 0);
const futureYear = futureDate.getFullYear();
const futureMonth = months[futureDate.getMonth()];
const futureDay = futureDate.getDate();
const futureWeek = weekdays[futureDate.getDay()];
const futureHour = futureDate.getHours();
const futureMin = futureDate.getMinutes();

giveaway.textContent = `Giveaway Ends on ${futureWeek}, ${futureDay} ${futureMonth} ${futureYear} ${futureHour}:${futureMin}pm`

function giveawayRemainingTime(){
    const todayTime = new Date().getTime();
    const futureTime = futureDate.getTime();
    let t = futureTime - todayTime;
    
    //calculation
    //1s = 1000ms
    //1m = 60s
    //1h = 60m
    //1d = 24h

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin =  60 * 1000;

    const daysLeft = Math.floor(t / oneDay);
    const hoursLeft = Math.floor(t % oneDay / oneHour);
    const minsLeft = Math.floor (t % oneHour / oneMin);
    const secsLeft = Math.floor (t  % oneMin / 1000)

    luckyCandidate.textContent = `Lucky you!!! You have ${daysLeft} days before the end of the giveaway`


    const values = [daysLeft, hoursLeft, minsLeft, secsLeft]

    items.forEach(function(item, index){
        item.textContent = values[index]
    })

    let countDown = setInterval(giveawayRemainingTime, 1000)

    if(t < 0){
        clearInterval(countDown)
        deadlineFormat.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired!</h4>`
    }

}  

giveawayRemainingTime()
