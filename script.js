// Este script calcula la suma total de las estrellas de los comentarios
const comentarios = [
    { nombre: "Estudiante A", estrellas: 5 },
    { nombre: "Estudiante B", estrellas: 4 },
    { nombre: "Estudiante C", estrellas: 5 },
    { nombre: "Estudiante D", estrellas: 4 },
    { nombre: "Estudiante E", estrellas: 5 },
];

function calcularEstrellasTotales(comentarios) {
    return comentarios.reduce((total, comentario) => total + comentario.estrellas, 0);
}

document.addEventListener("DOMContentLoaded", () => {
    const totalEstrellas = calcularEstrellasTotales(comentarios);
    const footer = document.querySelector("footer");
    const estrellasElement = document.createElement("p");
    estrellasElement.textContent = `Total de estrellas recibidas: ${totalEstrellas}`;
    footer.appendChild(estrellasElement);
});