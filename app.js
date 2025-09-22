// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Define un array con los nombres de tus amigos
const amigos = [
  "Ana",
  "Luis",
  "Sofía",
  "Javier",
  "María",
  "Carlos",
  "Elena",
  "Pedro"
];

// Obtén el botón y el elemento donde se mostrará el amigo
const agregAramigo = document.getElementById("agregar-amigo");
const sortearAmigo = document.getElementById("sortear-amigo");

// Agrega un "event listener" al botón
agregarAmigo.addEventListener("click", () => {
  // Genera un número aleatorio basado en la longitud del array
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  // Selecciona el amigo aleatorio usando el índice
  const amigoSeleccionado = amigos[indiceAleatorio];
  
  // Muestra el nombre del amigo en el HTML
  amigoAleatorio.textContent = `Tu amigo aleatorio es: ${amigoSeleccionado}`;
});


