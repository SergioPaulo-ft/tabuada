let enter = document.querySelector("#numero") //input
let addTabuada = document.querySelector("#adicionar") //botão 
let clear = document.querySelector('#limpar') //botão limpar tabuada
let res = document.querySelector('#res') // resposta
let tabuadaClick = ""
let tabuadaEnter = ""

//adicionando tabuada com click
addTabuada.addEventListener("click", function click(event) {
    let numero = parseInt(document.querySelector("#numero").value)
    for (i = 0; i <= 10; i++) {
        tabuadaClick += `${numero} x ${i} = ${numero * i} <br>`
    }
    !isNaN(numero) && (res.innerHTML = tabuadaClick) //desabilita NaN
       
})
//adicionando tabuada com tecla "Enter"
enter.addEventListener("keypress", function (e) {
    let numero = parseInt(document.querySelector("#numero").value)

    if (e.key === "Enter") {
        let nonumber = isNaN(numero)
        //tabuadaEnter.indexOf(NaN)
            for (i = 0; i <= 10; i++) {
                tabuadaEnter += `${numero} x ${i} = ${numero * i} <br>`
            }
            (isNaN(numero) && (res.innerHTML = 'NaN encontrado'))
           && (nonumber = 0)
            !isNaN(numero) && (res.innerHTML = tabuadaEnter)
    }
})

//limpando tabuada
clear.addEventListener("click", limpar = (clear) => {
    res.innerHTML = ""
    tabuadaEnter = ""
    tabuadaClick = ""
}) 