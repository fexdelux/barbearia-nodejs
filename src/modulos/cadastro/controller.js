const readline = require('readline-sync');

class CadastroController {

    constructor() {
        this.itensMenu = [
            'consultar',
            'Novo',
            'Alterar',
            'Deletar'
        ];
        this.titulo = '';
    }

    menu() {
        console.log('>>>>>>>>'+ this.titulo + '<<<<<<<');
        let itemSelecionado = readline.keyInSelect(this.itensMenu, 'O que gostaria de fazer:');
        
    }
}

module.exports = CadastroController ;