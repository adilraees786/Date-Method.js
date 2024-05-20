

/** Write a program that displays current date and time in
your browser.*/

let date=new Date();
console.log(date);
/**Write a program that alerts the current month in words.
For example December. */

let mon = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let month= date.getMonth();
console.log("Current month:", mon[month]);

/** Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun.*/

var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 var today=date.getDay();
 console.log("Today is",days[today].slice(0,3));


 /**Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. */


function funday(){
    let day=date.getDay()+1;
    if(days[today]=='saturday' || days[today] == 'sunday'){
        console.log("Today is Fun day");
    }
    
}
funday();


/**Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”. */


function lastdays(){
    var datee=date.getDate();
    console.log(`Today is `,datee );
    if(datee<=15){
        console.log("First fifteen days of the month");

    }
    else{
        console.log("Last days of the month");
    }
}

lastdays();


/**Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object. */

let now=new Date();
console.log( "Current Date:"+now);
var inpt= new Date(`1 jan 1970`)
console.log(inpt);

let milliseconds= now - inpt;
console.log(" Elaped milliseconds since january 1, 1970: "+milliseconds);
 let min= milliseconds/ (1000*60);
 console.log(" Elaped minutes since january 1, 1970:" +min);

/** Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”.*/

let hour=now.getHours();
if(hour < 12){
    alert("it's AM")
}
else{
    alert("It's PM")
}



/** Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015*/

let current=new Date();

let passed= new Date('18 june 2015')
let afterday= current - passed;
let dayss= afterday/ (1000*60*60*24);
console.log( Math.round(dayss)+" of days passsed since 1st Ramadan ,2015");



/**Write a program to ask the user about his age. Calculate
and show his birth year in your browser. */

var age =prompt("Enter Your Age:");
