
// Atualiza horários disponíveis dinamicamente
function atualizarHorarios() {
  const selectHora = document.getElementById("hora");
  if (!selectHora) return;
  selectHora.innerHTML = "";
  const agora = new Date();
  const hoje = document.getElementById("data").value;
  let dataSelecionada = new Date(hoje);
  for (let h=8; h<=20; h++) {
    let horaTexto = (h<10?"0":"") + h + ":00";
    let option = document.createElement("option");
    option.value = horaTexto;
    option.textContent = horaTexto;
    if(dataSelecionada.toDateString() === agora.toDateString() && h <= agora.getHours()) {
      option.disabled = true;
    }
    selectHora.appendChild(option);
  }
}

function validarFormulario(e){
  const entrega = document.getElementById("entrega").checked;
  const endereco = document.getElementById("endereco").value.trim();
  if(entrega && endereco === ""){
    alert("Por favor, informe o endereço para entrega.");
    e.preventDefault();
    return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", ()=>{
  const dataInput = document.getElementById("data");
  if(dataInput){
    dataInput.addEventListener("change", atualizarHorarios);
    atualizarHorarios();
  }
  const form = document.getElementById("formCadastro");
  if(form){
    form.addEventListener("submit", validarFormulario);
  }
});
