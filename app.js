'use strict';

console.log('Here\'s a hidden message');

var today = new Date();
var formatDate = today.toDateString();
var selectElementOne = document.getElementById('date');
selectElementOne.innerHTML = 'Date: '+formatDate;
var dayOfWeek = today.getDay();
var formatTime = today.getHours();
var formatMinutes = today.getMinutes();

var selectElementTwo = document.getElementById('time');
if (formatMinutes<10){
    if (formatTime <=12)
        selectElementTwo.innerHTML = 'Time Loaded: '+formatTime%12+':'+'0'+formatMinutes+'am';
    if (formatTime >=13)
        selectElementTwo.innerHTML = 'Time Loaded: '+formatTime%12+':'+'0'+formatMinutes+'pm';
}
else {
    if (formatTime <=12)
        selectElementTwo.innerHTML = 'Time Loaded: '+formatTime%12+':'+formatMinutes+'am';
    if (formatTime >=13)
        selectElementTwo.innerHTML = 'Time Loaded: '+formatTime%12+':'+formatMinutes+'pm';
}


document.getElementById('words').innerHTML = 'current activity on an average day:';

if(dayOfWeek==1||dayOfWeek==2)
    mondayTuesday();
else if (dayOfWeek==4||dayOfWeek==5)
    thursdayFriday();
else if (dayOfWeek==3)
    wednesdays();
else if(dayOfWeek == 6)
    saturdays();
else if(dayOfWeek == 7)
    sundays(); 

function mondayTuesday(){
    if(formatTime>=2&&formatTime<=7)
        document.getElementById('homework').innerHTML = 'sleeping';
    else if(formatTime>=8&&formatTime<=15)
        document.getElementById('homework').innerHTML = 'in zoom class';
    else if(formatTime>=16&&formatTime<=18)
        document.getElementById('homework').innerHTML = 'at soccer practice';
    else if(formatTime==20)
        document.getElementById('homework').innerHTML = 'eating dinner';
    else if(formatTime==19||formatTime >20||formatTime==1)
        document.getElementById('homework').innerHTML = '\"doing homework\"';
}
function thursdayFriday(){
    if(formatTime>=2&&formatTime<=7)
        document.getElementById('homework').innerHTML = 'sleeping';
    else if(formatTime>=8&&formatTime<=15)
        document.getElementById('homework').innerHTML = 'at the school for classes';
    else if(formatTime>=16&&formatTime<=18)
        document.getElementById('homework').innerHTML = 'at soccer practice';
    else if(formatTime>=19||formatTime==1)
        document.getElementById('homework').innerHTML = '\"doing homework\"';
}
function saturdays(){
    if (formatTime>=4&&formatTime<=12)
        document.getElementById('homework').innerHTML = 'sleeping';
    else if (formatTime==13)
        document.getElementById('homework').innerHTML = 'eating food';
    else if (formatTime>=14 && formatTime<=16)
        document.getElementById('homework').innerHTML = 'playing in a soccer game';
    else if (formatTime>=17 && formatTime<=19)
        document.getElementById('homework').innerHTML = 'watching a movie';
    else if (formatTime==20)
        document.getElementById('homework').innerHTML = 'eating dinner';
    else if (formatTime==21||formatTime==22)
        document.getElementById('homework').innerHTML = 'watching youtube';
    else if (formatTime>=23&&formatTime<=3)
        document.getElementById('homework').innerHTML = 'wasting time';
}
function sundays(){
    if (formatTime>=4&&formatTime<=12)
        document.getElementById('homework').innerHTML = 'sleeping';
    else if (formatTime==13)
        document.getElementById('homework').innerHTML = 'eating food';
    else if (formatTime>=14 && formatTime<=16)
        document.getElementById('homework').innerHTML = 'reffing a soccer game';
    else if (formatTime>=17 && formatTime<=19)
        document.getElementById('homework').innerHTML = 'watching a movie';
    else if (formatTime==20)
        document.getElementById('homework').innerHTML = 'eating dinner';
    else if (formatTime==21||formatTime==22)
        document.getElementById('homework').innerHTML = 'watching youtube';
    else if (formatTime>=23&&formatTime<=3)
        document.getElementById('homework').innerHTML = 'wasting time';
}
function wednesdays(){
    if (formatTime >=1&&formatTime<=7)
        document.getElementById('homework').innerHTML = 'sleeping';
    else if (formatTime>=8&&formatTime<=13)
        document.getElementById('homework').innerHTML = 'in zoom class';
    else if (formatTime>=14 && formatTime<=15)
        document.getElementById('homework').innerHTML = 'taking a nap';
    else if(formatTime>=16&&formatTime<=18)
        document.getElementById('homework').innerHTML = 'at soccer practice';
    else if(formatTime>=19||formatTime==1)
        document.getElementById('homework').innerHTML = '\"doing homework\"';
}