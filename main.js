const botoes = document.querySelectorAll(botao);
console.log(botoes)
for (let i=0; i < botões.length; i++) { console.log(i); }
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function() {
    botoes[i].classList.add(ativo);
    textos[i].classList.add("ativo");
    textos[j].classList.remove("ativo");
    }
    }
    const textos = document.querySelectorAll(".aba-conteudo");
    const contadores = document.querySelectorAll(".contador");
    const contadores = document.querySelectorAll(".contador");
    const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo1 = new Date("2024-10-05");
contadores[0].textContent = tempoObjetivo1;
contadores[0].textContent = "Contagem regressiva";