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
    num_jogadores = document.getElementById("numero-jogadores").value;
    var elementoSorteio = document.getElementById("sorteio-botao");
    elementoSorteio.innerHTML += "<div class='sorteio-inserir' id='sorteio-inserir'>"
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
      elementoInserir.innerHTML += "-----------------------------------------------"
      elementoInserir.innerHTML += "<h4>Jogador "+y+" </h4>"
      elementoInserir.innerHTML += "<p>Nome do Jogador/Treinador:</p>"
      elementoInserir.innerHTML += "<input type='text' id='nome-jogador-"+y+"'><br>"
      elementoInserir.innerHTML += "<p>Nome do Time:</p>"
      elementoInserir.innerHTML += "<input type='text' id='nome-time-"+y+"'><br>"

    }
    elementoInserir.innerHTML += "-----------------------------------------------";
    elementoInserir.innerHTML += "<br><button onClick='criarNome()'>Adicionar Nomes</button>";
    
    // ver sobre o .inenrHTML e outerHTML
    //criarNome(num_jogadores)
  }

  function criarNome(){
    function Jogador(id_jogador,nome_jogador,time_jogador){
      this.id_jogador = id_jogador;
      this.nome_jogador = nome_jogador;
      this.time_jogador = time_jogador;
    }
    //teste maroto
    var lista_id_jogador = []
    var lista_nome_jogador = []
    var lista_nome_time = []
    for (var i = 0;num_jogadores>i;i++){
      var idJogador = i
      lista_id_jogador.push(idJogador);
      var nomeJogador = "nome-jogador-"+i
      var nome_jogador = document.getElementById(nomeJogador).value;
      lista_nome_jogador.push(nome_jogador)
      var nomeTime = "nome-time-"+i
      var nome_time = document.getElementById(nomeTime).value;
      lista_nome_time.push(nome_time);
    }
    
    function criarVar(){
      var listaVazia = {};
      for(var i = 0;i<lista_id_jogador.length;i++){
        listaVazia[i] = new Jogador(lista_id_jogador[i],lista_nome_jogador[i],lista_nome_time[i])
      }
      console.log(listaVazia)
    }
    criarVar();
    /*
    console.log(lista_id_jogador);
    console.log(lista_nome_jogador)
    console.log(lista_nome_time);
    for (var i = 0; i<num_jogadores ; i++){
      console.log(i);

    var jogador1 = new Jogador(1,"Lucas","City");
    var jogador2 = new Jogador(2,"Gabriel","Giants");
    var jogador3 = new Jogador(3,"Schneider","Inter");
    var lista_jogadores = [jogador1,jogador2,jogador3];
    */
    for(var i = 0;lista_id_jogador.length>i;i++){
      console.log(i)
      //console.log("Jogador da ID "+lista_jogadores[i].id_jogador+", Nome: "+lista_jogadores[i].nome_jogador+" Time: "+lista_jogadores[i].time_jogador);
    }
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
