const habilidades = [
    {
        id: 1,
        nombre: "HTML",
        experiencia: "Junior",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png",
    },
    {
        id: 2,
        nombre: "CSS",
        experiencia: "Junior",
        image: "https://cdn-icons-png.freepik.com/512/732/732190.png"
    },
    {
        id: 3,
        nombre: "JavaScript",
        experiencia: "Junior",
         image: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png"
    },
    {
        id: 3,
        nombre: "Tailwind",
        experiencia: "Junior",
         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png"
    },
]

let contenedor = document.getElementById("contenedor")

for (let index = 0; index < habilidades.length; index++) {
    const element = habilidades[index];
    contenedor.innerHTML += `
    <div class="flex flex-col mt-10 gap-3  justify-center items-center border-2 border-amber-400 w-40 h-50  ">
        <p>${element.nombre}</p>
        <p>${element.experiencia}</p>
        <img class="w-20" src="${element.image }" alt="" >
      </div>

`
    
}

let nav = document.getElementById("nav")
let button = document.querySelector("#button1")
button.addEventListener("click", () => {
    nav.classList.toggle("hidden")
})



    emailjs.init("zBpPYdP3pqYAvisCG");

    document.getElementById("formulario").addEventListener("submit", function(e) {

        e.preventDefault();

        emailjs.sendForm(
        "service_eflhem7",
        "template_yi6el1a",
        this
        )
        .then(function() {

        alert("Mensaje enviado correctamente");

        }, function(error) {

        alert("Error al enviar");
        console.log(error);

    });

    });

