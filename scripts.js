document.addEventListener("DOMContentLoaded",()=>{
    let numero = ""
    
    // Funcion devolver numero selecionado
    function SelectNumero(){
        for(let i = 1; i <=5; i++){
            // console.log(i)
            let botones = document.getElementById(`boton_${i}`)
            botones.addEventListener("click",() =>{
                numero = botones.textContent
            })
        }   
    }
    SelectNumero()
    
    let submit = document.getElementById("submitt")
    submit.addEventListener("click",()=>{
        let targeta1 = document.querySelector(".targeta_1")
        let targeta2 = document.querySelector(".targeta_2")
        targeta1.style.display = "none"
        targeta2.style.display = "flex"

        let texto = document.getElementById("texto_a_cambiar")
        texto.innerHTML = `You select ${numero} put of 5`
    })



})