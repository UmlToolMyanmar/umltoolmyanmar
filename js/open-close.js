const Nav_Container = document.querySelector(".nav-container");
const Open_Bar = document.getElementById("open-bar");
const Close_Bar = document.getElementById("close-bar");

Open_Bar.addEventListener("click" , () => {
    Nav_Container.classList.add("active");
});

Close_Bar.addEventListener("click" , () => {
    Nav_Container.classList.remove("active");
});