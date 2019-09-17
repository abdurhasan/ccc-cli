const colors = require('chalk');
const servicedoc = require('./assets/services-repo.json');
var Table = require('easy-table')


// export function to list coffee
module.exports = function() {
    const tb = new Table

    // list on separate lines
    servicedoc.forEach((vice) => {
        tb.cell('Description', colors.hex('#17a2b8').bold(vice.service_name))
        tb.cell('Clone', colors.hex('#373f52').bold(vice.clone))
        tb.cell('Developers', colors.grey(vice.developers))
        tb.newRow()                
    });

    console.log(
     '\n',tb.toString()
    )
};

