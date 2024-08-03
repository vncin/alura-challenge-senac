import { criarTarefas } from './listaDeTarefas.js';
import { criarPrioridades, pegarDadosDoFormulario, limparFormulario } from './formulario.js';
import { pegarTarefasDaApi } from './api.js';

criarPrioridades();
criarTarefas();
//pegarTarefasDaApi();

//controlar click nos botões

document.querySelector('#formulario_tarefas').addEventListener('submit', pegarDadosDoFormulario);
document.querySelector('#botao-limpar').addEventListener('click', limparFormulario);

;