const inputText = document.getElementById("input")
const button = document.getElementById("button")
const image = document.getElementById("img")
const qrImg = document.getElementById("qrImg")


function qrCode(event){
    if(inputText.value === ""){
        inputText.classList.add('error')
        setTimeout(() =>{
            inputText.classList.remove('error')
        },1000);
        
    }
    else{
    qrImg.src =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value; 
    image.classList.add(".show-img");
    }
}

button.addEventListener("click" , qrCode)

inputText.addEventListener("keypress", function(event){
    if(event.key ==="Enter")
    qrCode();
})