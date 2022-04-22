function olaMundo(){
	var valor = document.getElementById("valor").value;
	var desc = valor-(valor*0.20);
	document.getElementById("resultado").innerHTML = desc.toFixed(2);
}
