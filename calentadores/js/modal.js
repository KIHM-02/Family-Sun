const linkNosotros = document.querySelector("#linkNosotros");
const linkProductos = document.querySelector("#linkProductos");
const linkContacto = document.querySelector("#linkContacto");

const btnCerrar = document.querySelector("#btnCerrar");

const modalNosotros = document.querySelector("#nosotros-modal");
const modalProductos  = document.querySelector("#productos-modal");
const modalContacto = document.querySelector("#contactanos-modal");

var tipoModal = 0;

linkNosotros.addEventListener("click", ()=>{
    modalNosotros.showModal();
    tipoModal = 1;
});

linkProductos.addEventListener("click", ()=>{
    modalProductos.showModal();
    tipoModal = 2;
});

linkContacto.addEventListener("click", ()=>{
    modalContacto.showModal();
    tipoModal = 3;
});

btnCerrar.addEventListener("click", ()=>{
    switch(tipoModal)
    {
        case 1: 
            modalNosotros.close();
            tipoModal = 0;
            break;
        case 2:
            modalProductos.close();
            tipoModal = 0;
            break;
        case 3:
            modalContactos.close();
            tipoModal = 0;
            break;
    }
});