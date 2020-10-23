var intervaloBaner = setInterval(show, 5000);
var ver = true;
var acai = document.querySelectorAll('.acai')
var grego = document.querySelectorAll('.grego')

function show() {
    if (ver) {
        acai.forEach(e => e.setAttribute('class', 'acai nao-ver'))
        grego.forEach(e => e.setAttribute('class', 'grego ver'))
        ver = false;
        return
    }else{
        acai.forEach(e => e.setAttribute('class', 'acai ver'))
        grego.forEach(e => e.setAttribute('class', 'grego nao-ver'))
        ver = true
    }
} 
