import { PRIORIDADES } from './constantes.js';
import { criarTarefas } from './listaDeTarefas.js';
import { postarTarefaNaApi } from './api.js';

export function criarPrioridades(){
        const prioridadeSelect = document.querySelector('#prioridade');

        PRIORIDADES.forEach(prioridade => {
            const optionElemento = document.createElement('option');
            optionElemento.value = prioridade;
            optionElemento.textContent = prioridade;

            prioridadeSelect.appendChild(optionElemento);
        })
}

export function pegarDadosDoFormulario(e){
    e.preventDefault();
    const tituloDaTarefa = document.querySelector('#titulo').value;
    const prioridadeDaTarefa = document.querySelector('#prioridade').value;
    const dataTarefa = formatarData(document.querySelector('#data').value);
    const descricaoDaTarefa = document.querySelector('#descricao').value;

    const checkboxes = document.querySelectorAll('[data-responsavel]');
    const checkboxSelecionados = [];

   checkboxes.forEach(checkbox =>{
        if(checkbox.checked){
            const  labelCheckBox = document.querySelector(`label[for=${checkbox.id}`).textContent;
            checkboxSelecionados.push(labelCheckBox);
        }
   })
//verificação de marcação de checkbox
   let checkCheckbox = Array.from(checkboxes).some(checkbox => checkbox.checked);
   if (!checkCheckbox){
        alert('Atribua pelo menos um responsável!');
        return;
   }

   postarTarefaNaApi(tituloDaTarefa, descricaoDaTarefa,prioridadeDaTarefa, dataTarefa, checkboxSelecionados);
   

   criarTarefas();
   limparFormulario();
}

function formatarData(data){
    const [ano, mes, dia] = data.split('-');

    return `${dia}/${mes}/${ano}`;
}

export function limparFormulario(){
    const tituloDaTarefa = document.querySelector('#titulo');
    const prioridadeDaTarefa = document.querySelector('#prioridade');
    const dataTarefa = document.querySelector('#data');
    const descricaoDaTarefa = document.querySelector('#descricao');

    tituloDaTarefa.value = '';
    prioridadeDaTarefa.value = 'Alta';
    descricaoDaTarefa.value = '';
    dataTarefa.value = '';

    const checkResponsaveis = document.querySelectorAll('[data-responsavel]')
 
    checkResponsaveis.forEach(checkbox => {
        checkbox.checked = false;
    })
}