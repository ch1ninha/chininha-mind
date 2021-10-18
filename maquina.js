function temaBrasil(){
    document.body.classList.toggle("brasil")
    var elementoDark = document.getElementById("btn-tema-brasil")
  }
  
  function temaEspaco(){
    document.body.classList.toggle("space")
    var elementoSpace = document.getElementById("btn-tema-espaco")
  }

  var jogadores = [0];
  var timeJoga = [0];

  function adicionarJogadores(){
    var num_jogadores = document.getElementById("numero-jogadores").value;
    var elementoSorteio = document.getElementById("sorteio-botao");
    elementoSorteio.innerHTML += "<div class='sorteio-inserir' id='sorteio-inserir'>"
    elementoSorteio.innerHTML += "<p>"+num_jogadores+"</p>"
    elementoSorteio.innerHTML += "</div>"
    elementoSorteio.innerHTML += "<div class='adicionar-nome' id='adicionar-nome'></div>"

    for(var i = 0;i<num_jogadores;i++){
      jogadores.push("Jogador "+i);
    } 
    jogadores.shift();

    adicionarNome(jogadores); // adicionar os parametros dps
  } 

  function adicionarNome(jogadores){// final da função 
    var elementoInserir = document.getElementById("adicionar-nome");
    elementoInserir.innerHTML += "<p>Nome dos Treinadores</p>"
    for(var y in jogadores){
      elementoInserir.innerHTML += "<p>Jogador "+y+" </p>"
      elementoInserir.innerHTML += "<input type='text' id='nome-jogador-"+y+"'><br>"
    }
    
    elementoInserir.innerHTML += "<br><button onClick='criarNome()'>Adicionar Nomes</button>";
    
    // ver sobre o .inenrHTML e outerHTML
  }




  function criarArray(nJogadores){
    var jogadores = [0];
    for(var i = 0;i<nJogadores;i++){
      jogadores.push("Jogador ");
    }
    jogadores.shift()
    return jogadores
  }


  function consoleFun(num_jogadores){
    console.log("CONSOLEFUN->Numero de jogadores: "+num_jogadores)
    /*
      Criar um objeto para jogadores colocarem o nome deles
    */ 

    /*
      Jogador[i] = time[i];
      jogadores adicionar qual o time deles
      Ao final pedir se é jogos de ida e volta. 
    */

    /*
      Gerar tabela com jogos, dependendo se é ida e volta e tal
    */
  }
