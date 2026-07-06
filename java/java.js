const button = document.getElementById("menu")
const divremove = document.getElementById("remove")
const remove = document.getElementById("remove-btn")


console.log(button);

button.addEventListener("click", () => {
    // console.log(show);


    divremove.style = "translate:0;  transition-duration:800ms"

})
remove.addEventListener("click", () => {
    console.log("click");

    divremove.style ="translate:-100; transition-duration:450ms "

})