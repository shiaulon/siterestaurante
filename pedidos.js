let produtoSelecionado = '';
let precoSelecionado = '';

function abrirDialogo(produto, preco) {
    produtoSelecionado = produto;
    precoSelecionado = preco;
    document.getElementById('produtoSelecionado').textContent = `Produto: ${produto} - Preço: R$ ${preco}`;
    document.getElementById('pedidoDialog').style.display = 'flex';
}

function fecharDialogo() {
    document.getElementById('pedidoDialog').style.display = 'none';
}

function confirmarPedido() {
    const numeroMesa = document.getElementById('mesa').value;

    if (numeroMesa) {
        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidos.push({
            produto: produtoSelecionado,
            preco: precoSelecionado,
            mesa: numeroMesa
        });
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
        fecharDialogo();
        alert('Pedido confirmado!');
    } else {
        alert('Por favor, insira o número da mesa.');
    }
}
