function desenharCartela() {
    gerarCartela();
    //seleciono onde eu quero criar o elemento
    const pai_div_cartela = document.getElementById('body_cartelas');

    //crio uma div para minha cartela
    const div_cartela = document.createElement('div');
    div_cartela.className = 'cartela';


    //insiro a div dentro do pai
    pai_div_cartela.appendChild(div_cartela)

    //criar um elemento de texto para o nome do jogador

    const h4_jogador = document.createElement('h4')
    h4_jogador.innerText = 'Nome Jogador';

    //Inserir o nome do jogador na div
    div_cartela.appendChild(h4_jogador);

    //criar a tabela do bingo
    const tabela = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    //vamos criar os elementos do thead
    const thB = document.createElement('th');
    const thI = document.createElement('th');
    const thN = document.createElement('th');
    const thG = document.createElement('th');
    const thO = document.createElement('th');

    thB.innerText = 'B'
    thI.innerText = 'I'
    thN.innerText = 'N'
    thG.innerText = 'G'
    thO.innerText = 'O'

    //inserir os ths no thead
    thead.appendChild(thB);
    thead.appendChild(thI);
    thead.appendChild(thN);
    thead.appendChild(thG);
    thead.appendChild(thO);

    for (var i = 0; i < 5; i++) {
        const tr = document.createElement('tr');
        for (var j = 0; j < 5; j++) {
            const td = document.createElement('td');
            td.innerText ='x';
            tr.appendChild(td);

        }
        tbody.appendChild(tr);
    }





    //inserir na tabela
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    div_cartela.appendChild(tabela);


}

gerarCartela(){
    
    var cartela = [];
   
    while(cartela.length < 25){
        var aleatorio = Math.floor(Math.random()*75 + 1);
        if(!cartela.includes(aleatorio)){
            cartela.push(aleatorio);
        }
    }
    
 
    console.log(cartela);
    return cartela;
}

