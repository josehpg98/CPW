function envioForm(){
	var nome = document.getElementById("txtNome").value;
	if(document.getElementById("sexM").checked == true){
		document.getElementById("retorno").innerHTML = 
	("Seja bem vindo "+nome);
	}

	else{
	document.getElementById("retorno").innerHTML = 
	("Seja bem vinda "+nome);
	}
}

function limpa() {
	window.location.reload();
}

