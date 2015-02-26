var rg = new RedOrGreen("square");

rg.makeGreen();
//myElements background color should be green now
 if(document.getElementById("square").style.backgroundColor ==="green"){
	window.alert("square is "+ document.getElementById("square").style.backgroundColor);
}
 else {
	window.alert("failure, the square didn't change color");
}

rg.makeRed();
//myElements background should be red now
 if(document.getElementById("square").style.backgroundColor ==="red"){
  window.alert("square is "+ document.getElementById("square").style.backgroundColor);
}
 else {
	window.alert("failure, the square didn't change color");
 }
