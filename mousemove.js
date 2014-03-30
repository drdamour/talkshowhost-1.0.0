
	var newtop=0
	var newleft=0
	if (navigator.appName == "Netscape") {
		layerStyleRef="layer.";
		layerRef="document.layers";
		styleSwitch="";
		}
		else
		{
		layerStyleRef="layer.style.";
		layerRef="document.all";
		styleSwitch=".style";
		}

	function doMouseMove() {
  		layerName = 'iit'
		eval('var curElement='+layerRef+'["'+layerName+'"]')
		eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"')
		eval('curElement'+styleSwitch+'.visibility="visible"')
		eval('newleft=document.body.clientWidth-curElement'+styleSwitch+'.pixelWidth')
		eval('newtop=document.body.clientHeight-curElement'+styleSwitch+'.pixelHeight')
		eval('height=curElement'+styleSwitch+'.height')
		eval('width=curElement'+styleSwitch+'.width')
		width=parseInt(width)
		height=parseInt(height)
		if (event.clientX > (document.body.clientWidth - 5 - width))
		{
		newleft=document.body.clientWidth + document.body.scrollLeft - 5 - width
		}
		else
		{
		newleft=document.body.scrollLeft + 10 + event.clientX
		}
		eval('curElement'+styleSwitch+'.pixelLeft=newleft')

		if (event.clientY > (document.body.clientHeight - 5 - height))
		{
		newtop=document.body.clientHeight + document.body.scrollTop - 5 - height
		}
		else
		{
		newtop=document.body.scrollTop + 10 + event.clientY
		}
		eval('curElement'+styleSwitch+'.pixelTop=newtop')
}

	document.onmousemove = doMouseMove;

