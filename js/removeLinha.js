var $thatRow;

// Quando ocorre um click em uma linha da tabela tr,
// salva essa linha como uma variável global para poder ser usada como ponto de referência onde o click ocorreu
$(document).on('click', '#tabela tbody tr', function(){
    $thatRow = $(this);
});

// Aponta para a nova class adicionada ao botão "SIM" do modal
$('.excluir-trigger').on('click', function(){
    // Aqui remove a linha referida
    $thatRow.remove(); 
});
