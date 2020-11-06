// ------------->DOM<-------------------
let teksInput = document.getElementById('teksInput');
let button = document.getElementById('button');
let teksHasil = document.getElementById('teksHasil');



let inputTeks = "";
let regex = new RegExp('^[A-Z]');
let test = regex.test(inputTeks);

function cekKata (inputTeks) {
    if (test) {
        return 'Huruf Depan di kalimat ini mengandung huruf besar'
    } else {
        return 'Huruf Depan di kalimat ini tidak mengandung huruf besar'
    }
};
console.log(cekKata());