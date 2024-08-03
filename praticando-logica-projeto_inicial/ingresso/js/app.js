function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista'){
        comprarPista(qtd);
    } else if (tipo.value == 'inferior'){
        comprarInferior(qtd);
    }else{
        comprarSuperior(qtd);
    }
}
function comprarPista(qtd){
    let qtdDispPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtdDispPista.textContent >= qtd){
        alert('Quantidade indisponível para o tipo Pista');
    }else{
        qtdDispPista = qtdDispPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdDispPista;
        
    }
}
function comprarInferior(qtd){
    let qtdInf = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtdInf.textContent >= qtd){
        alert('Quantidade indisponível para o tipo Cadeira Inferior');
    }else{
        qtdInf = qtdInf - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInf;
        
    }
}
function comprarSuperior(qtd){
    let qtdSup = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtdSup.textContent >= qtd){
        alert('Quantidade indisponível para o tipo Cadeira Inferior');
    }else{
        qtdSup = qtdSup - qtd;
        document.getElementById('qtd-superior').textContent = qtdSup;
        
    }
}