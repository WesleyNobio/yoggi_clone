var menu_visivel = false;

document.querySelector('#menu').addEventListener('click', ()=>{
    if(menu_visivel){
        document.querySelector('nav').className = "nav-nao-ver";
        menu_visivel = false;
        return;
    }else{
        document.querySelector('nav').className = "nav-ver";
        menu_visivel = true;
    }
})