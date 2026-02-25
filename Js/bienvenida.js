const proyectos = [
    {
        nombre: "Proyecto 1",
        descripcion: "Descripcion",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png",
        link: "https://www.google.com/"
    },
    {
        nombre: "Proyecto 2",
        descripcion: "Descripcion",
        image: "https://cdn-icons-png.freepik.com/512/732/732190.png",
        link: "https://www.google.com/"
    },
    {
        nombre: "Proyecto 3",
        descripcion: "Descripcion",
        image: "https://cdn-icons-png.freepik.com/512/732/732190.png",
        link: "https://www.google.com/"
    },
    {
        nombre: "Proyecto 4",
        descripcion: "Descripcion",
        image: "https://cdn-icons-png.freepik.com/512/732/732190.png",
        link: "https://www.google.com/"
    },
]



let contenedor = document.getElementById("contenedor")

for (let index = 0; index < proyectos.length; index++) {
    const element = proyectos[index];
    contenedor.innerHTML += `
    <div class="flex flex-col  gap-3  justify-center items-center border-2 border-amber-400 w-40 h-50  ">
        <p>${element.nombre}</p>
        <p>${element.experiencia}</p>
        <img class="w-20" src="${element.image }" alt="" >
        <button><a href="${element.link}">Ver proyecto</a></button>
    </div>
    `
}

let nav = document.getElementById("nav2")
let button = document.querySelector("#button2")
button.addEventListener("click", () => {
    nav.classList.toggle("hidden")
})
