function ValidarCPF()
{
    let cpf = document.getElementById("txt-cpf").value;
    let token = "15036|F2xp8En9z952qL40qnpvSujDiiDaX3sA";
    let url = `https://api.invertexto.com/v1/validator?token=${token}&value=${cpf}&type=cpf`;

    fetch(url).then(function(Response){
        Response.json().then(function(data){
            mudarhtml(data);
        })
    })
}

function mudarhtml(dados){
    let resul = document.querySelector("#resul");
    if(dados.valid == true){
        resul.innerHTML = `<h3 id="resul">CPF Válido</h3>`;
        resul.style.color = "green";
    } else {
        resul.innerHTML = `<h3 id="resul">CPF Inválido</h3>`;
        resul.style.color = "red";
    }
}
