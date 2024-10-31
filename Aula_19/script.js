function pegaDados() {

    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const idade = document.querySelector("#idade");
    const resultado = document.querySelector(".resultado");
    const erro = document.querySelector(".erro");

const nomeValor = nome.value;
const sobrenomeValor = sobrenome.value;
const idadeValor = Number(idade.value);

if(nomeValor === ""){
    erro.textContent = "o campo não pode estar vazio!";
    nome.style.bordercolor = "red";
    return;
}
if(nomeValor === ""){
    document.querySelector(".erro-idade").textContent = "Campo obrigatorio!";
    nome.style.bordercolor = "red";
    return;
}
if(idadeValor < 0){
    document.querySelector(".erro-idade").textContent = "Não pode ser menor que 0";
    idade.style.bordercolor = "red";
  return;
}


resultado.innerHTML = `<p>nome: ${nomeValor}</p>
                      <p>sobrenome: ${sobrenomeValor}</p>
                       <p>idade: ${idadeValor}</p>
    `;

}