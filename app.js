//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista dos nomes salvos
let amigos = [];

// Função para adicionar Nomes a lista
function adicionarAmigo() {
    let nomeSalvo = document.querySelector('input').value;     
    let nomeNormalizado = nomeSalvo.toLocaleUpperCase();

//Condição para não repetir nome
    if (amigos.includes(nomeNormalizado)) {
        alert('Não é possível digitar o mesmo nome');
        return;
    }

    amigos.push(nomeNormalizado);
//Condição para não ser inserido nome vázio    
    if(nomeSalvo == ''){
       alert('Digite um nome no campo indicado para prosseguir');
       return; 
    }
    
    atualizarLista();
}

//Função para mostrar lista
function atualizarLista(){
    const lista = document.getElementById('listaAmigos')
    lista.innerHTML = ''; 

    amigos.forEach((amigo)=> {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
     });  
 }
// Função para sortear Nome do amigo
function sortearAmigo(){
    if(amigos == 0){
       alert('Digite pelo menos um amigo para sortear');
    }else{
        let escolhaAleatoria = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[escolhaAleatoria];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo sorteado é ${amigoSorteado}😊😊`;   
    }
}

