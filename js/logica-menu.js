var menu_visivel = false;

document.querySelector('#menu').addEventListener('click', () => {
    if (menu_visivel) {
        document.querySelector('nav').className = "nav-nao-ver";
        menu_visivel = false;
        return;
    } else {
        document.querySelector('nav').className = "nav-ver";
        menu_visivel = true;
    }
})

// =========================== navegação ===================

let link = document.querySelectorAll('.nav_a')
let yoggi = document.querySelector("#yoggi")
let produto = document.querySelector("#produto")
let onde_tem = document.querySelector("#onde-tem")
let falar_com = document.querySelector("#falar_com")


function posicao_scroll_ativa() {
    if (yoggi.offsetTop - 95 <= window.scrollY && window.scrollY <= yoggi.offsetTop + 100) {
        add_class(document.querySelectorAll('.nav_a')[0])
    }
    if (produto.offsetTop - 95 <= window.scrollY && window.scrollY <= produto.offsetTop + 100) {
        add_class(document.querySelectorAll('.nav_a')[1])
    }
    if (onde_tem.offsetTop - 95 <= window.scrollY && window.scrollY <= onde_tem.offsetTop + 100) {
        add_class(document.querySelectorAll('.nav_a')[2])
    }
    if (falar_com.offsetTop - 95 <= window.scrollY && window.scrollY <= falar_com.offsetTop + 700) {
        add_class(document.querySelectorAll('.nav_a')[3])
    }
}

function inicio() {
    if (window.scrollY >= yoggi.offsetTop && window.scrollY < produto.offsetTop - 200) {
        add_class(document.querySelectorAll('.nav_a')[0])
    }
    if (window.scrollY > produto.offsetTop - 200 && window.scrollY < onde_tem.offsetTop - 200) {
        add_class(document.querySelectorAll('.nav_a')[1])
    }
    if (window.scrollY > onde_tem.offsetTop - 200 && window.scrollY < falar_com.offsetTop - 200) {
        add_class(document.querySelectorAll('.nav_a')[2])
    }
    if (window.scrollY > falar_com.offsetTop - 200) {
        add_class(document.querySelectorAll('.nav_a')[3])
    }

}

window.addEventListener('scroll', posicao_scroll_ativa)
window.addEventListener('load', inicio)

link.forEach(a => {

    a.addEventListener('click', function () {

        if (this.id == 'franquias') return;

        var a = relacionar_class_do_botao_com_div(this.classList[1]);

        var cal = (100 / (window.scrollY)) * (a.offsetTop - 85); // cal para fixa posição do scroll

        if (cal.toFixed() <= 101 && cal.toFixed() >= 99) return;
        if (a.id == 'yoggi' && cal.toFixed() <= 190 && cal.toFixed() >= 70) return;

        const up_down = (a.offsetTop - 85) > window.scrollY ? 10 : -10; // o sroll deve descer ou subir

        funcao_de_intervalo_para_deslocamento_do_scroll_pelo_click(up_down, a)
    })
})

function add_class(a) {

    link.forEach(a => {
        a.classList.add('ativado')
        a.classList.remove('ativado1')
        a.classList.remove('ativado2')
        a.classList.remove('ativado3')
        a.classList.remove('ativado4')
    })

    if (a.classList[1] == '1') { a.classList.add('ativado1'); a.classList.remove('ativado') }
    if (a.classList[1] == '2') { a.classList.add('ativado2'); a.classList.remove('ativado') }
    if (a.classList[1] == '3') { a.classList.add('ativado3'); a.classList.remove('ativado') }
    if (a.classList[1] == '4') { a.classList.add('ativado4'); a.classList.remove('ativado') }

}

const relacionar_class_do_botao_com_div = (value_class) => {
    var a = null;
    switch (value_class) {
        case '1': a = yoggi; break;
        case '2': a = produto; break;
        case '3': a = onde_tem; break;
        case '4': a = falar_com; break;
        default: a = 'nulo'; break;
    }
    return a;
}

function funcao_de_intervalo_para_deslocamento_do_scroll_pelo_click(up_down, a) {

    var intervalo = setInterval(deslocar_scroll_para_posicao, 5)

    function deslocar_scroll_para_posicao() {

        window.scrollBy(0, up_down)
        if (up_down == -10) { //up
            if ((a.offsetTop - 85) >= window.scrollY) clearInterval(intervalo)
        }
        if (up_down == 10) {
            if ((a.offsetTop - 95) <= window.scrollY) clearInterval(intervalo)
        }

    }

}