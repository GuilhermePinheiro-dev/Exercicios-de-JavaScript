const ListadeFrutas = document.getElementById('listaDeFrutas')

const frutas = ['Banana', 'Maçã', 'Uva']

frutas.forEach(fruta => {
    const itemLista = document.createElement('li')

    itemLista.textContent = fruta

    ListadeFrutas.appendChild(itemLista)
})


const products = [
    {
        id: 1,
        name: "Camiseta Dev em Dobro Preta",
        image: "./assets/camiseta-1.png",
        price: 3500,
        color: "Preto",
        size: "M",
    },
    {
        id: 2,
        name: "Camiseta Dev em Dobro Roxa",
        image: "./assets/camiseta-2.png",
        price: 2500,
        color: "Roxa",
        size: "G",
    },
    {
        id: 3,
        name: "Camiseta Dev em Dobro Preta - Costas",
        image: "./assets/camiseta-1-costas.png",
        price: 1500,
        color: "Preto",
        size: "G",
    },
    {
        id: 4,
        name: "Camiseta Dev em Dobro Roxa - Costas",
        image: "./assets/camiseta-2-costas.png",
        price: 6000,
        color: "Roxa",
        size: "M",
    },
    {
        id: 5,
        name: "Caneca Dev em Dobro",
        image: "./assets/caneca.png",
        price: 500,
        color: "Branca",
        size: 'M',
    },
]

const listaDeprodutos = document.getElementById('listaDeProdutos')

const renderizarProdutos = () => {
    listaDeprodutos.innerHTML = products.map(produto => {
        return `
        <li>
            <img src="${produto.image}">
            <p>${produto.name}</p>
            <p>Cor: ${produto.color}</p>
            <p> Preço: R$ ${produto.price}</p>
        </li>
        `
}).join("")
}
renderizarProdutos()