/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let regex = /[0-9]+/
  while (true){
    datosPersona.nombre = prompt("Ingresa tu nombre ")
    if (datosPersona.nombre ===null||datosPersona.nombre === "" || datosPersona.nombre.length < 3||regex.test(datosPersona.nombre)){
      alert("Nombre invalido")
      continue
    } 
    else{
      break
    }
  }

  while(true){
    let nacimiento = prompt("Ingresa tu año de nacimiento")
    if (nacimiento=== ""||nacimiento <1904||nacimiento>2024||isNaN(nacimiento)){
      alert("Año invalido")
      continue
    }
    else{ 
      datosPersona.edad = 2024- nacimiento
      break
    }
  }
  
  
  while(true){
    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives")
    if (datosPersona.ciudad===null||datosPersona.ciudad=== "" || datosPersona.ciudad.length < 3||regex.test(datosPersona.ciudad)){
      alert("Ciudad invalida")
      continue
    }
    else{
      break
    }

  }  
  
  interes = confirm("¿Te interesa JavaScript?")
  if (interes){
    datosPersona.interesPorJs = "Si"
  }else{
    datosPersona.interesPorJs = "No"
  }
    
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let spanNombre= document.querySelector("#nombre")
  spanNombre.innerText = datosPersona.nombre
  let spanEdad = document.querySelector("#edad")
  spanEdad.innerText = datosPersona.edad
  let spanCiudad = document.querySelector("#ciudad")
  spanCiudad.innerText = datosPersona.ciudad
  let spanJava = document.querySelector("#javascript")
  spanJava.innerText = datosPersona.interesPorJs

}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila")
  
  listado.forEach(lenguaje => {
    fila.innerHTML += `
    <div class= "caja">
      <img src = "${lenguaje.imgUrl}" alt = "HTML Y CSS">
      <p class= "lenguajes" >${lenguaje.lenguajes}</p> 
      <p class = "bimestre">${lenguaje.bimestre}</p>
    </div> `
  });
  materiasBtn.setAttribute("disabled",true)

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 let tema = document.querySelector("#sitio")
 tema.classList.toggle("dark")
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("load", function(){
  window.addEventListener("keypress", function(e){
      if (e.key ==="F"||e.key ==="f"){
        let parrafo = document.querySelector("#sobre-mi")
        parrafo.classList.remove("oculto")
      }
      
  })
})