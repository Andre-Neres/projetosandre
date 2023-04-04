// seleciona o formulário e o botão de envio
const form = document.querySelector("#recrutamento-form");
const submitButton = document.getElementById("enviar-dados");

// adiciona um event listener ao botão de envio
submitButton.addEventListener("click", (event) => {
  // previne o envio do formulário
  event.preventDefault();

  // verifica se todos os campos obrigatórios foram preenchidos corretamente
  if (
    form.nomeCompleto.value === "" ||
    form.dataNascimento.value === "" ||
    form.nacionalidade.value === "" ||
    form.endereco.value === "" ||
    form.cidade.value === "" ||
    form.estado.value === "" ||
    form.cep.value === "" ||
    form.telefone.value === "" ||
    form.formacao.value === ""
  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  // confirma o envio do formulário
  const confirmed = confirm("Deseja enviar o formulário?");

  // se o usuário confirmar, exibe os dados do formulário em uma nova janela
  if (confirmed) {
    const dados = `
      Nome Completo: ${form.nomeCompleto.value}
      Data de Nascimento: ${form.dataNascimento.value}
      Gênero: ${form.genero.value}
      Nacionalidade: ${form.nacionalidade.value}
      Endereço: ${form.endereco.value}
      Cidade: ${form.cidade.value}
      Estado: ${form.estado.value}
      CEP: ${form.cep.value}
      Telefone: ${form.telefone.value}
      Formação: ${form.formacao.value}
      Outros cursos: ${form.outrosCursos.value}
      Última ou Atual Empresa: ${form.empresaAtual.value}
      Cargo: ${form.cargo.value}
      Período de Atuação: ${form.periodo.value}
      Principais Atividades e Responsabilidades: ${form.atividades.value}
      Outras experiências profissionais: ${form.outrasExperiencias.value}
      Experiências adicionais: ${form.experienciasAdicionais.value}
      Habilidades Técnicas Relevantes: ${form.habilidades.value}
    `;

    window.open("", "Dados do Formulário", "width=600,height=400");
    const novaJanela = window.open();
    newFunction(novaJanela, dados);
  }

    function newFunction(novaJanela, dados) {
        novaJanela.document.write("<pre>" + dados + "</pre>");
    }
});
