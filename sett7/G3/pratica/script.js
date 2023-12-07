const listaLivros = document.querySelector('.row');
const carrinho = document.getElementById('carrinho');

function adicionarAoCarrinho(livro) {
    const item = document.createElement('li');
    item.textContent = `${livro.title} - ${livro.price} USD`;
    item.classList.add('list-group-item');
    carrinho.appendChild(item);

    // Persistir dados do carrinho no localStorage
    const carrinhoLivros = JSON.parse(localStorage.getItem('carrinhoLivros')) || [];
    carrinhoLivros.push(livro);
    localStorage.setItem('carrinhoLivros', JSON.stringify(carrinhoLivros));
  
}

function removerDoCarrinho(livro) {
    const livros = JSON.parse(localStorage.getItem('carrinhoLivros')) || [];
    const index = livros.findIndex(l => l.id === livro.id);
    if (index !== -1) {
        livros.splice(index, 1);
        localStorage.setItem('carrinhoLivros', JSON.stringify(livros));
    }
}

async function listarLivros() {
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/books');
        const livros = await response.json();
        livros.forEach(livro => {
            const coluna = document.createElement('div');
            coluna.classList.add('col-md-4');

            const card = document.createElement('div');
            card.classList.add('card');

            const cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top');
            // cardImg.className = 'w-50';
            cardImg.src = livro.img;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = livro.title;

            const cardPrice = document.createElement('p');
            cardPrice.classList.add('card-text');
            cardPrice.textContent = `Preço: ${livro.price} USD`;

            const botaoScarta = document.createElement('button');
            botaoScarta.classList.add('btn', 'btn-danger', 'bg-gradient');
            botaoScarta.textContent = 'Scarta';
            botaoScarta.addEventListener('click', () => coluna.remove());

            const botaoCompra = document.createElement('button');
            botaoCompra.classList.add('btn', 'bg-success', 'bg-gradient', 'text-light');
            botaoCompra.textContent = 'Comprar';
            botaoCompra.addEventListener('click', () => adicionarAoCarrinho(livro));

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardPrice);
            cardBody.appendChild(botaoCompra);
            cardBody.appendChild(botaoScarta);
            

            card.appendChild(cardImg);
            card.appendChild(cardBody);

            coluna.appendChild(card);

            listaLivros.appendChild(coluna);
        });
    } catch (error) {
        console.error('Erro ao listar livros:', error);
    }
}

function carregarCarrinho() {
    const carrinhoLivros = JSON.parse(localStorage.getItem('carrinhoLivros')) || [];
    carrinhoLivros.forEach(livro => {
        const item = document.createElement('li');
        item.textContent = `Titulo do livro: ${livro.title} - Preço: ${livro.price} USD`;
        item.classList.add('list-group-item');
        carrinho.appendChild(item);
    });
}

function adicionarAoCarrinho(livro) {
    // Código existente
    const item = document.createElement('li');
    item.id = `livro-${livro.id}`;
    item.textContent = `Titulo do livro: ${livro.title} - Preço: ${livro.price} USD`;
    item.classList.add('list-group-item');
    carrinho.appendChild(item);

    // Adicionar botão para excluir
    const botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('btn', 'btn-danger', 'btn-sm');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', () => {
        excluirDoCarrinho(livro.id);
    });
    item.appendChild(botaoExcluir);
}

function excluirDoCarrinho(id) {
    const item = document.getElementById(`livro-${id}`);
    item.remove();
}


carrinho.addEventListener('DOMSubtreeModified', () => {
    let total = 0;
    const livros = carrinho.getElementsByTagName('li');
    for (let i = 0; i < livros.length; i++) {
        const preco = livros[i].textContent.match(/\d+(\.\d+)?/);
        if (preco) {
            total += parseFloat(preco[0]);
        }
    }
    document.getElementById('precoTotal').textContent = `${total.toFixed(2)} USD`;
});

listarLivros();
carregarCarrinho();
