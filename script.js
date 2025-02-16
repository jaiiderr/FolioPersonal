// Listas de objetos
const proyectos = [
  { 
    nombre: "Proyecto",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    imagen: "https://imgs.search.brave.com/kMlDvfptq-4WIFn_m1TGv4n2mPb1aHKRW0OUBKDd5eQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2dh/ZkFLYkN4aWNDakZC/NjRGNlJoV2EtMzIw/LTgwLmpwZw",
    url: "www.google.com"
  },
  { 
    nombre: "Proyecto",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    imagen: "https://imgs.search.brave.com/kMlDvfptq-4WIFn_m1TGv4n2mPb1aHKRW0OUBKDd5eQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2dh/ZkFLYkN4aWNDakZC/NjRGNlJoV2EtMzIw/LTgwLmpwZw",
    url: "www.google.com"
  },
];

  const certificados = [
    { 
      nombre: "Certificado",
      imagen: "https://imgs.search.brave.com/kMlDvfptq-4WIFn_m1TGv4n2mPb1aHKRW0OUBKDd5eQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2dh/ZkFLYkN4aWNDakZC/NjRGNlJoV2EtMzIw/LTgwLmpwZw",
      url: "www.google.com"
    },
    { 
      nombre: "Certificado",
      imagen: "https://imgs.search.brave.com/kMlDvfptq-4WIFn_m1TGv4n2mPb1aHKRW0OUBKDd5eQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2dh/ZkFLYkN4aWNDakZC/NjRGNlJoV2EtMzIw/LTgwLmpwZw",
      url: "www.google.com"
    },
    { 
      nombre: "Certificado",
      imagen: "https://imgs.search.brave.com/kMlDvfptq-4WIFn_m1TGv4n2mPb1aHKRW0OUBKDd5eQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2dh/ZkFLYkN4aWNDakZC/NjRGNlJoV2EtMzIw/LTgwLmpwZw",
      url: "www.google.com"
    },
  ];

  const habilidades = [
    { 
      imagen: "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",  
    },
    { 
      imagen: "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",  
    },
    { 
      imagen: "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",  
    },
    { 
      imagen: "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",  
    },
    { 
      imagen: "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",  
    },
  ];


  // Función para mostrar la lista seleccionada
  function mostrarLista(tipo) {
    const divMostrar = document.getElementById("mostrar");
    let contenido = "";

    // Seleccionar la lista según el tipo
    let lista;
    if (tipo === "proyectos") {
      divMostrar.className = "grid grid-cols-1 md:grid-cols-2 w-9/12 gap-4";
      lista = proyectos;
      lista.forEach(item => {
        contenido += `
        <div class="p-4 rounded-xl bg-blue-50/10 border-2 border-white">
          <div class="flex justify-center"> <img src="${item.imagen}" alt=""> </div>
          <h1 class="titulo text-base sm:text-lg md:text-lg lg:text-lg px-2 pt-2">${item.nombre}</h1>
          <p class="text-lg sm:text-base text-gray-100  p-2"> ${item.descripcion} </p>
          <div class="flex justify-between">
            <button class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
            border-blue-600
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
              ver
            </button>
          </div>
        </div>
        `;
      });
    } else if (tipo === "certificados") {
      divMostrar.className = "grid grid-cols-1 md:grid-cols-3 w-9/12 gap-4";
      lista = certificados;
      lista.forEach(item => {
        contenido += `
        <div class="p-4 rounded-xl bg-blue-50/10 border-2 border-white">
          <div class="flex justify-center"> <img src="${item.imagen}" alt=""> </div>
          <h1 class="titulo text-base sm:text-lg md:text-lg lg:text-lg px-2 pt-2">${item.nombre}</h1>
        </div>
        `;
      });
    } else if (tipo === "habilidades") {
      divMostrar.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-9/12 gap-4";
      lista = habilidades;
      lista.forEach(item => {
        contenido += `
        <div class="p-5 rounded-xl bg-blue-50/10 border-2 border-white">
          <div class="flex justify-center"> <img src="${item.imagen}" alt=""> </div>
        </div>
        `;
      });
    }

    

    // Mostrar el contenido en el div
    divMostrar.innerHTML = contenido;
    
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Mostrar la lista de proyectos al cargar la página
    mostrarLista("proyectos");
  });
