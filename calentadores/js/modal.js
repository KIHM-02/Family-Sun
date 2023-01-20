const linkNosotros = document.querySelector("#linkNosotros");
const linkProductos = document.querySelector("#linkProductos");
const linkContacto = document.querySelector("#linkContacto");

const btnCerrarNosotros = document.querySelector("#btnCerrarNosotros");
const btnCerrarProd = document.querySelector("#btnCerrarProd");
const btnCerrarContacto = document.querySelector("#btnCerrarContacto");

const modalNosotros = document.querySelector("#nosotros-modal");
const modalProductos  = document.querySelector("#productos-modal");
const modalContacto = document.querySelector("#contactanos-modal");

linkNosotros.addEventListener("click", ()=>{
    modalNosotros.showModal();
});

linkProductos.addEventListener("click", ()=>{
    modalProductos.showModal();
});

linkContacto.addEventListener("click", ()=>{
    modalContacto.showModal();
});

btnCerrarNosotros.addEventListener("click", ()=>{
  modalNosotros.close();
});

btnCerrarProd.addEventListener("click", ()=>{
    modalProductos.close();
})

btnCerrarContacto.addEventListener("click", ()=>{
    modalContacto.close();
})
