
var useven =new Date("Febuary 12, 2002");
var usix = new Date("April 24, 2001"); 
var ufive = new Date("April 6, 2001"); 
var ufour = new Date("October 25, 2000"); 
var uthree = new Date("October 19, 2000"); 
var utwo = new Date("Febuary 9, 1999"); 
var uone = new Date("November 10, 1998"); 



if (lastVisit == null) {

var nseven = "&nbsp;*7* " 
var nsix = "*6* "
var nfive =" *5* "
var nfour = " *4* "
var nthree =" *3* "
var ntwo = " *2* "
var none = " *1* "
starnote = "<BR>everything is new! (to you)"
}

else if (lastVisit < uone.getTime()) {

var nseven = "&nbsp;*7* "
var nsix = " *6* "
var nfive =" *5* "
var nfour = " *4* "
var nthree =" *3* "
var ntwo = " *2* "
var none = " *1*&nbsp"
starnote = "<BR>* denotes new since your last visit"
}

else if (lastVisit < utwo.getTime()) {

var nseven = "&nbsp;*7* "
var nsix = " *6* "
var nfive =" *5* "
var nfour = " *4* "
var nthree =" *3* "
var ntwo = " *2* "
var none = " 1&nbsp"
starnote = "<BR>* denotes new since your last visit"
}

else if (lastVisit < uthree.getTime()) {

var nseven = "&nbsp;*7* "
var nsix = " *6* "
var nfive =" *5* "
var nfour = " *4* "
var nthree =" *3* "
var ntwo = " 2 "
var none = " 1&nbsp"
starnote = "<BR>* denotes new since your last visit"
}

else if (lastVisit < ufour.getTime()) {

var nseven = "&nbsp;*7* "
var nsix = " *6* "
var nfive =" *5* "
var nfour = " *4* "
var nthree =" 3 "
var ntwo = " 2 "
var none = " 1&nbsp"
starnote = "<BR>* denotes new since your last visit"
}

else if (lastVisit < ufive.getTime()) {

var nseven = "&nbsp;*7* "
var nsix = " *6* "
var nfive =" *5* "
var nfour = " 4 "
var nthree =" 3 "
var ntwo = " 2 "
var none = " 1&nbsp"
starnote = "<BR>* denotes new since your last visit"
}

else if (lastVisit < usix.getTime()) {

var nseven = "&nbsp;*7* "
var nsix = " *6* "
var nfive =" 5 "
var nfour = " 4 "
var nthree =" 3 "
var ntwo = " 2 "
var none = " 1&nbsp"
starnote = "<BR>* denotes new since your last visit"
}

else if (lastVisit < useven.getTime()) {

var nseven = "&nbsp;*7* "
var nsix = " 6 "
var nfive =" 5 "
var nfour = " 4 "
var nthree =" 3 "
var ntwo = " 2 "
var none = " 1&nbsp"
starnote = "<BR>* denotes new since your last visit"
}


else {

var nseven = "&nbsp7 "
var nsix = " 6 "
var nfive =" 5 "
var nfour = " 4 "
var nthree =" 3 "
var ntwo = " 2 "
var none = " 1&nbsp"
var starnote = "<br>no updates since your last visit"
}



var newstuff = "<font size=-1>news archives: <A href='news7.html' target='news'>"+nseven+"</a>&nbsp&nbsp<A href='news6.html' target='news'>"+nsix+"</a>&nbsp&nbsp<A href='news5.html' target='news'>"+ nfive +"</a>&nbsp&nbsp<A href='news4.html' target='news'>"+nfour+"</a>&nbsp&nbsp<A href='news3.html' target='news'>"+nthree+"</a>&nbsp&nbsp<A href='news2.html' target='news'>"+ntwo+"</a>&nbsp&nbsp<A href='news1.html' target='news'>"+none+"</a>"+starnote+"</font>"