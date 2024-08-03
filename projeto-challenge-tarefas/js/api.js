const tarefas = document.querySelector('.lista_tarefas');

export async function pegarTarefasDaApi(){
   
    try{
        const resposta = await fetch('http://localhost:3000/tarefas'); //fetch -> busca
        const dadosConvertidos = await resposta.json();

        return dadosConvertidos;

        }catch(error){
            tarefas.innerHTML = `Erro ao carregar as tarefas! ${error}`;
    }
    
}

export async function postarTarefaNaApi(tituloDaTarefa, descricaoDaTarefa,prioridadeDaTarefa, dataDatarefa, checkboxSelecionados){
    const resposta = await fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo: tituloDaTarefa,
            descricao: descricaoDaTarefa,
            prioridade: prioridadeDaTarefa,
            data: dataDatarefa,
            responsavel: checkboxSelecionados
        })
    });
}

export async function deletarTarefaDaApi(id){
    await fetch(`http://localhost:3000/tarefas/${id}`,{
        method: 'DELETE'
    })
}