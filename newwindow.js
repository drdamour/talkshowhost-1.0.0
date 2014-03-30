

function mw(URL,tar,ww,wh,cen,aww,awh,scroll) {
 if (cen == 1) {
     aww= (((screen.width)/2)-((ww)/2))
     awh= (((screen.height)/2)-((wh)/2))
     }

     eval("page" + tar + " = window.open(URL, '" + tar + "', 'toolbar=0,scrollbars="+scroll+",location=0,statusbar=0,menubar=0,resizable=0,width="+ww+",height="+wh+",left="+aww+",top="+awh+"');")
}