function minhaFuncaoExterna(){
	//JS é case sensitive
	n1 = 2;//variavel não declarada a partir de 2015
	const n2 = 3;// Constante não pode ser redeclarada e nem reatribuida ou atualizada
	var expressao = "Mult"//utilizada até 2015, se precisar rodar o projeto em navegadores mais antigos deve por o "var"
	let r = n1 * n2;//deve ser decladara antes do usa e não pode ser redeclarada
	car = ["Fiat", "Volvo", "Ford", "GM", "Jeep"];
	console.log(car);
	console.log(car[2]);
	console.log(car.sort());
	alert("Externa\nA página esta carregada!\nResultado: " 
		+ expressao + " - " + r );
}