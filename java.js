function mostrar(id){
    let secciones = document.querySelectorAll("section");
    secciones.forEach(sec => sec.classList.remove("activo"));
    document.getElementById(id).classList.add("activo");
}

/* ====== MÚSICA ====== */

const audio = document.getElementById("musica");

function activarMusica(){
    audio.play();
    localStorage.setItem("musica","on");
}

function desactivarMusica(){
    audio.pause();
    localStorage.setItem("musica","off");
}

window.onload = () => {
    const estado = localStorage.getItem("musica");
    if(estado === "on"){
        audio.play();
    } else {
        audio.pause();
    }
}

