const hamburger = document.getElementById("btn");
const list = document.getElementById("list");
list.style.display = "none";
hamburger.addEventListener("click", (event) => {
    if (list.style.display == "none"){
        list.style.display = "block"
    } else {
        list.style.display = "none";
    }
})
