const  readline = require( 'readline-sync' ) ; 
const chalk = require('chalk');

const array = []
let item = ''

console.log((`\n\nLista de Propriedades do CSS, adicione alguns itens na lista:\nPara ver a lista, digite "ver lista"\nPara sair digite sair`))

while( item.toLowerCase() != 'sair'){
    
    item = readline.question(chalk.yellow(`Digite as propriedades do ${chalk.cyan("CSS")}:`))
    if( item.toLowerCase() != 'sair' && item.toLowerCase() != 'ver lista' ){

        array.push(item.toLowerCase())
    }
    else if( item.toLowerCase() === 'ver lista'){
        console.log(`\n\n ${chalk.blue("Lista de propriedades CSS Ordenada de A-Z:")} \n\n` + chalk.green(array.sort().join('\n')))
    }
    else{
        console.log(`\n\n ${chalk.blue("Lista de propriedades CSS Ordenada de A-Z:")} \n\n` + chalk.green(array.sort().join('\n')))
    }
}
