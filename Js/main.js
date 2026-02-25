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
        id: 4,
        nombre: "Tailwind",
        experiencia: "Junior",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png"
    },
]

const contenedor = document.getElementById("contenedor")

habilidades.forEach(skill => {
    contenedor.innerHTML += `
    <div class="group bg-white flex flex-col p-6 gap-4 justify-center items-center border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div class="bg-slate-50 p-4 rounded-full group-hover:bg-blue-50 transition-colors">
            <img class="w-16 h-16 object-contain" src="${skill.image}" alt="${skill.nombre}">
        </div>
        <div class="text-center">
            <h3 class="font-bold text-xl text-slate-800">${skill.nombre}</h3>
            <span class="inline-block px-3 py-1 mt-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
                ${skill.experiencia}
            </span>
        </div>
    </div>
    `
})

const nav = document.getElementById("nav")
const button = document.querySelector("#button1")

button.addEventListener("click", () => {
    nav.classList.toggle("hidden")
    button.classList.toggle("rotate-90")
    button.classList.toggle("text-amber-500")
})

emailjs.init("zBpPYdP3pqYAvisCG")

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(e) {
    e.preventDefault()
    
    const btnSubmit = this.querySelector('button')
    const originalText = btnSubmit.textContent
    btnSubmit.textContent = "Enviando..."
    btnSubmit.disabled = true

    emailjs.sendForm("service_eflhem7", "template_yi6el1a", this)
        .then(() => {
            alert("¡Mensaje enviado con éxito!")
            this.reset()
        })
        .catch((error) => {
            alert("Hubo un error al enviar el mensaje.")
            console.error(error)
        })
        .finally(() => {
            btnSubmit.textContent = originalText
            btnSubmit.disabled = false
        })
})