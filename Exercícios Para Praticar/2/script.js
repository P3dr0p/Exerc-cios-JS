alert("Olá! Vamos calcular quantos minutos durou um jogo a partir da hora de início e de término.")
let horaInicio = prompt("Informe a hora que começou o jogo.\nDICA:\nSe não for uma hora exata, como 17:30, escreva no valor decimal (17.5).\nSe tiver um cinco, como 17:35, escreva 17.55")
if(horaInicio != null){
    let horaFim = prompt("Agora informe a hora que terminou o jogo.")
    if(horaFim != null){
        let quantHoras = horaFim - horaInicio
        quantHoras = quantHoras.toFixed(2)
        document.write("<h1>Durou "+quantHoras+" horas</h1>")
    }else{
        alert("Tente novamente.")
    }
}else{
    alert("Tente novamente.")
}
