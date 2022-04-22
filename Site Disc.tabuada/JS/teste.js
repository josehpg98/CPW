function olaMundo(){
	alert("Olá Mundo");
}
function bemvindo(){
	 var nome = document.getelementById("txtnome").value;
	 //alert("bem vindo(a) "+nome);
	 document.getelementById("resultado").innerHTML = "bem vindo(a) "+nome;
}