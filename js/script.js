// Definir variáveis universais
var valorTotal = [
	0, //0
	0,
	0,
	0,
	0, //0
	0,
	0,
	0,
	0, //0
	0,
	0,
	0,
	0, //0
	0,
	0,
	0,
];
var valorProduto = [
	0, //não existe
	12, //produto1
	12, //produto2
	7.99, //produto3
	19.99, //produto4
	9.99, //produto5
	7.99, //produto6
	7.99, //produto7
	14.99, //produto8
	3000, //produto9
	3000, //produto10
	3000, //produto11
	3000, //produto12
];
var qtd = [
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
];

// Trocar o nome pelo inserido no login
function trocarNome() {
	var nome = document.getElementById('nome');
	var usuario = document.getElementById('usuario').value;
	nome.innerHTML = usuario;
}

// Aumentar a quantidade de itens de um produto
function adicionarItem(item) {
	var quantidade = document.getElementById('quantidade' + item);
	var total = document.getElementById('total' + item);
	qtd[item] += 1;
	valorTotal[item] = valorProduto[item] * qtd[item];
	quantidade.innerHTML = qtd[item];
	total.innerHTML = valorTotal[item].toFixed(2);
	console.log(quantidade);
	valorCompra();
}

// Diminuir a quantidade de itens de um produto
function removerItem(item) {
	if (qtd[item] > 0) {
		qtd[item] -= 1;
		var quantidade = document.getElementById('quantidade' + item);
		var total = document.getElementById('total' + item);
		quantidade.innerHTML = qtd[item];
		valorTotal[item] = valorProduto[item] * qtd[item];
		total.innerHTML = valorTotal[item].toFixed(2);;
		valorCompra();
	}
}

// Remover o produto
function removerProduto(produto) {
	var pai = document.getElementById('carrinho');
	var filho = document.getElementById('produto' + produto);
	if (confirm('Confirmar exclusão?')) {
		valorTotal[produto] -= (valorProduto[produto] * qtd[produto]);
		qtd[produto] = 0;
		pai.removeChild(filho);
		valorCompra();
	}
}

// Calcular o valor total da compra
function valorCompra() {
	var valorTotalCompra = document.getElementById('valorTotalCompra');
	var valor = 0;;
	for (var i = 0; i < valorTotal.length; i++) {
		valor += valorTotal[i];
	}
	valorTotalCompra.innerHTML = valor.toFixed(2);;
	console.log(valorTotal.length);
}

// Finalizar a compra e zerar os valores
function finalizarCompra() {
	var nome = document.getElementById('nome').innerHTML;
	alert('Obrigada pela compra, ' + nome + '!');
	document.location.reload(true);
}