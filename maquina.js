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
    elementoSorteio.innerHTML += "<div class='adicionar-nome' id='adicionar-nome'>"

    for(var i = 0;i<num_jogadores;i++){
      jogadores.push("Jogador "+i);
    } 
    jogadores.shift();
    elementoSorteio.innerHTML += '</div>';
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
    
    // removendo os elementos dos botoes iniciais = Quantos jogadores
    var elementoQuntJogadores = document.getElementById("qunt-jogadores");
    var elementoBtnQuntJogadores = document.getElementById("btn-qunt-jogadores");
    var elementoNumeroJogadores = document.getElementById("numero-jogadores");
    elementoQuntJogadores.remove();
    elementoBtnQuntJogadores.remove();
    elementoNumeroJogadores.remove();
    // ver sobre o .inenrHTML e outerHTML
    //criarNome(num_jogadores)
  }

  function criarNome(){
    // criando funcao para criar classe dos jogadores
    function Jogador(id_jogador,nome_jogador,time_jogador){
      this.id_jogador = id_jogador;
      this.nome_jogador = nome_jogador;
      this.time_jogador = time_jogador;
      this.pontos_jogador = 0;
      this.vitorias_jogador = 0;
      this.empates_jogador = 0;
      this.derrotas_jogador = 0;
      // criar lugar para pontuação
    }
    //criando listas para pegar elementos dos treinados/times
    var lista_id_jogador = []
    var lista_nome_jogador = []
    var lista_nome_time = []
    for (var i = 0;num_jogadores>i;i++){
      var id_jogador = "id_"+i
      lista_id_jogador.push(id_jogador);
      var nomeJogador = "nome-jogador-"+i
      var nome_jogador = document.getElementById(nomeJogador).value;
      lista_nome_jogador.push(nome_jogador)
      var nomeTime = "nome-time-"+i
      var nome_time = document.getElementById(nomeTime).value;
      lista_nome_time.push(nome_time);
    }

    // funcao para instanciar classe e criar objeto dos jogadores
    function criarJogadores(){
      lista_jogadores = [];
      lista_partidas = [];
      for(var i = 0;i<lista_id_jogador.length;i++){
        lista_jogadores[i] = new Jogador(lista_id_jogador[i],lista_nome_jogador[i],lista_nome_time[i])
      }
      tabelaResultados();
      return lista_jogadores
    }
    criarJogadores();
    var num_partida = 0;
    function Partida(id_partida,num_partida,time_1,time_2){
      this.id_partida = id_partida;
      this.num_partida = num_partida;
      this.time_1 = time_1;
      this.gols_time_1 = 0;
      this.time_2 = time_2;
      this.gols_time_2 = 0;
    };
    var k = 0;
    var id_partida = '';
    for(var i = 0;lista_id_jogador.length>i;i++){
      for(var j = 0;lista_id_jogador.length>j;j++){
        if(lista_jogadores[i].id_jogador != lista_jogadores[j].id_jogador){
          num_partida = num_partida + 1;
          console.log("Jogo "+num_partida+" | "+lista_jogadores[i].time_jogador+" x "+lista_jogadores[j].time_jogador);
          id_partida = 'id_partida_'+num_partida;
          lista_partidas[k] = new Partida(id_partida,num_partida,lista_jogadores[i].time_jogador,lista_jogadores[j].time_jogador);
          k ++;
        }
      }
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

  function tabelaResultados(){
    var elemento_resultado = document.getElementById("sorteio-resultado");
    console.log(elemento_resultado);
    var elemento_remover = document.getElementById("resultado-remover");
    elemento_resultado.innerHTML = "<table id='tabela-partidas' style='width:100%'><thead><tr id='cabecalho-tabela'>"
    var elemento_cabecalho_tabela = document.getElementById("cabecalho-tabela")
    elemento_cabecalho_tabela.innerHTML += '<th>Partida Número (id)</th>'
    elemento_cabecalho_tabela.innerHTML += '<th>Time de Casa</th>'
    elemento_cabecalho_tabela.innerHTML += '<th>Time de Fora</th>'
    elemento_cabecalho_tabela.innerHTML += '<th>Gols Casa</th>'
    elemento_cabecalho_tabela.innerHTML += '<th>Gols Fora</th>'
    elemento_cabecalho_tabela.innerHTML += '</tr></thead>'
    elemento_cabecalho_tabela.insertBefore += '<tbody id="tabela-resultados-partidas"></tbody>'
    var newBody = document.createElement('p');
    var textoBody = document.createTextNode("teste");
    newBody.appendChild(textoBody);
    //elemento_remover.remove();
    var elemento_resultado_partida = document.getElementById("tabela-resultados-partidas");
    elemento_resultado_partida.innerHTML += '<tr id="body-tabela">'
    var elemento_body_tabela = document.getElementById("body-tabela");
    // adicionando a tabela inicial
    //elemento_resultado = '<div id="tabela-partidas">'
    console.log("Lista Jogadores: "+lista_jogadores.length);
    for(var i = 0;lista_jogadores.length>i;i++){
      console.log(i);
      
      elemento_body_tabela.innerHTML += '<td>' + lista_jogadores[i].nome_jogador + '</td>'
    }
    elemento_resultado_partida.innerHTML += '</tr>'
    //elemento_resultado.innerHTML += '</div>'
  }