const FileExtension = (str) => str.slice
(str.lastIndexOf('.'));

function getFileExtension(str) {
    let cut = str.slice(str.lastIndexOf('.'));
    return cut;
}

console.log(FileExtension('index.html'));
console.log(getFileExtension('index.html'));