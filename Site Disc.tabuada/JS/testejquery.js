$(document).ready(function(){
	$("#mapa").hide();
	$("#btn").click(function(){
		$("#mapa").toggle(1000);
	});
});
function calc(){
	var v1 = document.getElementById("valin").value;
	var v2 = document.getElementById("valfn").value;
	var r = "";
	for(var a = v1;a<=v2;a++){
		r +="<table> <caption> tabuada </caption>";
		for(var i=1;i<=10;i++ ){
			r += ("<tr> "+"<td>"+(a)+" x "+(i)+"</td><td>"+(a*i)+"</td> </tr>");
		 }
		r+="</table>";
	  }
	  document.getElementById("Resultado").innerHTML = (r);
	}