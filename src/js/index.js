/*
O que precisamos fazer? - Quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grannde do personagem que está selecionado

    OBJETIVO 1 - Quando passar o mouse em cima o personagem na listagem, devemos selecioná-lo
        passo 1 - pegar ps personagens no JS para poder verificar quando o usuário passar o mouse em cima deles.

        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

        passo 3 - verficar se já exista um personagem selecionado, se sim, devemos remover a seleção dele

    OBEJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nomw e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande
*/

// OBJETIVO 1 - Quando passar o mouse em cima o personagem na listagem, devemos selecioná-lo
// passo 1 - pegar ps personagens no JS para poder verificar quando o usuário passar o mouse em cima deles.

const personagens = document.querySelectorAll('.personagem');


// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //passo 3 - verficar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
        //remover Selecção dos personagens:
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');        //console.log('mouse entrou na li');

        //OBEJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nomw e a descrição do personagem grande

        //passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
        //Alterar imagem Persornnagem selecionado: 
        const imagemPersonagemGrande = document.querySelector('.personagem-grande'); //console.log(imagemPersonagemGrande)

        //passo 2 - alterar a imagem do personagem grande
         //Alterar imagem Persornnagem selecionado: 
        const idPersonagem = personagem.attributes.id.value; 
        imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;

        //passo 3 - alterar o nome do personagem grande
        //Alterar nome do personagem selecionado:
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //passo 4 - alterar a descrição do personagem grande
        //Alterar nome a descrição dos personagens:
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})