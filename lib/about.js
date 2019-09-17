
const figlet = require('figlet');
const boxen = require('boxen');

const chalk = require('chalk');

module.exports = ()=>{
    return figlet.text('CCC', {
        font: 'Univers',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(
          boxen(chalk.hex('#43b0b7').bold(data)+
          `\nA Library to standarize projects
           \nin our boutique digital transformation consultant.
           \nWas made by philosophy #mulaiajadulu\n
          
          -https://codecoffeecreative.com
          `,
          { padding: 1, borderColor: 'green', borderStyle: 'round' }
          )
        )        
    })
}