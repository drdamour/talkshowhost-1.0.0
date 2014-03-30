totals = 47
var dofo = document.form;
var lw = 0
var ll = 0






function lotto()
{
var num1 = (Math.round(totals * Math.random()) + 1);
var num2 = (Math.round(totals * Math.random()) + 1);
var num3 = (Math.round(totals * Math.random()) + 1);
var num4 = (Math.round(totals * Math.random()) + 1);
var num5 = (Math.round(totals * Math.random()) + 1);
var num6 = (Math.round(totals * Math.random()) + 1);
var dofo = document.form

function equalchecker() {
if (num1 > totals) {
    num1= num1 - 1}
if (num2 > totals) {
    num2= num2 - 1}
if (num3 > totals) {
    num3= num3 - 1}
if (num4 > totals) {
    num4= num4 - 1}
if (num5 > totals) {
    num5= num5 - 1}
if (num6 > totals) {
    num6= num6 - 1}




if (num1 == num2) {
   num1 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
    }  
else if (num1 == num3) {
   num1 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
    }  
else if (num1 == num4) {
   num1 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
    }  
else if (num1 == num5) {
   num1 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
    }  
else if (num1 == num6) {
   num1 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
    }  
else {
   num1 = num1;
   }
if (num2 == num3) {
   num2 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else if (num2 == num4) {
   num2 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else if (num2 == num5) {
   num2 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else if (num2 == num6) {
   num2 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else {
 num2 = num2;
   }
if (num3 == num4) {
   num3 = (Math.round(totals * Math.random()) + 1);
   equalchecker() 
   }
else if (num3 == num5) {
   num3 = (Math.round(totals * Math.random()) + 1);
   equalchecker() 
   }
else if (num3 == num6) {
   num3 = (Math.round(totals * Math.random()) + 1);
   equalchecker() 
   }
else {
   num3 = num3;
   }
if (num4 == num5) {
   num4 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else if (num4 == num6) {
   num4 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else {
num4 = num4;
   }
if (num5 == num6){
   num5 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else {
   num5 = num5;
   } 

num6 = num6;
}


equalchecker()

function low1order(val1,val2,val3,val4,val5,val6) {
if ((val1 < val2) && (val1 < val3) && (val1 < val4) && (val1 < val5) && (val1 < val6)) {
   low1 = val1
   low2order(val2,val3,val4,val5,val6)
   }
else if ((val2 < val3) && (val2 < val4) && (val2 < val5) && (val2 < val6) && (val2 < val1)) {
   low1 = val2
   low2order(val1,val3,val4,val5,val6)
   }
else if ((val3 < val2) && (val3 < val4) && (val3 < val5) && (val3 < val6) && (val3 < val1)) {
   low1 = val3
   low2order(val1,val2,val4,val5,val6)
   }
else if ((val4 < val3) && (val4 < val2) && (val4 < val5) && (val4 < val6) && (val4 < val1)) {
   low1 = val4
   low2order(val1,val2,val3,val5,val6)
   }
else if ((val5 < val3) && (val5 < val2) && (val5 < val4) && (val5 < val6) && (val5 < val1)) {
   low1 = val5
   low2order(val1,val2,val3,val4,val6)
   }
else {
   low1 = val6
   low2order(val1,val2,val3,val4,val5)
   }
}

function low2order(val1,val2,val3,val4,val5) {
if ((val1 < val2) && (val1 < val3) && (val1 < val4) && (val1 < val5)) {
   low2 = val1
   low3order(val2,val3,val4,val5)
   }
else if ((val2 < val3) && (val2 < val4) && (val2 < val5) && (val2 < val1)) {
   low2 = val2
   low3order(val1,val3,val4,val5)
   }
else if ((val3 < val2) && (val3 < val4) && (val3 < val5) && (val3 < val1)) {
   low2 = val3
   low3order(val1,val2,val4,val5)
   }
else if ((val4 < val3) && (val4 < val2) && (val4 < val5) && (val4 < val1)) {
   low2 = val4
   low3order(val1,val2,val3,val5)
   }
else {
   low2 = val5
   low3order(val1,val2,val3,val4)
   }
}

function low3order(val1,val2,val3,val4) {
if ((val1 < val2) && (val1 < val3) && (val1 < val4)) {
   low3 = val1
   low4order(val2,val3,val4)
   }
else if ((val2 < val3) && (val2 < val4) && (val2 < val1)) {
   low3 = val2
   low4order(val1,val3,val4)
   }
else if ((val3 < val2) && (val3 < val4) && (val3 < val1)) {
   low3 = val3
   low4order(val1,val2,val4)
   }
else {
   low3 = val4
   low4order(val1,val2,val3)
   }
}


function low4order(val1,val2,val3) {
if ((val1 < val2) && (val1 < val3)) {
   low4 = val1
   low5order(val2,val3)
   }
else if ((val2 < val3) && (val2 < val1)) {
   low4 = val2
   low5order(val1,val3)
   }
else {
   low4 = val3
   low5order(val1,val2)
   }
}


function low5order(val1,val2) {
if ((val1 < val2)) {
   low5 = val1
   low6 = val2
   }
else {
   low5 = val2
   low6 = val1
   }
}

low1order(num1,num2,num3,num4,num5,num6)


dofo.text7.value = low1
dofo.text8.value = low2
dofo.text9.value = low3
dofo.text10.value = low4
dofo.text11.value = low5
dofo.text12.value = low6

if (dofo.text1.value == dofo.text7.value && dofo.text2.value == dofo.text8.value && dofo.text3.value == dofo.text9.value && dofo.text4.value == dofo.text10.value && dofo.text5.value == dofo.text11.value && dofo.text6.value == dofo.text12.value)
{
alert("You Won!")
lw = lw + Math.round((Math.round(totals))^((Math.round(totals))/7))
dofo.wins.value = lw
}
else
{

ll = ll + 1
dofo.loss.value = ll
alert("You Lose :(")
}
}


function easypick()
{
var num1 = (Math.round(totals * Math.random()) + 1);
var num2 = (Math.round(totals * Math.random()) + 1);
var num3 = (Math.round(totals * Math.random()) + 1);
var num4 = (Math.round(totals * Math.random()) + 1);
var num5 = (Math.round(totals * Math.random()) + 1);
var num6 = (Math.round(totals * Math.random()) + 1);
var dofo = document.form

function equalchecker() {
if (num1 > totals) {
    num1= num1 - 1}
if (num2 > totals) {
    num2= num2 - 1}
if (num3 > totals) {
    num3= num3 - 1}
if (num4 > totals) {
    num4= num4 - 1}
if (num5 > totals) {
    num5= num5 - 1}
if (num6 > totals) {
    num6= num6 - 1}




if (num1 == num2) {
   num1 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
    }  
else if (num1 == num3) {
   num1 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
    }  
else if (num1 == num4) {
   num1 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
    }  
else if (num1 == num5) {
   num1 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
    }  
else if (num1 == num6) {
   num1 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
    }  
else {
   num1 = num1;
   }
if (num2 == num3) {
   num2 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else if (num2 == num4) {
   num2 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else if (num2 == num5) {
   num2 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else if (num2 == num6) {
   num2 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else {
 num2 = num2;
   }
if (num3 == num4) {
   num3 = (Math.round(totals * Math.random()) + 1);
   equalchecker() 
   }
else if (num3 == num5) {
   num3 = (Math.round(totals * Math.random()) + 1);
   equalchecker() 
   }
else if (num3 == num6) {
   num3 = (Math.round(totals * Math.random()) + 1);
   equalchecker() 
   }
else {
   num3 = num3;
   }
if (num4 == num5) {
   num4 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else if (num4 == num6) {
   num4 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else {
num4 = num4;
   }
if (num5 == num6){
   num5 = (Math.round(totals * Math.random()) + 1);
   equalchecker()
   }
else {
   num5 = num5;
   } 

num6 = num6;
}


equalchecker()

function low1order(val1,val2,val3,val4,val5,val6) {
if ((val1 < val2) && (val1 < val3) && (val1 < val4) && (val1 < val5) && (val1 < val6)) {
   low1 = val1
   low2order(val2,val3,val4,val5,val6)
   }
else if ((val2 < val3) && (val2 < val4) && (val2 < val5) && (val2 < val6) && (val2 < val1)) {
   low1 = val2
   low2order(val1,val3,val4,val5,val6)
   }
else if ((val3 < val2) && (val3 < val4) && (val3 < val5) && (val3 < val6) && (val3 < val1)) {
   low1 = val3
   low2order(val1,val2,val4,val5,val6)
   }
else if ((val4 < val3) && (val4 < val2) && (val4 < val5) && (val4 < val6) && (val4 < val1)) {
   low1 = val4
   low2order(val1,val2,val3,val5,val6)
   }
else if ((val5 < val3) && (val5 < val2) && (val5 < val4) && (val5 < val6) && (val5 < val1)) {
   low1 = val5
   low2order(val1,val2,val3,val4,val6)
   }
else {
   low1 = val6
   low2order(val1,val2,val3,val4,val5)
   }
}

function low2order(val1,val2,val3,val4,val5) {
if ((val1 < val2) && (val1 < val3) && (val1 < val4) && (val1 < val5)) {
   low2 = val1
   low3order(val2,val3,val4,val5)
   }
else if ((val2 < val3) && (val2 < val4) && (val2 < val5) && (val2 < val1)) {
   low2 = val2
   low3order(val1,val3,val4,val5)
   }
else if ((val3 < val2) && (val3 < val4) && (val3 < val5) && (val3 < val1)) {
   low2 = val3
   low3order(val1,val2,val4,val5)
   }
else if ((val4 < val3) && (val4 < val2) && (val4 < val5) && (val4 < val1)) {
   low2 = val4
   low3order(val1,val2,val3,val5)
   }
else {
   low2 = val5
   low3order(val1,val2,val3,val4)
   }
}

function low3order(val1,val2,val3,val4) {
if ((val1 < val2) && (val1 < val3) && (val1 < val4)) {
   low3 = val1
   low4order(val2,val3,val4)
   }
else if ((val2 < val3) && (val2 < val4) && (val2 < val1)) {
   low3 = val2
   low4order(val1,val3,val4)
   }
else if ((val3 < val2) && (val3 < val4) && (val3 < val1)) {
   low3 = val3
   low4order(val1,val2,val4)
   }
else {
   low3 = val4
   low4order(val1,val2,val3)
   }
}


function low4order(val1,val2,val3) {
if ((val1 < val2) && (val1 < val3)) {
   low4 = val1
   low5order(val2,val3)
   }
else if ((val2 < val3) && (val2 < val1)) {
   low4 = val2
   low5order(val1,val3)
   }
else {
   low4 = val3
   low5order(val1,val2)
   }
}


function low5order(val1,val2) {
if ((val1 < val2)) {
   low5 = val1
   low6 = val2
   }
else {
   low5 = val2
   low6 = val1
   }
}

low1order(num1,num2,num3,num4,num5,num6)


dofo.text1.value = low1
dofo.text2.value = low2 
dofo.text3.value = low3
dofo.text4.value = low4
dofo.text5.value = low5
dofo.text6.value = low6
}

