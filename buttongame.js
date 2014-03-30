       bw = 0
	function start()
	{if(document.all)
	{
	FloatObj=eval(document.all.floatLyr.style);
	width=document.body.clientWidth;
	height=document.body.clientHeight;
	}
	else if(document.layers)
	{
	FloatObj=eval(document.floatLyr);
	width=innerWidth;
	height=innerHeight;
	}
	}
	function go_diff()
	{
	var msg=new Array(5)
	msg[0]="Ha Ha Ha Ha!";
	msg[1]="Hey! I'm here.";
	msg[2]="Oooh! That was close.";
	msg[3]="C'mon Try again!";
	msg[4]="Ooops! Too slow.";
	msg[5]="I'm quick!";
	msg[6]="Fine! I won't move";
	var num1=parseInt(Math.random()*400);
	var num2=parseInt(Math.random()*300);
	var num3=parseInt(Math.random()*7);
	FloatObj.left=num1;
	FloatObj.top=num2;
	document.kya_yaar.haha.value=msg[num3];
	}
	function give()
	{
	alert("Leave that keyboard alone!");
	}
	function yeah()
	{
	alert("You did it! Well done.");
        bw = 100
	}