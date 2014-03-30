rpsw = 0
rpsl = 0
rpsd=0
onoffc=0
document.rps.draw.value=rpsd
document.rps.wins.value=rpsw
document.rps.loss.value=rpsl

function rpsgame(choice) {
mychoice = Math.round((Math.random() * 3) + 1)

if (mychoice > 3) { 
   mychoice = mychoice -1}

if (choice == mychoice) {
   if (onoffc==0) {
      if (choice == 1) {
          alert('We Both Picked Rock! Draw')
          }
      else if (choice == 2) {
          alert('We Both Picked Paper! Draw')
          }
      else {
          alert('We Both Picked Scissors! Draw')
          }
      
      }
   rpsd = rpsd + 1
   }
else if ((choice==1) && (mychoice == 2)) {
     if (onoffc==0) {
        alert('You picked Rock, but i picked Paper, you lose')
        }
   rpsl = rpsl + 1
   }   
else if ((choice==1) && (mychoice == 3)) {
     if (onoffc==0) {
        alert('You picked Rock, and i picked Scissors, you win!')
        }
   rpsw = rpsw + 1
   }   
else if ((choice==2) && (mychoice == 3)) {
     if (onoffc==0) {
        alert('You picked Paper, but i picked Scissors, you lose')
        }
   rpsl = rpsl + 1
   }   
else if ((choice==2) && (mychoice == 1)) {
     if (onoffc==0) {
        alert('You picked Paper, and i picked Rock, you win!')
        }
   rpsw = rpsw + 1
   }   
else if ((choice==3) && (mychoice == 1)) {
     if (onoffc==0) {
        alert('You picked Scissors, but i picked Rock, you lose')
        }
   rpsl = rpsl + 1
   }   
else if ((choice==3) && (mychoice == 2)) {
     if (onoffc==0) {
        alert('You picked Scissors, and i picked Paper, you win!')
        }
   rpsw = rpsw + 1
   }   

document.rps.draw.value=rpsd
document.rps.wins.value=rpsw
document.rps.loss.value=rpsl
}
