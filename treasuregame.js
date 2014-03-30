tw=0
tl=0
function treasurestart() {
   place = Math.round((Math.random() * 30) + 1)
   if (place > 30) { 
       place = place - 1
       }
   }


function checktreasure(a) {
  if (a == place) {
     message = "YAY YOU FOUND THE TREASURE! YOU WIN 25 Times!"
     tw = tw + 25
     }
   else if (a==1) {
       message = "not here"
       tl = tl + 1
       }
   else if (a==2) {
       message = "You ran into other treasure hunters... Go somewhere else!"
       tl = tl + 1
       }
   else if (a==3) {
       message = "no, try again"
       tl = tl + 1
       }
   else if (a==4) {
       message = "nope"
       tl = tl + 1
       }
   else if (a==5) {
       message = "no...gotta be around here somewhere"
       tl = tl + 1
       }
   else if (a==6) {
       message = "no...not here"
       tl = tl + 1
       }
   else if (a==7) {
       message = "no....where is it?"
       tl = tl + 1
       }
   else if (a==8) {
       message = "You can sence treasure is near"
       tl = tl + 1
       }
   else if (a==9) {
       message = "You go into a cave and Grizzly bears chase you out!"
       tl = tl + 1
       }
   else if (a==10) {
       message = "Sheesh..not here"
       tl = tl + 1
       }
   else if (a==11) {
       message = "you stumbled over someone elses dig site...GO AWAY!!"
       tl = tl + 1
       }
   else if (a==12) {
       message = "YOU FOUND???? fools gold"
       tl = tl + 1
       }
   else if (a==13) {
       message = "keep looking"
       tl = tl + 1
       }
   else if (a==14) {
       message = "you fell in a pile of mud....nothing there"
       tl = tl + 1
       }
   else if (a==15) {
       message = "You get chased out of a hole by a skunk...nothing in there"
       tl = tl + 1
       }
   else if (a==16) {
       message = "not here"
       tl = tl + 1
       }
   else if (a==17) {
       message = "You come across a roaring river...try somewhere else"
       tl = tl + 1
       }
   else if (a==18) {
       message = "You came to a dead end"
       tl = tl + 1
       }
   else if (a==19) {
       message = "Not here"
       tl = tl + 1
       }
   else if (a==20) {
       message = "can't go up there..too steep"
       tl = tl + 1
       }
   else if (a==21) {
       message = "Nope.....try again"
       tl = tl + 1
       }
   else if (a==22) {
       message = "You come across a old rope bridge....you just make it without falling"
       tl = tl + 1
       }
   else if (a==23) {
       message = "Treasure has got to be somewhere around here!"
       tl = tl + 1
       }
   else if (a==24) {
       message = "You come across a snake pit!! RUN!!!!"
       tl = tl + 1
       }
   else if (a==25) {
       message = "You go into a pich black cave....bats chase you out"
       tl = tl + 1
       }
   else if (a==26) {
       message = "Try again"
       tl = tl + 1
       }
   else if (a==27) {
       message = "keep looking"
       tl = tl + 1
       }
   else if (a==28) {
       message = "you see something in the sand...it...it..is a piece of trash previous treasure hunters left"
       tl = tl + 1
       }
   else if (a==29) {
       message = "you will find it soon"
       tl = tl + 1
       }
   else {
       message = "Why the would it be here in the corner?"
       tl = tl + 1
       }
   
alert(message)
document.treasure.wins.value = tw
document.treasure.loss.value = tl

}
