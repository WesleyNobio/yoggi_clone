var todos_e_banner = document.querySelectorAll('.endereco_banner')
var paragrafos = document.querySelectorAll('.p_c')

paragrafos.forEach(paragrafo => {

    paragrafo.addEventListener('click', function () {

        for (let i = 0; i < todos_e_banner.length; i++) {

            if (todos_e_banner[i].classList[1] == this.classList[1] && todos_e_banner[i].classList[2] == 'e_visivel') {
                todos_e_banner[i].classList.remove("e_visivel")
                return
            }

            todos_e_banner[i].classList.remove("e_visivel")

            if (todos_e_banner[i].classList[1] == this.classList[1]) {
                todos_e_banner[i].classList.add("e_visivel")
            }
        }
    })
})