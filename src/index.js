const readline = require('readline-sync');
const CadastroClienteController = require('./modulos/cadastro-cliente/controller');
const CadastroProdutoController = require('./modulos/cadastro-produto/controller');
const CadastroServicoController = require('./modulos/cadastro-servico/controller');

const menuInicial = [
    'Cadastro do cliente', 
    'Cadastro de produto', 
    'Cadastro de servicos',
    'Agendamento de clientes',
    'Caixa'
];

let menuSelecionado = readline.keyInSelect(menuInicial, 'selecione um tela:');
let controller;


switch(menuSelecionado) {
    case 0:
        controller = new CadastroClienteController();
        break;
    case 1:
        controller = new CadastroProdutoController();
        break;
    case 2:
        controller = new CadastroServicoController();
        break;
}

controller.menu();
