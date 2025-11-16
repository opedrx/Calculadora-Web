function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1); 
}

function calcular() {
    var expressao = document.getElementById('resultado').innerHTML;
    
    if (expressao) {
        try {
            var resultadoCalculado = eval(expressao.replace('X', '*'));
            document.getElementById('resultado').innerHTML = resultadoCalculado;
            var entradaHistorico = expressao + " = " + resultadoCalculado;
            adicionarAoHistorico(entradaHistorico);
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro"; 
            setTimeout(clean, 1500); 
        }
    } else {
        document.getElementById('resultado').innerHTML = "Nenhum cálculo";
    }
}

function adicionarAoHistorico(item) {
    var lista = document.getElementById('historico-lista');
    var novoItem = document.createElement('li');
    novoItem.innerHTML = item;
    
    if (lista.children.length >= 20) {
        lista.removeChild(lista.lastChild);
    }
    lista.prepend(novoItem); 
}
