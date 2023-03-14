/*
    OBJETIVO: Quando clicar no botão temos que mostrar a imagem de fundo correspondente

    Passo 1 - dar um jeito de pegar o elemento HTML dos botões
    Passo 2 - dar um jeito de identificar o clique do usuário no botão
    Passo 3 - desmarcar o botão selecionado anterior
    Passo 4 - marcar o botão clicado como se estivesse selecionada
    Passo 5 - esconder a imagem anterior
    Passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}






// //  Passo 1 - dar um jeito de pegar o elemento HTML dos botões
// const botoesCarrossel = document.querySelectorAll('.botao');
// const imagens = document.querySelectorAll('.imagem');
//     // Explicando o código: estou criando uma variável e pegando do html 'document' a class .botao
//     // Verificando se peguei o item: console.log(botoesCarrossel);

// // Passo 2 - dar um jeito de identificar o clique do usuário no botão
//     // const botao1 = document.getElementById('botao1');
//     // botao1.addEventListener('click', () => {
//     //     console.log('clicou no botao 1');
//     // });
//     // Poderia se feito dessa forma mas o código se repetiria 6 vezes só alterando o nome do botão. Logo, vamos melhora-lo com o forEach
// botoesCarrossel.forEach((botao, indice) => {
//     botao.addEventListener('click', () => {
        
//         //console.log('Clicou no botao');
//         // Passo 6 - console.log(indice);

//         // Passo 3 - desmarcar o botão selecionado anterior
//         desativarBotaoSelecionado();

//         // Passo 4 - marcar o botão clicado como se estivesse selecionado
//         selecionarBotaoCarrossel(botao);

//         // Passo 5 - esconder a imagem ativa de fundo
//         esconderImagemAtiva();

//         // Passo 6 - fazer aparecer a imagem correspondente ao botão clicado
//         mostrarImagemDeFundo(indice);
//         // console.log(imagens);
//         // Criado um indice para pegar a posição da imagem ao selecionar no for
//     })
// })

// function mostrarImagemDeFundo(indice) {
//     imagens[indice].classList.add('ativa');
// }

// function selecionarBotaoCarrossel(botao) {
//     botao.classList.add('selecionado');
// }

// function esconderImagemAtiva() {
//     const imagemAtiva = document.querySelector('.ativa');
//     imagemAtiva.classList.remove('ativa');
// }

// function desativarBotaoSelecionado() {
//     const botaoSelecionado = document.querySelector('.selecionado');
//     botaoSelecionado.classList.remove('selecionado');
// }