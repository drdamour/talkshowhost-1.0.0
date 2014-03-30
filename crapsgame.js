crapsturn=0

cw=0
cl=0

function crapsbutton() {
buttonmessage = Math.random()
if ((buttonmessage < .2) && (buttonmessage > 0)) {document.craps.roll.value =  " Keep it going"}
if ((buttonmessage < .4) && (buttonmessage > .2)) {document.craps.roll.value = "Don't Stop yet"}
if ((buttonmessage < .6) && (buttonmessage > .4)) {document.craps.roll.value = " You can win! "}
if ((buttonmessage < .8) && (buttonmessage > .6)) {document.craps.roll.value = " Quiters Suck "}
if ((buttonmessage < 1) && (buttonmessage > .8)) {document.craps.roll.value =  "Don't give up "}
}





function rolldice(){
crapsturn = crapsturn + 1
die1 = Math.round((Math.random() * 6) + 1)
die2 = Math.round((Math.random() * 6) + 1)

if (die1 > 6) {
   die1 = die1 -1
   }
if (die2 > 6) {
   die2 = die2 -1
   }

document.craps.dice1.src="images/die" + die1 +".gif"
document.craps.dice2.src ="images/die" + die2 +".gif"
document.craps.totaldice.value = (die2 + die1)

if (crapsturn == 1) {
document.craps.neededtotal.value = die2 + die1
needcraps = Math.round(die2 + die1)
}

if ((crapsturn == 1) && ((die1 + die2) == 7)) {
  alert('Lucky Number 7! Winner every Time!')
  cw=cw+1
  crapsturn = 0
  }
else if ((crapsturn == 1) && ((die1 + die2) == 11)) {
  alert('Eleventh Heaven! Winner!')
  cw=cw+1
  crapsturn = 0
  }
else if ((crapsturn == 1) && ((die1 + die2) == 2)) {
  alert('LOSER!')
  cl=cl+1
  crapsturn = 0
  }
else if ((crapsturn == 1) && ((die1 + die2) == 3)) {
  alert('Unlucky Break, try again')
  cl=cl+1
  crapsturn = 0
  }
else if ((crapsturn == 1) && ((die1 + die2) == 12)) {
  alert('What are the odds? Please sir/mam, try again')
  cl=cl+1
  crapsturn = 0
  }
else if ((crapsturn > 1) && ((die1 + die2) == needcraps)) {
  alert('Winner')
  cw=cw+1
  crapsturn = 0
  }
else if ((crapsturn > 1) && ((die1 + die2) == 7)) {
  alert('I am sorry, you have lost')
  crapsturn = 0
  cl=cl+1
  }
else if ((crapsturn > 1) && ((die1 + die2) == 11)) {
  alert('You have lost')
  crapsturn = 0
  cl=cl+1
  }

document.craps.wins.value = cw
document.craps.loss.value = cl
crapsbutton()
}


