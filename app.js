function makechoice(){
let answer = prompt("Do you want a cut?");
for (let index = 1; index < 3; index++){
   if(answer !== 'yes'){
       answer = prompt ('Cmon, you know you need one. Try again, there is a better answer');
   } else {
    alert('Oh hell ya!');
   index = 3;
   }
}
}

let usernumber = prompt ('Please enter a number from 1-10. If you guess correct, you win a free cut!')
for (x = 0; x < usernumber; x++) {
    document.write('&#9986;')
}