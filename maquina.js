function temaBrasil(){
    document.body.classList.toggle("brasil")
    var elementoDark = document.getElementById("btn-tema-brasil")
    
  }
  
  function temaEspaco(){
    document.body.classList.toggle("space")
    var elementoSpace = document.getElementById("btn-tema-espaco")
  }

  function adicionarJogadores(){
    var num_jogadores = document.getElementById("numero-jogadores").value;
    console.log(num_jogadores)
    var elementoSorteio = document.getElementById("sorteio-botao");
    elementoSorteio.innerHTML += "<div class='sorteio-inserir' id='sorteio-inserir'>"
    elementoSorteio.innerHTML += "<p>"+num_jogadores+"</p>"
    consoleFun(num_jogadores);
    elementoSorteio.innerHTML += "</div>"
  } 

  function consoleFun(num_jogadores){
    console.log("Numero de jogadores: "+num_jogadores)
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
