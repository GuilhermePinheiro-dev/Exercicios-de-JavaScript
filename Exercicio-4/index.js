let inputText = document.querySelectorAll(".input")

inputText.forEach(input => {
    input.addEventListener("change", ()=>{
        if(input !== ""){
            input.classList.add("bordaColorida")
        }else{
            input.classList.remove("bordaColorida")
        }
    })
});