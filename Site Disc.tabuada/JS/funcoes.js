function calculoimc(){
	var nome = document.getElementById("txtnome").value;
	var peso = document.getElementById("txtpeso").value;
	var altura = document.getElementById("txtalt").value;
	
	var calculoimc = peso/(altura*altura);
	//alert(nome+" , seu  imc é: "+imc.tofixed("2"));
	//document.getElementById("resultado").innerHTML = (nome+" , seu  imc é: "+imc.toFixed(2));
	if(calculoimc<18.5){
		document.getElementById("resultado").innerHTML = ( nome+ "você está magro com esse indice "+calculoimc);
	}
	else if(calculoimc>=18.5 && calculoimc<24.9){
		alert("você está normal com esse indice "+calculoimc);
	}
	else if(calculoimc>=25 && calculoimc<29.9){
		alert("você está com sobre peso com esse indice "+calculoimc);
	}
	else if(calculoimc>=30 && calculoimc<39.9){
		alert("você obeso com esse indice "+calculoimc);
	}
	else if(calculoimc>40){
		alert("você com obesidade grave com esse indice "+calculoimc);
	}
	
}
function tabuada(){
	var valor = document.getElementById("txtval").value;
	var aux = "tabuada"+valor;
	for(var i=1; i<=10;i++){
		 aux = aux +"<br/>"+(i+" x "+ valor+" = "+(i*valor));
		 
	}
	document.getElementById("resultado").innerHTML = (aux);
}
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
function calcfat(){
	var f = document.getElementById("fat").value;
	var aux = 1;
		for(var i = f;i>0;i--){
			aux = aux * i;
		}
		document.getElementById("Resultado").innerHTML = (aux);
}