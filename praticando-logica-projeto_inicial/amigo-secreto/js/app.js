let amigos = [];

function adicionar (){
    let lista = document.getElementById('lista-amigos');
    let nome = document.getElementById('nome-amigo');
    if(nome.value == ''){
        alert('Informe o nome do amigo!');
        return;
    }
    if(amigos.includes(nome.value)){
        alert('Nome já adicionado!');
        return;
    }
    amigos.push(nome.value);
    if (lista.textContent == ''){
        lista.textContent = nome.value;
    }else{
        lista.textContent = lista.textContent + ', ' + nome.value;
    }

    nome.value = '';
}

function sortear(){
    if (amigos.length < 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralha(amigos);
    let lista_sorteio = document.getElementById('lista-sorteio');
    for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length-1){
            lista_sorteio.innerHTML = lista_sorteio.innerHTML  + amigos[i] + '-->' + amigos[0] + '<br>';
        }else{
            lista_sorteio.innerHTML = lista_sorteio.innerHTML  + amigos[i] + '-->' + amigos[i+1] + '<br>';
        }
        
    }
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}