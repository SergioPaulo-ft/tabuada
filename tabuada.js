let enter = document.querySelector("#numero") //input
let addTabuada = document.querySelector("#adicionar") //botao
let clear = document.querySelector('#limpar') //botão limpar tabuada
let res = document.querySelector('#res') // resposta
let tabuadaClick = ""
let tabuadaEnter = ""

//adicionando tabuada com click
addTabuada.addEventListener("click", function click(event) {
    let numero = parseInt(document.querySelector("#numero").value)
    for (i = 0; i <= 10; i++) {
        if(isNaN(numero)){
            res.innerHTML = ``
            }else{
            tabuadaClick += `${numero} x ${i} = ${numero * i} <br>`
            }
        }
        
        res.innerHTML +=  tabuadaClick  + "<br>"
})
//adicionando tabuada com tecla "Enter"
enter.addEventListener("keypress", function (e) {
    let numero = parseInt(document.querySelector("#numero").value)
    if (e.key === "Enter") {
        for (i = 0; i <= 10; i++) {
            if(isNaN(numero)){
                res.innerHTML = ``
                }else{
                tabuadaClick += `${numero} x ${i} = ${numero * i} <br>`
                }
            }
            
            res.innerHTML +=  tabuadaClick  + "<br>"
    }
})
//limpando tabuada
clear.addEventListener("click", limpar = (clear) => {
    res.innerHTML = ""
    tabuadaEnter = ""
    tabuadaClick = ""
})
