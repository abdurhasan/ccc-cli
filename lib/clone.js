const repositories = require('./assets/services-repo');
const path = require('path'); //path.resolve(__dirname)
const { execFile } = require('child_process');
const color = require('chalk');

module.exports = repo => {
    
    const serviceDoc = repositories.filter(datum => {
        return datum.id == repo
    })[0];

    if (!serviceDoc) console.log(color.red('Micro-service tidak ditemukan '));
    

    execFile('git', ['clone',serviceDoc.urlrepo], (error, stdout, stderr) => {
        if (error) {
            console.log(color.red(error))
        }
        console.log(color.green(serviceDoc.service_name), color.blue(' was successfully cloned !') );
    });

}

