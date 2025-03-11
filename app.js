//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


function adicionarAmigo() {
    const input = document.getElementById('amigo'); 
    const nomeAmigo = input.value.trim(); 

  
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido!');
    } else {
        amigos.push(nomeAmigo); 
        
        atualizarLista();

        
        input.value = '';
        input.focus();
    }
}


function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos'); 

    
    listaAmigos.innerHTML = '';

    
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
    } else {
        
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

        
        const resultado = document.getElementById('resultado');
        resultado.textContent = 'O amigo secreto sorteado é: ' + amigoSorteado;
    }
}