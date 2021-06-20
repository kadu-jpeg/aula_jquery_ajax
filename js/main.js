function consultaCep() {
    
    let cep = document.getElementById("caixaCep").value;
    let url = "https://viacep.com.br/ws/"+ cep +"/json/";
    
    $(".progress").show();
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            $("#cep").html(response.cep)
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $(".tabela").show();
            $(".progress").hide();
            //document.getElementById("logradouro").innerHTML = "Logradouro: " + response.logradouro;
        }
    })
}

$(function(){
    $(".tabela").hide();
    $(".progress").hide();
});
