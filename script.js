function mascara_nome(nome)
{
    nome.value = nome.value.slice(0,50);
}


function mascara_cep(cep)
{
    var cep_formatado = cep.value;

    cep_formatado = cep_formatado.slice(0,10);

    if (cep_formatado[2] != ".")
    {
        if (cep_formatado[2] != undefined)
        {
            cep.value = cep_formatado.slice(0,2) + "." + cep_formatado[2];
        }
    }

    cep_formatado = cep.value;

    if (cep_formatado[6] != "-")
    {
        if (cep_formatado[6] != undefined)
        {
            cep.value = cep_formatado.slice(0,6) + "-" + cep_formatado[6];
        }
    }
}


function mascara_cpf(cpf)
{
    var cpf_formatado = cpf.value;

    cpf_formatado = cpf_formatado.slice(0,14);

    if (cpf_formatado[3] != ".")
    {
        if (cpf_formatado[3] != undefined)
        {
            cpf.value = cpf_formatado.slice(0,3) + "." + cpf_formatado[3];
        }
    }

    cpf_formatado = cpf.value;

    if (cpf_formatado[7] != ".")
    {
        if (cpf_formatado[7] != undefined)
        {
            cpf.value = cpf_formatado.slice(0,7) + "." + cpf_formatado[7];
        }
    }

    cpf_formatado = cpf.value;

    if (cpf_formatado[11] != "-")
    {
        if (cpf_formatado[11] != undefined)
        {
            cpf.value = cpf_formatado.slice(0,11) + "-" + cpf_formatado[11];
        }
    }
}


function mascara_cnpj(cnpj)
{
    var cnpj_formatado = cnpj.value;

    cnpj_formatado = cnpj_formatado.slice(0,18);

    if (cnpj_formatado[2] != ".")
    {
        if (cnpj_formatado[2] != undefined)
        {
            cnpj.value = cnpj_formatado.slice(0,2) + "." + cnpj_formatado[2];
        }
    }

    cnpj_formatado = cnpj.value;

    if (cnpj_formatado[6] != ".")
    {
        if (cnpj_formatado[6] != undefined)
        {
            cnpj.value = cnpj_formatado.slice(0,6) + "." + cnpj_formatado[6];
        }
    }

    cnpj_formatado = cnpj.value;

    if (cnpj_formatado[10] != "/")
    {
        if (cnpj_formatado[10] != undefined)
        {
            cnpj.value = cnpj_formatado.slice(0,10) + "/" + cnpj_formatado[10];
        }
    }

    cnpj_formatado = cnpj.value;

    if (cnpj_formatado[15] != "-")
    {
        if (cnpj_formatado[15] != undefined)
        {
            cnpj.value = cnpj_formatado.slice(0,15) + "-" + cnpj_formatado[15];
        }
    }
}


function mascara_telefone(tel)
{
    var tel_formatado = tel.value;

    tel_formatado = tel_formatado.slice(0,19);

    if (tel_formatado[0] != "+")
    {
        if (tel_formatado[0] != undefined)
        {
            tel.value = "+" + tel_formatado[0];
        }
    }

    tel_formatado = tel.value;

    if (tel_formatado[3] != " ")
    {
        if (tel_formatado[3] != undefined)
        {
            tel.value = tel_formatado.slice(0,3) + " " + tel_formatado[3];
        }
    }

    tel_formatado = tel.value;

    if (tel_formatado[4] != "(")
    {
        if (tel_formatado[4] != undefined)
        {
            tel.value = tel_formatado.slice(0,4) + "(" + tel_formatado[4];
        }
    }

    tel_formatado = tel.value;

    if (tel_formatado[7] != ")")
    {
        if (tel_formatado[7] != undefined)
        {
            tel.value = tel_formatado.slice(0,7) + ")" + tel_formatado[7];
        }
    }

    tel_formatado = tel.value;

    if (tel_formatado[8] != " ")
    {
        if (tel_formatado[8] != undefined)
        {
            tel.value = tel_formatado.slice(0,8) + " " + tel_formatado[8];
        }
    }

    tel_formatado = tel.value;

    if (tel_formatado[10] != " ")
    {
        if (tel_formatado[10] != undefined)
        {
            tel.value = tel_formatado.slice(0,10) + " " + tel_formatado[10];
        }
    }

    tel_formatado = tel.value;

    if (tel_formatado[15] != "-")
    {
        if (tel_formatado[15] != undefined)
        {
            tel.value = tel_formatado.slice(0,15) + "-" + tel_formatado[15];
        }
    }
}


function enviar_formulario(event)
{
    event.preventDefault();

    document.getElementById("mensagem").style.display = "block";
}
