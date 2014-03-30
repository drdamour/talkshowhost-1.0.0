a = 0
gw = 0
gl = 0

function guess() {



if (a==0) {
   max = prompt("What is your max number?","20")

if (max == null) {
      a=0
      document.first.firstgame.value = "Play Number Guessing Game Again"

alert('fine, Quit!')
fuck
}
else {
   tries = prompt("How many tries?","5")
}
if (tries == null) {
alert('Fine, quit!')
      a=0
      document.first.firstgame.value = "Play Number Guessing Game Again"

fuck
}
else {
   number = Math.random()
   number *= max;
   number = Math.round(number);
}
}

if (a==tries) {
      alert("Sorry! You have used all "+tries+" tries, i fuct her "+number+" times.");
      a=0
      gl = gl + 1
      document.first.loss.value = gl
      document.first.firstgame.value = "Play Number Guessing Game #" + (gl + gw + 1)

fuck
}

theguess = prompt("You have "+(tries-a)+" tries left to guess how many times i fuct your mom last night. (Hint: The most is "+max+" and the least is 0)","")

if ((theguess == number) && (a == 0)) {
         alert("Wow! You got it right first try, must have been watching all "+number+" times!  Double Score!");
      a=0
      gw = gw + 2
      document.first.wins.value = gw
      document.first.firstgame.value = "Play Number Guessing Game #" + (gl + gw + 1)
         ;
         }

else if (theguess == null) {
         alert("fine, Quit!");
      a=0
      document.first.firstgame.value = "Play Number Guessing Game Again"
                  }

else if (theguess == number) {

alert("Right! i fuct her "+number+" times, and it only took you "+a+" tries.");
      a=0
      document.first.firstgame.value = "Play Number Guessing Game Again"
      gw = gw + 1
      document.first.wins.value = gw
;
        }

else if (theguess < number) {
alert("i fuct her more than "+theguess+" times.")
a=a+1
guess()
         }
else if (theguess > number) {
alert("i could have not fuct her "+theguess+" times")
a=a+1
guess()
}
else{}
}

