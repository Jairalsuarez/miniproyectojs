const proyectos = [
    {
        nombre: "Portafolio",
        descripcion: "Mi primer portafolio.",
        image: "../dist/proyecto.webp",
        link: "https://miniproyectobetter.vercel.app/"
    },
    {
        nombre: "Proyecto 2",
        descripcion: "Otro proyecto.",
        image: "https://static.vecteezy.com/system/resources/previews/052/679/857/non_2x/default-image-icon-missing-picture-page-for-website-design-or-mobile-app-no-photo-available-vector.jpg",
        link: "https://www.google.com/"
    },
    {
        nombre: "Proyecto 3",
        descripcion: "Otro proyecto.",
        image: "https://static.vecteezy.com/system/resources/previews/052/679/857/non_2x/default-image-icon-missing-picture-page-for-website-design-or-mobile-app-no-photo-available-vector.jpg",
        link: "https://www.google.com/"
    },
    {
        nombre: "Proyecto 4",
        descripcion: "Otro proyecto.",
        image: "https://static.vecteezy.com/system/resources/previews/052/679/857/non_2x/default-image-icon-missing-picture-page-for-website-design-or-mobile-app-no-photo-available-vector.jpg",
        link: "https://www.google.com/"
    },
]

const contenedor = document.getElementById("contenedor")

proyectos.forEach(proyecto => {
    contenedor.innerHTML += `
    <div class="group bg-white flex flex-col overflow-hidden border border-slate-200 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300">
        <div class="h-48 bg-slate-100 flex justify-center items-center p-6 group-hover:bg-blue-50 transition-colors">
            <img class="h-full object-contain group-hover:scale-110 transition-transform duration-300" src="${proyecto.image}" alt="${proyecto.nombre}">
        </div>
        <div class="p-6">
            <h3 class="font-bold text-2xl text-slate-800">${proyecto.nombre}</h3>
            <p class="text-slate-500 mt-2 mb-6 text-sm leading-relaxed">
                ${proyecto.descripcion}
            </p>
            <a href="${proyecto.link}" target="_blank" class="inline-flex items-center justify-center w-full px-4 py-3 font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors gap-2">
                Ver proyecto
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </a>
        </div>
    </div>
    `
})

const nav = document.getElementById("nav2")
const button = document.querySelector("#button2")

button.addEventListener("click", () => {
    nav.classList.toggle("hidden")
    button.classList.toggle("rotate-90")
    button.classList.toggle("text-amber-500")
})