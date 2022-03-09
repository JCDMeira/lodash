// const _ = require("lodash");
// @ para testar com o html é preciso usar a chamada do lodash inserida no head do html
// # em projetos completos a sintaxe de require ou mesmo import seria aceita normalmento, não precisando disso.

// - O debouce tem o papel de atrasar a chamada da função, e se a mesma chamada se repetir
// - ele não deixa chamar a menos que o tempo inserido já tenha passado desde a última chamada
// - o tempo é passado em ms, e faz com que o intervalo entre as chamadas seja pelo no mínimo o indicado
// - além de atrasar a primeira chamada

function search() {
  // chamada ajax
  console.log("Searching");
}

const inputSearch = document.getElementById("search");
inputSearch.addEventListener("keyup", _.debounce(search, 3000));
