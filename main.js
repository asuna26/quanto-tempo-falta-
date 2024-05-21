const dataAtual = new Date ();
let dataObjetivo = prompt("Data final ANO-MES-DIA Exemplo: 2024-04-10");
dataObjetivo = new Date (dataObjetivo + "T23:59:59");
let diasQueFaltam = Math.floor ((dataObjetivo - dataAtual) / 8640000);
document.querySelector("#dia_restantes").textContent = diasQueFaltam;
