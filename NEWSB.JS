function navigation(base){

if (base==1) {
more = base +1
document.write("<center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='news"+more+"b.html'>+-+></a></center>")

}
else {
less = base - 1
more = base + 1
document.write("<center><a href='news"+less+"b.html'><+-+</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='news"+more+"b.html'>+-+></a></center>")
}



}