function validaForm() {
    nome = formUser.nome.value;
    email = formUser.email.value;
    telefone = formUser.telefone.value;
    endereco = formUser.endereco.value;
    cpf = formUser.cpf.value;
    cnpj = formUser.cnpj.value;
    senha = formUser.senha.value;
    senhaR = formUser.senhaR.value;

    if (nome == "" || nome.length <= 5) {
        alert("Informe o nome completo!");
        formUser.nome.focus();
        return false;
    }

    if (email == "" || !email.includes("@") || email.length <= 5) {
        alert("Informe email corretamente!");
        formUser.email.focus();
        return false;
    }
    //(51) 3344-3344 || (51) 99988-8899
    if (telefone == "" || telefone.length <= 10) {
        alert("Telefone incorreto!");
        formUser.telefone.focus();
        return false;
    }
    //823.951.290-97
    if (cpf = "" || cpf.length != 14) {
        alert("CPF inválido!");
        formUser.cpf.focus();
        return false;
    }
    //53.592.717/0001-36
    if (cnpj == "" || cnpj.length != 18) {
        alert("CNPJ inválido!");
        formUser.cnpj.focus();
        return false;
    }

    if (endereco == "" || endereco.length <= 5) {
        alert("Endereço incompleto!");
        formUser.endereco.focus();
        return false;
    }

    if (senha == "" || senhaR == "" || senha.length < 8 || senhaR.length < 8) {
        alert("Senha inválida!\nA senha não atende os requisitos:\nmínimo 8 caracteres");
        formUser.senha.focus();
        return false;
    }

    if (senha != senhaR) {
        alert("Senha inválida!");
        formUser.senha.focus();
        return false;
    }
}

function confirmaSenha(s) {
    senha = document.getElementById("senha");
    senhaR = s;
    if (senha.value === senhaR.value) {
        senhaR.style.border = "1px solid gray";
    } else {
        senhaR.style.border = "5px solid red";
    }
}

function lerImg() {
    if (this.files && this.files[0]) {
        file = new FileReader();
        file.onload = function (e) {//função anônima
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
    fone.setAttribute("maxlength", "13");
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
        document.getElementById("lanche").innerHTML = "Você selecionou o lanche: " + opSelect;
    }else{
        document.getElementById("lanche").innerHTML = "";
    }
}