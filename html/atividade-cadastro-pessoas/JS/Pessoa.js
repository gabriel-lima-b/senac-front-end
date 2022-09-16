document.getElementById("tipo1").checked = true;
handleRadioClick();
sexo = "";
tipo = "Pessoa Física";
function validaForm() {
  nomeString = formUser.nome.value;
  emailString = formUser.email.value;
  telefoneString = formUser.telefone.value;
  enderecoString = formUser.endereco.value;
  cpfString = formUser.cpf.value;
  cnpjString = formUser.cnpji.value;
  senhaString = formUser.senha.value;
  senhaRString = formUser.senhaR.value;
  estadoCivilString = formUser.estadoCivil.value;

  if (nomeString == "" || nomeString.length <= 5) {
    alert("Informe o nome completo!");
    formUser.nome.focus();
    return false;
  }

  if (
    emailString == "" ||
    !emailString.includes("@") ||
    emailString.length <= 5
  ) {
    alert("Informe email corretamente!");
    formUser.email.focus();
    return false;
  }
  //(51) 3344-3344 || (51) 99988-8899
  if (telefoneString == "" || telefoneString.length <= 10) {
    alert("Telefone incorreto!");
    formUser.telefone.focus();
    return false;
  }
  //823.951.290-97
  if ((cpfString == "" || cpfString.length != 14) && tipo == "Pessoa Física") {
    alert("CPF inválido!");
    formUser.cpf.focus();
    return false;
  }
  //53.592.717/0001-36
  if (
    (cnpjString == "" || cnpjString.length != 18) &&
    tipo != "Pessoa Física"
  ) {
    alert("CNPJ inválido!");
    formUser.cnpji.focus();
    return false;
  }

  if (enderecoString == "" || enderecoString.length <= 5) {
    alert("Endereço incompleto!");
    formUser.endereco.focus();
    return false;
  }

  if (
    senhaString == "" ||
    senhaRString == "" ||
    senhaString.length < 8 ||
    senhaRString.length < 8
  ) {
    alert(
      "Senha inválida!\nA senha não atende os requisitos:\nmínimo 8 caracteres"
    );
    formUser.senha.focus();
    return false;
  }

  if (senhaString != senhaRString) {
    alert("Senha inválida!");
    formUser.senha.focus();
    return false;
  }

  if (tipo == "Pessoa Física") {
    alert(
      `Tipo: ${tipo}\n
    Nome: ${nomeString}\n
    CPF: ${cpfString}\n
    Sexo: ${sexo}\n
    Estado Civil: ${estadoCivilString}\n
    Email: ${emailString}\n
    Telefone: ${telefoneString}\n
    Endereço: ${enderecoString}\n
    Senha: ${senhaString}\n
    `
    );
  } else {
    alert(
      `Tipo: ${tipo}\n
    Nome: ${nomeString}\n
    CNPJ: ${cnpjString}\n
    Email: ${emailString}\n
    Telefone: ${telefoneString}\n
    Endereço: ${enderecoString}\n
    Senha: ${senhaString}\n
    `
    );
  }
}

function confirmaSenha(s) {
  senha = document.getElementById("senha");
  senhaR = s;
  if (senha.value === senhaR.value) {
    senhaR.style.border = "1px solid gray";
  } else {
    senhaR.style.border = "1px solid red";
  }
}

function lerImg() {
  if (this.files && this.files[0]) {
    file = new FileReader();
    file.onload = function (e) {
      //função anônima
      document.getElementById("preview").src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}

function mascaraTelefone(fone) {
  //mascara para telefone fixo
  tel = fone.value;
  //não aceitar texto
  if (isNaN(tel[tel.length - 1])) {
    fone.value = tel.substring(0, tel.length - 1);
    return;
  }
  //limitar quantia de caracteres
  fone.setAttribute("maxlength", "14");
  //formatar
  if (tel.length == 1) fone.value = "(" + fone.value;
  if (tel.length == 3) fone.value += ")";
  if (tel.length == 8) fone.value += "-";
}
//Regex
function formataCPF(i) {
  i.setAttribute("maxlength", "14");
  cpf = i.value;
  cpf = cpf.replace(/[^\d]/g, "");
  i.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function mascaraCNPJ(cnpj) {
  v = cnpj.value;
  if (isNaN(v[v.length - 1])) {
    cnpj.value = v.substring(0, v.length - 1);
    return;
  }
  cnpj.setAttribute("maxlength", "18");
  if (v.length == 2) cnpj.value += ".";
  if (v.length == 6) cnpj.value += ".";
  if (v.length == 10) cnpj.value += "/";
  if (v.length == 15) cnpj.value += "-";
}

function lancheSelecionado() {
  opSelect = document.getElementById("selecionaLanche").value;
  if (opSelect != "") {
    document.getElementById("lanche").innerHTML =
      "Você selecionou o lanche: " + opSelect;
  } else {
    document.getElementById("lanche").innerHTML = "";
  }
}

function handleRadioClick(e) {
  if (e) {
    tipo = e.target.value;
  }
  if (document.getElementById("tipo1").checked) {
    divCPF.style.display = "block";
    cnpj.style.display = "none";
  } else {
    divCPF.style.display = "none";
    cnpj.style.display = "block";
  }
}

const radioButtons = document.querySelectorAll('input[name="tipo"]');
radioButtons.forEach((radio) => {
  radio.addEventListener("change", handleRadioClick);
});

function handleRadioSexoClick(e) {
  sexo = e.target.value;
}

const radioButtonsSexo = document.querySelectorAll('input[name="sexo"]');
radioButtonsSexo.forEach((radio) => {
  radio.addEventListener("change", handleRadioSexoClick);
});
