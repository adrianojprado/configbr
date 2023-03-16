// Funções Javascript para validação do dígito verificador do CPF e CNPJ
// Javascript functions for CPF and CNPJ validation (verification digits)

function validate_cnpj(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    // Elimina CNPJs inválidos conhecidos
    if (cnpj == '' || cnpj.length != 14 || /^(.)\1+$/.test(cnpj))
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;

};

function validate_cpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf == '' || cpf.length != 11)
        return false;

    if (cpf.match(/\b(.+).*(\1.*){10,}\b/g) != null)
        return false;

    // Valida DVs
    var strCPF = cpf.replace(/\D/g, '');
    var sum;
    var rest;
    sum = 0;

    for (i = 1; i <= 9; i++)
        sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))
        rest = 0;

    if (rest != parseInt(strCPF.substring(9, 10)))
        return false;

    sum = 0;
    for (i = 1; i <= 10; i++)
        sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);

    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))
        rest = 0;

    if (rest != parseInt(strCPF.substring(10, 11)))
        return false;

    return true;
}

