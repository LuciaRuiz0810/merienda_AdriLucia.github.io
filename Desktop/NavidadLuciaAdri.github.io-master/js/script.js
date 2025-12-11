
// Cargar sonidos

const sonidoAcierto = new Audio("sounds/acierto.mp3");
const sonidoError = new Audio("sounds/error.mp3");

sonidoAcierto.volume = 0.45;
sonidoError.volume = 0.45;

// Para evitar que haga doble clic mientras se anima
let bloqueo = false;



// Verificar respuesta automáticamente al hacer clic

function verificarRespuesta(pregunta) {

    if (bloqueo) return;
    bloqueo = true;

    const opciones = document.getElementsByName(pregunta);
    let seleccionada = null;
    let radioSeleccionado = null;

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionada = opciones[i].value;
            radioSeleccionado = opciones[i];
            break;
        }
    }

    const config = {
        pregunta1:  { correcta:"respuesta2",  img:"img_entrantes",   blur:"6px", hide:"div_p1", show:"div_p2" },
        pregunta2:  { correcta:"respuesta8",  img:"img_entrantes",   blur:"3px", hide:"div_p2", show:"div_p3" },
        pregunta3:  { correcta:"respuesta11", img:"img_entrantes",   blur:"0px", hide:"div_p3", show:"div_continuar" },

        pregunta4:  { correcta:"resp_prin2",  img:"img_principales", blur:"6px", hide:"div_p1", show:"div_p2" },
        pregunta5:  { correcta:"resp_prin5",  img:"img_principales", blur:"3px", hide:"div_p2", show:"div_p3" },
        pregunta6:  { correcta:"resp_prin11", img:"img_principales", blur:"0px", hide:"div_p3", show:"div_continuar" },

        pregunta7:  { correcta:"resp_postre3", img:"img_postres",    blur:"5px", hide:"div_p1", show:"div_p2" },
        pregunta8:  { correcta:"resp_postre8", img:"img_postres",    blur:"0px", hide:"div_p2", show:"div_continuar" },

        pregunta9:  { correcta:"resp_bebida4", img:"img_bebidas",    blur:"9px", hide:"div_p1", show:"div_p2" },
        pregunta10: { correcta:"resp_bebida7", img:"img_bebidas",    blur:"6px", hide:"div_p2", show:"div_p3" },
        pregunta11: { correcta:"resp_bebida10",img:"img_bebidas",    blur:"3px", hide:"div_p3", show:"div_p4" },
        pregunta12: { correcta:"resp_bebida13", img:"img_bebidas",    blur:"0px", hide:"div_p4", show:"div_continuar" }
    };

    const p = config[pregunta];
    const labelSeleccionado = document.querySelector(`label[for="${seleccionada}"]`);



    // RESPUESTA CORRECTA
    if (seleccionada === p.correcta) {

        sonidoAcierto.currentTime = 0;
        sonidoAcierto.play();

        labelSeleccionado.classList.add('correcta');

        setTimeout(() => {

            document.getElementById(p.img).style.filter = `blur(${p.blur})`;

            document.getElementById(p.hide).style.display = "none";

            const siguiente = document.getElementById(p.show);
            siguiente.style.display = "block";
            siguiente.classList.add("pregunta-activa");

            bloqueo = false;

        }, 900);



    // RESPUESTA INCORRECTA
    } else {

        sonidoError.currentTime = 0;
        sonidoError.play();

        labelSeleccionado.classList.add('incorrecta');

        mostrarMensaje("❌ ¡Ups! Esa no es la correcta 😅");

        setTimeout(() => {
            labelSeleccionado.classList.remove('incorrecta');
            radioSeleccionado.checked = false;
            bloqueo = false;
        }, 500);
    }
}



// NIEVE

document.addEventListener("DOMContentLoaded", () => {
    const cantidad = 60;
    for (let i = 0; i < cantidad; i++) {
        const c = document.createElement("div");
        c.className = "snowflake";
        c.textContent = "❄";
        c.style.setProperty("--x", Math.random());
        c.style.setProperty("--d", Math.random());
        document.body.appendChild(c);
    }
});



// MENSAJE EMERGENTE

function mostrarMensaje(mensaje) {
    const n = document.createElement("div");
    n.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #c41e3a;
        color: white;
        padding: 15px 22px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1.1rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: aparecer 0.3s ease;
    `;
    n.textContent = mensaje;
    document.body.appendChild(n);

    setTimeout(() => n.remove(), 1800);
}

// Animación del aviso
const anim = document.createElement("style");
anim.textContent = `
@keyframes aparecer {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(anim);