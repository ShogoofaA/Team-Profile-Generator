const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'Successful file creation!'
            });
        });
    });
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err) {
                console.log(err)
                return;
            }
            resolve({
                ok: true,
                message: 'CSS copied!'

            });
        });
    });
}

module.exports = {writeFile, copyFile};