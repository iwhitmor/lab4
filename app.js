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