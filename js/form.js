function addTr(){
    var qntdLinhas = document.getElementById("tabela_despesa").rows.length;
    var tabela = document.getElementById("tabela_despesa");
    var novaLinha = tabela.insertRow(qntdLinhas);
    novaLinha.classList.add("despesa");
    var idCategoria = "categoria_" + (qntdLinhas + 1);
    var idDescricao = "descricao_" + (qntdLinhas + 1);
    var idValorUnit = "valor_unitario_" + (qntdLinhas + 1);
    var idQuantidade = "quantidade_" + (qntdLinhas + 1);
    var idValorTotal = "valor_total_" + (qntdLinhas + 1);
    
    var cel1 = novaLinha.insertCell(0);
    var cel2 = novaLinha.insertCell(1);
    var cel3 = novaLinha.insertCell(2);
    var cel4 = novaLinha.insertCell(3);
    var cel5 = novaLinha.insertCell(4);
    var cel6 = novaLinha.insertCell(5);

    cel1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="31" fill="currentColor" class="bi bi-x btn-danger botao__del" data-bs-toggle="modal" data-bs-target="#modal_delete" viewBox="0 0 16 16">' +
                            '<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>' +
                        '</svg>';
    cel1.setAttribute("scope", "row");

    cel2.innerHTML = "<select name='" + idCategoria + "' id='" + idCategoria +"' >" +
                            '<option selected>Escolha a categoria</option>' +
                            '<option value="1">Hospedagem</option>' +
                            '<option value="2">Combustível</option>' +
                            '<option value="3">Alimentação</option>' +
                            '<option value="4">Outra</option>' +
                        '</select>';
    cel2.classList.add("conteudo__despesa");

    cel3.innerHTML = "<input type='text' name='" + idDescricao + "' id='" + idDescricao + "' placeholder='Descrição'>";
    cel3.classList.add("conteudo__despesa");

    cel4.innerHTML = "<input type='number' name='" + idValorUnit + "' id='" + idValorUnit + "' placeholder='R$'>";
    cel4.classList.add("conteudo__despesa");

    cel5.innerHTML = "<input type='number' name='" + idQuantidade + "' id='" + idQuantidade + "' >";
    cel5.classList.add("conteudo__despesa");

    cel6.innerHTML = "<input type='number' name='" + idValorTotal + "' id='" + idValorTotal + "' placeholder='R$' readpnly>";
    cel6.classList.add("conteudo__despesa");
}



