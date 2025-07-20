let ataqueJugador
let ataqueEnemigo
let VidasJugador = 3
let VidasEnemigo = 3
function iniciarJuego(){
    let seccionReiniciar =document.getElementById("reiniciar")
    seccionReiniciar.style.display = "none"

    let botonAgua = document.getElementById("PIEDRA🥌")
    botonAgua.addEventListener("click", ataquePiedra)
    let botonfuego = document.getElementById("PAPEL📃")
    botonfuego.addEventListener("click", ataquePapel)
    let botonTierra = document.getElementById("TIJERA✂")
    botonTierra.addEventListener("click", ataqueTijera)

    let reiniciar = document.getElementById("reiniciar")
    reiniciar.addEventListener("click", reiniciarJuego)
}
function ataquePiedra(){
    ataqueJugador = "PIEDRA🥌"
    ataqueAleatorioDelEnemigo()
}
function ataquePapel(){
    ataqueJugador = "PAPEL📃"
    ataqueAleatorioDelEnemigo()
}
function ataqueTijera(){
    ataqueJugador = "TIJERA✂"
    ataqueAleatorioDelEnemigo()
}
function ataqueAleatorioDelEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "PIEDRA🥌"
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = "PAPEL📃"
    } else{
        ataqueEnemigo = "TIJERA✂"
    }
    combate()
}
function combate(){
    let spanvidasDelJugador = document.getElementById("vidasDelJugador")
    let spanvidasDelEnemigo = document.getElementById("vidasEnemigo")
    if(ataqueJugador == ataqueEnemigo ){
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "PIEDRA🥌" && ataqueEnemigo == "TIJERA✂" ){
        crearMensaje("GANASTE")
        VidasEnemigo--
        spanvidasDelEnemigo.innerHTML = VidasEnemigo
    } else if (ataqueJugador == "PAPEL📃" && ataqueEnemigo == "PIEDRA🥌" ){
        crearMensaje("GANASTE")
        VidasEnemigo--
        spanvidasDelEnemigo.innerHTML = VidasEnemigo
    } else if(ataqueJugador== "TIJERA✂" && ataqueEnemigo == "PAPEL📃"){
        crearMensaje("GANASTE")
        VidasEnemigo--
        spanvidasDelEnemigo.innerHTML = VidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        VidasJugador--
        spanvidasDelJugador.innerHTML = VidasJugador
    }
    revisarVidas()
}
function revisarVidas(){
    let resultadoAnterior = document.getElementById("resultado")
    
    if(VidasEnemigo == 0){
        crearMensajeFinal("💥FELICITACIONES HAS GANADO💥")
        resultadoAnterior.style.display = "none"
     }else if(VidasJugador == 0){
        crearMensajeFinal("😥😥LO SIENTO, PERDISTE😥😥")
        resultadoAnterior.style.display = "none"
     }
}
function crearMensaje(resultado){
    let seccionMensaje = document.getElementById("resultado")
    let AtaqueJugador = document.getElementById("AtaqueJuga")
    let AtaqueEnemigo = document.getElementById("AtaqueEne")
 
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    seccionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    
    AtaqueJuga.appendChild(nuevoAtaqueJugador)
    AtaqueEne.appendChild(nuevoAtaqueEnemigo)
}
function crearMensajeFinal(vidasFinales){
    let seccionReiniciar =document.getElementById("reiniciar")
    seccionReiniciar.style.display = "block"
    let seccionMensaje = document.getElementById("mensaje")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = vidasFinales
    seccionMensaje.appendChild(parrafo)
    
    let botonAgua = document.getElementById("PIEDRA🥌")
    botonAgua.disabled = true
    let botonfuego = document.getElementById("PAPEL📃")
    botonfuego.disabled = true
    let botonTierra = document.getElementById("TIJERA✂")
    botonTierra.disabled = true
} 
function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
            return Math.floor( Math.random() * (max - min +1) +min)
}
window.addEventListener("load", iniciarJuego)
