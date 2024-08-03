function sortear(){
    let qtd = parseInt(document.getElementById('quantidade').value);
    let inicial = parseInt(document.getElementById('de').value);
    let final = parseInt(document.getElementById('ate').value);

    let intervalo = final - inicial + 1;
    if (qtd > intervalo) {
        alert('Quantidade inválida para o intervalo digitado!');
        // esse return serve para interromper a function sortear() e não executar o loop abaixo
        return;
    }
        let sorteados = [];
        let numero;
        for(let i = 0; i < qtd; i++){
            numero = obterNumeroAleatorio(inicial, final);
            while(sorteados.includes(numero)){
                numero = obterNumeroAleatorio(inicial, final);
            }
            sorteados.push(numero);
        }
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
        alterarStatusBotao();
}
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let btn = document.getElementById('btn-reiniciar');
    if(btn.classList.contains('container__botao-desabilitado')){
        btn.classList.remove('container__botao-desabilitado');
        btn.classList.add('container__botao');
    }else{
        btn.classList.remove('container__botao');
        btn.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}