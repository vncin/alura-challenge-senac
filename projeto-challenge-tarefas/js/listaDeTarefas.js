import { deletarTarefaDaApi, pegarTarefasDaApi } from './api.js';

const tarefas = document.querySelector('.lista_tarefas');

export async function criarTarefas(){

        const dadosApi = await pegarTarefasDaApi();

        ordernarListaDeTarefasPorDatas(dadosApi);
        ordernarListaDeTarefasPorPrioridade(dadosApi);

        //tarefas.innerHTML = '';

        dadosApi.forEach((tarefa) => {
            if(tarefa.responsavel == ""){
                throw new Error('Tarefa sem responsável!');
            }

            tarefas.innerHTML += `  
                                <li class="tarefas" >
                                    <div class="tarefas__superior">
                                        <div class="tarefas__etiquetas">
                                        <div class="tarefas__etiquetas__item_prioridade">${tarefa.prioridade}</div>
                                        <div class="tarefas__etiquetas__item">${tarefa.data}</div>
                                        ${tarefa.responsavel.map(resp =>`<div class="tarefas__etiquetas__item">${resp}</div>`).join('')}
                                        </div>
                                        <div class="tarefas__etiquetas__excluir">
                                            <button type="submit" class="btn-excluir" data-id="${tarefa.id}">
                                                <span class="material-symbols-outlined btn-delete"> delete
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="tarefas__descricao">
                                        <h2 class="tarefas__titulo-desc">${tarefa.titulo}</h2>
                                        <p class="tarefas__desc">${tarefa.descricao}</p>
                                    </div>
                            </li>
                            `;

                //Gepeto meu amigo
                tarefas.querySelectorAll('.btn-excluir').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const id = event.currentTarget.getAttribute('data-id');
                        deletarTarefa(id);
                    });
                });
                //Fim
            alterarCorDaEtiquetaPrioridade();
        })
}

async function deletarTarefa(id){
    await deletarTarefaDaApi(id);
    criarTarefas();
}
export function alterarCorDaEtiquetaPrioridade() {
    const prioridades = document.querySelectorAll('.tarefas__etiquetas__item_prioridade');

    prioridades.forEach(prioridade => {
        if(prioridade.textContent === 'Baixa'){
            prioridade.classList.add('baixa');
        }else if(prioridade.textContent === 'Média'){
            prioridade.classList.add('media');
        }else{
            prioridade.classList.add('alta');
        }
    })
  }
export function ordernarListaDeTarefasPorPrioridade(tarefas){
    const prioridadeMapeamento ={
      Alta: 1,
      Média: 2,
      Baixa: 3
    }
  
    tarefas.sort((a, b) =>{
        return prioridadeMapeamento[a.prioridade] - prioridadeMapeamento[b.prioridade];
    })
  }
  
export function ordernarListaDeTarefasPorDatas(tarefas){
    tarefas.sort((a,b) => {
        return converterData(a.data) - converterData(b.data);
    })
}

function converterData(data){
    const [dia, mes, ano] = data.split('/').map(Number);

    return new Date(ano, mes - 1, dia);
}