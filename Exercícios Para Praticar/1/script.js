const tempo = () => {
    let segundo = parseInt(prompt('Digite um número'))
    const minuto = segundo / 60;
    const hora = minuto / 60;

    document.querySelector('.info'),innerText = `Resultado: ${segundo}, ${minuto} minutos e ${hora} horas`
}

tempo();