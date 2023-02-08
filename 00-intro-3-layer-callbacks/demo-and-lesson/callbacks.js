// Simple callback
console.log('--------------- Simple callback --------------')




console.log('----------------- Async callback -----------------')

// Async callbacks
function logFileData(path) {
    console.log('Start reading file');

}

// logFileData('path');

function getDataFromfile(path, callback) {
    
}

function openFile(path, callback) {
    setTimeout(() => {
        if (typeof(path) == 'string') {
            callback(false, {})
        } else {
            callback('Invalid path', undefined)
        }
    }, 2000);
}

function readFile(path, callback) {
    setTimeout(() => {
        if (path) {
            callback(false, { data: 'data' })
        } else {
            callback('Invalid path', undefined)
        }
    }, 1000);
}