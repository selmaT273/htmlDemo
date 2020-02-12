console.log('this is connected and working'); 


var hourNow = prompt('What time is it? 0-23');
var greeting;
if(hourNow > 18 && hourNow < 24){
    greeting = 'Go to bed';
} else if(hourNow >12 && hourNow < 18){
    greeting = 'Good day sir';
} else if(hourNow >= 0 && hourNow < 24){
    greeting = 'Go to work';
} else {
    greeting = 'wait, you didnt give me right response. who knows what time it its?'
}
document.write(greeting);