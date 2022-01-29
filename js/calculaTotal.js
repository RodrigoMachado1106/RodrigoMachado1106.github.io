function calculaTotal() {
    var valorGeral = 0;
    var linhas = $(".despesa");

    linhas.each(function(){
        var valorTotal = $(this).find('input[name^="valor_total"]');
        var total = 0;

        var valorUnit = $(this).find('input[name^="valor_unitario"]').val();
        var quantidade = $(this).find('input[name^="quantidade"]').val()

        total = parseFloat(valorUnit) * parseFloat(quantidade);
        valorGeral += total

        if(total >= 200){
            valorTotal.val(total.toFixed(2)).css("border-color", "red");
        } else {
            valorTotal.val(total.toFixed(2)).css("border-color", "#989898");
        }

        if(valorGeral >= 400){
            $("#total").val(valorGeral.toFixed(2)).css("border-color", "red");
        } else {
            $("#total").val(valorGeral.toFixed(2)).css("border-color", "#989898");
        }    
    });  
  
}
$('#tabela').on('change', 'input', calculaTotal);

