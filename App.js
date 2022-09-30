const inputField= document.querySelector(".data");
const button = document.querySelector(".submit");
const image = document.querySelector("#img");

button.addEventListener("click",()=>{
    image.style.display="block";
    let inputValue = inputField.value;
    image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
})