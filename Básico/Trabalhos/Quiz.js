function correcao(resposta,i){
	while(c<c1){
		if(resposta!="d"){
			if(c<10){
				i = Math.floor(Math.random()*10);
				i2 = i1.indexOf(i);
				while(i2>-1){
					i = Math.floor(Math.random()*10);
					i2 = i1.indexOf(i);
				}
			}
			if(c==10){
				i1 = "";
			}
			if(c>=10){
				i = (Math.floor(Math.random()*(c1-10)))+10;
				i2 = i1.indexOf(i);
				while(i2>-1){
					i = (Math.floor(Math.random()*(c1-10)))+10;
					i2 = i1.indexOf(i);
				}
			}
			i1 = i+","+i1;
			perg = perguntas[i];
			c77 = 2;
		}
		if(pd==1){
			resposta = prompt(perg+"\nPontuação Atual :"+c6 ).toLowerCase();
			while(resposta==""){
					resposta = prompt(perg+"\nPontuação Atual :"+c6 ).toLowerCase();
			}
		}
		if(pd==0){
			resposta = prompt(perg+"\nD-Dica: "+c77+"\nPontuação Atual :"+c6 ).toLowerCase();
			while(resposta==""){
					resposta = prompt(perg+"\nD-Dica: "+c77+"\nPontuação Atual :"+c6 ).toLowerCase();
			}
		}
		if(resposta==r[i]){
			alert("Acertou! ");
			iii = Math.floor(Math.random()*2);
			c77 = 2;
			ii2 = "";
			c++;

			c3++;
		}
		if((resposta!="0")&&(resposta!=r[i])&&(resposta!="d")){
			b = "";
			le = perg.length;
			bb = "";
			while(pr!=0){
				b = perg.charAt(le);
				if((b==" ")&&(bb==" ")){
					pr= 0;
				}
				else{
					le--;
				}
				bb = b;
			}
			le1 = le;
			pr = 1;
			le = perg.length;
			while(pr!=0){
				b = perg.charAt(le);
				if(b==r[i]){
					pr = 0 ;
				}
				else{
					le--;
				}
			}
			pr = 1;
			e = perg.slice(le,le1);
			alert("Errou!\nResposta :"+e);
			iii = Math.floor(Math.random()*2);
			c77 = 2;
			ii2 = "";
			c4++;
			c++;
		}else{
			if(resposta=="d"){
				if(pd!=1){
					iii = Math.floor(Math.random()*2);
					if(c77!=0){
						i3 = ii2.indexOf(iii);
						while(i3>-1){
							iii = Math.floor(Math.random()*2);
							i3 = ii2.indexOf(iii);
						}
						ii2 = ii2+","+iii;
						alert("Dica : "+dd[i][iii]);
						c77--;
						cd++;
					}
					else{
						alert("Excedeu o limite de dicas!");
					}
				}
			}
		}
		c6 = ((c3*5)-(c4*3))-(cd*2);
	}
}
function ponto(c4,c3){
	porcen = (60*c1)/100;
	if((c3>=porcen)&&(cee==-1)){
		c6 = ((c3*5)-(c4*3))-(cd*2);
		alert("Você ganhou está rodada!");
		c8 = c8+c6;
		passe = 0;
		alert("Perguntas :"+c1+"\nPerguntas Acertadas :"+c3+"\nPontuação Total :"+c8);
	}
	cd = 0;
	c3 = 0;
	c4 = 0;
	cee = 0;
}
c77 = 2;
r1 = 0;
bb = "";
v =["Titã preso no Tartaro(aparece no God Of War)\n1-Urano\n2-Atlas  \n3-Gaia\n4-Hipérion\n5-Oceano","Nome do cão de Hades\n1-Scooby-Doo\n2-Rex\n3-Kraken\n4-Cérbero  \n5-Leviatã","Ameaçava os navios no folclore nórdico\n1-Hidra\n2-Fenix\n3-Kraken  \n4-Minotauro\n5-Centauro","Baco deus de que?\n1-Da lua\n2-Dos Mares\n3-Do vinho e das festas  \n4-Do som\n5-Do brilho","Cuida da Bifrost\n1-Thor\n2-Ymir\n3-Loki\n4-Heimdall  \n5-Odin","Protetora das pirâmides e templos\n1-Amut,comedora de almas\n2-Apófis,grande serpente\n3-Esfinge,seladora de destinos  \n4-Mantícora,papa-homens\n5-Quimera,besta grega","Renasce de suas cinzas\n1-Erínia\n2-Ciclope\n3-Djinn\n4-Medusa\n5-Fenix  ","Nome das deusas do destino\n1-As Horas\n2-As Musas\n3-As Sereias\n4-As Ninfas\n5-As Moiras  ","Deus egípcio da guerra e da caça\n1-Vulcano\n2-Tifão\n3-Anhur  \n4-Baco\n5-Anúbis","Deusa da discórdia\n1-Atena\n2-Erís  \n3-Perséfone\n4-Neftis\n5-Helena","Cronos engole cinco de seis filhos. Qual deus não é engolido por seu pai?\n1-Hera\n2-Ares\n3-Afrodite\n4-Zeus  \n5-Zion","Medusa era uma sacerdotisa de qual deusa?\n1-Hera\n2-Reia\n3-Atena  \n4-Deméter\n5-Hestia","Qual animal é representado por Zeus?\n1-Cavalo\n2-Javali\n3-Rato\n4-Coruja\n5-Águia  ","Qual era o nome das lendárias guerreiras gregas que não permitiam que homens entrassem em sua ilha?\n1-Espartanas\n2-Amazonas  \n3-Guerreiras femininas\n4-Lutadores da Grécia\n5-Troianas","Quem derrotou a Hidra?\n1-Hércules  \n2-Aquiles\n3-Teseu\n4-Perseu\n5-Prometeu"];
r1 = ["2","4","3","3","4","3","5","5","3","2","4","3","5","2","1"];
d = [[["Sustenta o mundo"],["Teve 7 ninfas como filhas"]],[["É um guardião"],["Garante que nenhuma alma fuja do mundo dos mortos"]],[["Lula ou polvo Gigante"],["Tem fama de destruir navios"]],[["Baco(mitologia romana) ou Dionísio(na mitologia grega)"],["Sua fama rendeu-lhe vários festivais teatrais em sua honra"]],[["É um guardião"],["Deus dotado de uma incrível visão e audição"]],[["Devorava todos que não conseguiam responder ao seu enigma"],["Monstro com corpo de leão,peito e cabeça de mulher e asas de águia"]],[["Suas lágrimas possuem características curativas"],["Pássaro de fogo"]],[["São três irmãs"],["Fabricavam,teciam e cortavam os fios de vida dos mortais"]],[["Cabeça de leão com um cocar com quatro penas e segurava uma lança na mão direita"],["É um personagem do jogo Smite"]],[["Provocou a Guerra de Troia"],["Um planeta anão tem o mesmo nome desta deusa"]],[["Senhor do Olimpo"],["Possui o raio-mestre"]],[["Deusa da sabedoria e das artes marciais"],["Cidade com seu nome"]],[["Associado a coragem e força"],["Também conhecido como rainha dos céus"]],[["Guerreiras de grandes habilidades que viviam em comunidades exclusivamente femininas"],["Uma das mais famosas da antiguidade é Antíope"]],[["Matou o leão de Neméia"],["Fez os doze trabalhos"]]];
v1 = ["Qual o nome do esporte que e popularmente conhecido como dança nas aguas?\n1-Polo Aquático\n2-Basquete\n3-Nado Sincronizado  \n4-Handebol\n5-Punhobol","Futebol mais jogado nos EUA\n1-Futebol de Areia\n2-Futebol de Salão\n3-Futsal\n4-Futebol Americano  \n5-Futebol de Campo","Esporte praticado sobre uma mesa com rede e uma bola saltitante \n1-Pingue-Pongue  \n2-Basquete\n3-Tênis\n4-Bilhar\n5-Bingo","Uma dessas afirmações está errada \n1-Handebol é um esporte Jogado com as mãos \n2-Futebol é um esporte Jogado com os pés\n3-No Jogo de Boliche existe bola\n4-A Natação é um esporte olímpico\n5-Hipismo é um esporte praticado com porcos  ","A bola mais leve pertence a um dos esportes abaixo \n1-Voleibol\n2-Tênis de mesa  \n3-Futebol de Salão\n4-Handebol\n5-Golfe","Em qual dos esportes abaixo é jogado em um campo,geralmente\n1-Futebol  \n2-Boliche\n3-Handebol\n4-Futebol de salão\n5-Voleibol","Local onde os atletas são premiados após as provas \n1-Tribuna de honra\n2-Arena\n3-Palco\n4-Pódio  \n5-Auditório","Num desses esportes não há um alvo fixo \n1-Boliche\n2-Golfe\n3-Arco e flecha\n4-Tiro ao Alvo\n5-Judô  ","Qual desses esportes Olímpicos a prova acaba mais rápido?\n1-Maratona\n2-Marcha atlética\n3-100 metros rasos  \n4-Futebol\n5-Canoagem","No rugby, ou futebol americano, qual é o formato da bola usada durante o jogo?\n1-Quadrada\n2-Oval  \n3-Redonda\n4-Triangular\n5-Retângular","Esporte onde os competidores usam espadas?\n1-Esgrima  \n2-Hipismo\n3-Ciclismo\n4-Hóquei\n5-Snowboard"];
r2 = ["3","4","1","5","2","1","4","5","3","2","1"];
v2 = ["(DBZ)Quem é o príncipe dos sayajins?\n1-Gohan\n2-Goku\n3-Kuririn\n4-Vegeta  \n5-Madimbu","(POKEMON)Qual é o primeiro pokemon que Ash capitura?\n1-Pikachu\n2-Caterpie  \n3-Bulbasaur\n4-Gyarados\n5-Squirtle","(YU-GI-OH)Criou o jogo MONSTROS DE DUELO\n1-Seto Kaiba\n2-Maximillion Pegasus  \n3-Joey Wheeler\n4-Mokuba Kaiba\n5-Téa Gardner","(CDZ)Qual cavaleiro que possui o poder da espada sagrada?\n1-Shura  \n2-Aldebaran\n3-Milo\n4-Shaka\n5-Camus","(Animes Fate)O anime envolve uma guerra que nunca acaba chamada?\n1-Guerra dos Santos\n2-Guerra Ninja\n3-3° Guerra Mundial\n4-Guerra dos Sete Pecados Capitais\n5-Guerra do Santo Graal  ","(DBZ)Cell tem quantas formas?\n1-1\n2-2\n3-3  \n4-4\n5-5","(NARUTO)Quantos portais Gai abre \n1-5\n2-8  \n3-4\n4-10\n5-12","(Claymore)A guerra constante é contra o que ?\n1-Servos\n2-Animais\n3-Nomus\n4-Youmas  \n5-Demônios","(YU-GI-OH)Qual nome do personagem que possui os Três Dragões Brancos de Olhos Azuis ?\n1-Joey\n2-Mokuba\n3-Téa\n4-Yugi\n5-Seto Kaiba  ","(TOKYO GHOUL)Personagem considerado o mais forte\n1-Kaneki\n2-Coruja  \n3-Touka Kirishima\n4-Shuu Tsukiyama\n5-Amon","(TOKYO GHOUL)Qual apelido de Yakumo Oomori \n1-Jason  \n2-Mado\n3-Amon\n4-Coruja\n5-Macaco Demoníaco","(MAGI)Era escravo(a) e foi salvo(a) \n1-Aladdin\n2-Alibaba Saluja\n3-Judar\n4-Amon\n5-Morgiana  "];
r3 = ["4","2","2","1","5","3","2","4","5","2","1","5"];
d2 = [[["Egoísta e cheio de orgulho"],["Marido de Bulma"]],[["Evolui para Metapod"],["Pokemon tipo inseto"]],[["Possui uma reliquia do milênio em seu olho esquerdo"],["Sequestra o vô de Yugi"]],[["Espada sagrada : Excalibur"],["Santo de capricórnio"]],[["Guerra para conquistar o direito de obter o Cálice"],["Guerra que envolve magos e servos"]],[["Precisa dos dois Androides para evoluir"],["Sua última forma é Perfeita e sua primeira é Imperfeita"]],[["Rock Lee abre os 6 portões(chamado Visão)"],["O último portão se chama Portão da Morte"]],[["Para lutar contra as aberações são implantados carne e sague deles nas mulheres"],["São monstros que podem se transformar em pessoas para se disfarçar"]],[["Irmão de Mokuba"],["Luta contra Exódia de Yugi"]],[["Gerente do Anteiku Café"],["Tenta ajudar os Ghoul"]],[["Tortura por diversão e torturou Kaneki"],["Com cabelos loiros,grandes olhos,dentes afiados,usando terno branco e ele  mede 2 metros"]],[["Descendente do Fanalis"],["Viaja com Alibaba e Aladdin"]]];
v3 = ["Qual a opção de descreve melhor a expressão ESTAR COM A PULGA ATRÁS DA ORELHA? \n1-Descreve um sinal, que em alguns, nasce atrás da orelha\n2-Estar desconfiado, cismado com alguma coisa  \n3-Estar confiante, com muita segurança naquilo que faz\n4-Quer dizer Tristeza, melancolia profunda\n5-Expressa um sentimento de grande alegria, contentamento","Quando se diz, aquele sujeito é BOA PINTA, isso quer dizer que... \n1-Ele é um excelente pintor\n2-Tem boa aparência, anda bem vestido e arrumado  \n3-Tem no rosto um sinal que logo chama a atenção\n4-Esse é um código HACKER; significa Pessoa de Confiança\n5-Que apesar de homem, gosta de se pintar; sabe se pintar","Quando alguém usa a expressão BREGA, está se referindo a... \n1-Uma coisa de vanguarda, avançada demais para o tempo\n2-Coisa fora de moda, fora dos padrões de beleza tradicionais  \n3-Coisa difícil de se conseguir\n4-Indica um estado de meditação entre os orientais\n5-Uma frase usada por jornalistas, quer dizer, Aquele que sabe","Qual das opções descreve melhor a expressão: CASA DA MÃE JOANA? \n1-Lugar bagunçado, onde não há disciplina, onde não há regras  \n2-Lugar que prima pela ordem, onde há extrema disciplina\n3-Local de meditação, que lembra o colo de uma mãe\n4-Trata-se de um local onde é servida uma excelente comida\n5-Uma espécie de pousada, cuja dona se chama Joana","Uma pessoa chamada de CARRAPATO é... \n1-Alguém que está sempre colado nos outros, o tempo todo  \n2-Alguém de grande estatura, com as mãos enormes\n3-Alguém com muita sorte nos jogos\n4-Trata-se de um termo usado para descrever quem cria Patos\n5-Vem de uma tradição entre os índios, significa, Simpatia","A expressão BATER BOCA é melhor descrita por qual das opções abaixo? \n1-Trata-se de alguém com muito frio, por isso seus lábios batem\n2-Termo usado entre os dentistas, significa, Arrancar um dente\n3-Discussão Exaltada  \n4-Trata-se do ato de se confessar numa igreja, contar os pecados\n5-Refere-se às bocas de lobo da rua, o ato de vedá-las, lacrá-las","Alguém chamado de CABEÇA OCA, está sendo chamado de que? \n1-De inteligente, de idéias claras, excelente memória\n2-É um elogio, quer dizer, pessoa íntegra, de grande moral\n3-Índio construtor de canoas, já que ele retira o miolo dos troncos\n4-Cavador de poços profundos\n5-Bobão,meio abobalhado  ","Uma mulher chamada de PERUA, está sendo chamada de que? \n1-Melancólica(Depressão)\n2-Que não sabe cantar com entonação\n3-Que sabe preparar pratos exóticos\n4-Mulher que se veste de forma extravagante, ou excêntrica  \n5-É uma expressão para rotular quem tem unhas grandes, nos pés","O que quer dizer UM DIA DA CAÇA OUTRO DO CAÇADOR?\n1-Que você caça alguns e é caçado por outros\n2-Sua posição na cadeira alimentar\n3-Que um dia você pode ser dar bem e no outro não  \n4-Coma tudo ou será comido\n5-Caçe mais e aprenda a ser melhor","Qual o significado da frase SE CORRER O BICHO PEGA,SE FICAR O BICHO COME?\n1-Que se você voar ninguém te pega\n2-Uma frase para você tentar achar alguma saída\n3-Que você está cercado\n4-Que não importa nada,você será pego de qualquer jeito  \n5-Pra você correr","O que significa PAGAR O PATO?\n1-Que você deve ir pagar um pato\n2-Que você comprou e não pagou o pato\n3-Que o pato ta cobrando a dívida\n4-Que você vai sofrer consequências de algo  \n5-Que a mamãe pato que você pague pelo pato dela","O que siginifica BICHO DE SETE CABEÇAS\n1-Apelido carinho as mães\n2-Que é um problema sério  \n3-Prova de matemática\n4-Que tem um bicho de sete cabeças por ai\n5-Gíria usada que está tudo na paz"];
r4 = ["2","2","2","1","1","3","5","4","3","4","4","2"];
v4 = ["Iceberg lembra que filme? \n1-Piratas do Caribe\n2-Titanic  \n3-Lagoa Azul\n4-Cidade dos Anjos\n5-Faroeste Caboclo","Série que tem dois irmãos como personagens principais :\n1-The Walking Dead\n2-Flash\n3-Arrow\n4-Supernatural  \n5-SmallVille","Devido suas ações, o protagonista é banido para a Terra:\n1-Hércules\n2-Thor  \n3-Percy Jackson:Ladrão de Raios\n4-Os Vingadores\n5-Conan:O Barbaro","Uma das famílias mais conhecidas do mundo :\n1-Os Incríveis\n2-Os Addams\n3-Os Simpsons  \n4-Os Flintstones\n5-Meu Malvado Favorito","No filme há um lugar chamado Colmeia :\n1-Anjos da Noite:Underworld\n2-G.I Joe:A Origem da Cobra\n3-O Pacto\n4-O Escorpião Rei 3\n5-Resident Evil:O Hóspede Maldito  ","O vilão do filme tem a cabeça vermelha :\n1-Capitão América:O Primeiro Vingador  \n2-Os Vingadores\n3-Hulk\n4-X-Men Origens:Wolverine\n5-Demolidor:O Homem Sem Medo","Trabalha para um caranguejo :\n1-Karatê Kid:A Hora da Verdade\n2-Toy Story\n3-Bob Esponja  \n4-As Tartarugas Ninjas\n5-Deu a Louca na Chapeuzinho","Desenho animado onde existe um personagem chamado Dick Vigarista que sempre anda acompanhado de um cachorro chamado Muttley :\n1-Tom e Jerry\n2-Corrida Maluca  \n3-Os Flintstones\n4-Turma da Mônica\n5-Ben 10","Protagonista do filme Eu Sou a Lenda também participou do filme :\n1-Homens de Preto  \n2-Jogos Vorazes\n3-Matrix\n4-Hércules\n5-Superman","De que filme Johnny Depp participa ?\n1-Resident Evil\n2-Godzilla\n3-Piratas do Caribe  \n4-Velozes e Furiosos\n5-Harry Potter","Em qual filme há uma luta contra três T-Rex :\n1-Anaconda\n2-Godzilla\n3-Megalondon\n4-King Kong  \n5-Jurassic Park","Em Jurassic World qual destes é marinho?\n1-Indominus Rex\n2-Velociraptor\n3-T-Rex\n4-Pteranodonte\n5-Mosassauro  ","Qual destes filmes aparece Kaiju?\n1-Anaconda\n2-Godzilla\n3-Fúria de Titãs\n4-Morte súbita\n5-Pacific Rim  "];
r5 = ["2","4","2","3","5","1","3","2","1","3","4","5","5"];
v5 = ["Foi feito um filme de um certo jogo ,qual?\n1-Perfect World\n2-Agario\n3-Drakensang\n4-World of Warcraft  \n5-Pokemon Red","Jogo com uma grande sequência medieval falida\n1-Jurassic Park\n2-Sparta:War of Empire\n3-Age of Empire  \n4-Cossacks\n5-Need for Speed","Qual jogo fps recente comompleta 4 anos?\n1-Crossfire  \n2-Point Blank\n3-Minecraft\n4-Paladins\n5-Overwatch","Qual destes jogos você pode ter um exército maior?\n1-Dragon of Atlantis  \n2-Age Of Empire\n3-Grepolis\n4-Sparta:War of empires\n5-DarkOrbit","Mesmo sendo um jogo de browser seus gráficos continuam sendo bons\n1-Anno online  \n2-DDTank\n3-Yugioh Online\n4-Transformice\n5-Slitherio","Jogo 3ª pessoa de dinossauro \n1-Dinorun\n2-Dino Crisis\n3-Primal Carnage\n4-Ark:Survival Evolved\n5-Dino Storm  ","Arena de destruição de carros\n1-Need for speed\n2-Traffic Slam  \n3-GTA IV\n4-Titanfall\n5-Freefall Tournament","FPS de robos \n1-Freefall tournament  \n2-The Land of Dead\n3-Street Fighter\n4-Day of Monsters\n5-Shark Mountain","Tarefa de derrotar 12 monstros \n1-Aion\n2-Tera\n3-Drakensang\n4-Shadow of the Colossus  \n5-Elsword","Jogo de sobrevivência \n1-Left for Dead 2\n2-Pacific Run\n3-Stealth Hunter 2\n4-Ninja Zero\n5-Ark  "];
r6 = ["4","3","1","1","1","5","2","1","4","5"];
alert("Bem Vindo(a) ao Quiz");
alert("Neste jogo você escolherá uma categoria que fará perguntas no geral,os pontos serão contados da seguinte maneira\nAcertos : 5 pontos\nErros : -3 pontos\nDica : -2\nCaso houver empate o primeiro que tirou a nota fica com o lugar\nA cada categoria você terá de tirar acima de 60% dos pontos para prosseguir para outra categoria com direito de duas dicas dependendo da categoria\nVocê poderá competir com seus amigos,escolham as categorias que vocês iram competir e no final será apresentado um ranking das 5 melhores notas\nNotas negativas não iram a ranking\nBom Jogo!!!");
var categoria = "",cat = -1,cattt;
var por = 0,iii = Math.floor(Math.random()*2),porcen = -1,e = "",caa = "",pd = 0,ii2 = "",jn = "",dd = "",pr = 1,cv8 = 1;
var c8 = 0,cd = 0,cee = 0,jn = "",pp = 1,ss = "",c88 = 0,passe = 0,jn1 = 0;
var pri = "",prin = 0,seg = "",segn = 0,ter = "",tern = 0,qua = "",quan = 0,qui = "",quin = 0;
rankingg = "Ranking \n1° "+pri+"---"+prin+"\n2° "+seg+"---"+segn+"\n3° "+ter+"---"+tern+"\n4° "+qua+"---"+quan+"\n5° "+qui+"---"+quin;
a = "    ";
c2 = a.length;
jog = 0;
while(c2!=0){
	if(a!="    "){
		alert("Escolha pelo menos uma categoria");
	}
	alert("Coloque a letra indicada de cada categoria,exemplo : MGHE");
	a = prompt("Escolham as categorias que iram competir :\nM-Mitologia\nG-Games\nF-Filmes/Séries/Anime\nE-Esporte\nH-Heróis\nP-Expressões Populares").toUpperCase();
	c2  = a .length;
	jn1 = a.indexOf("M");
	jn2 = a.indexOf("G");
	jn3 = a.indexOf("F");
	jn4 = a.indexOf("E");
	jn5 = a.indexOf("H");
	jn6 = a.indexOf("P");
	if((jn1==-1)&&(jn2==-1)&&(jn3==-1)&&(jn4==-1)&&(jn5==-1)&&(jn6==-1)){
		c2 = 1;
	}else{
		c2 = 0;
	}
	if(a==""){
		c2 = 1;
	}
}
catt  = "";
c1 = 0;
c2  = a .length;
catt12 = "";
while(c1!=c2){
	b = a.charAt(c1);
	pro = catt12.indexOf(b);
	if(pro==-1){
		switch(b){
			case "M":
				catt = "M-mitologia             \n"+catt;
				catt12 = "M,"+catt12;
				jog++;
			break;
			case "G":
				catt = "G-games                 \n"+catt;
				catt12 = "G,"+catt12;
				jog++;
			break;
			case "F":
				catt = "F-filmes/séries/anime   \n"+catt;
				catt12 = "F,"+catt12;
				jog++;
			break;
			case "E":
				catt = "E-esporte               \n"+catt;
				catt12 = "E,"+catt12;
				jog++;
			break;
			case "H":
				catt = "H-heróis                \n"+catt;
				catt12 = "H,"+catt12;
				jog++;
			break;
			case "P":
				catt = "P-expressões Populares  \n"+catt;
				catt12 = "P,"+catt12;
				jog++;
			break;
		}
	}
	c1++;
}
c = 0;
c1 = 0;
jn1 = 1;
c88 = jog;
catj = catt;
while(cat!=0){
	if((c88==0)||(jn1==1)){
		jn1 = 0;
		nome = prompt("Qual seu nome ou nick?");
		if(nome!=""){
			jn1 = 1;
		}
		while(jn1!=1){
			nome = prompt("Qual seu nome ou nick?");
			if(nome!=""){
				jn1 = 1;
			}
		}
		passe = 0;
	}
	while(passe!=1){
		categoria = "   ";
		cattt = categoria.length;
		while(cattt!=0){
			categoria = prompt("Escolha uma categoria--------------------------------Número de jogadas restantes :"+c88+"\n"+catj+"0-Encerrar jogada").toUpperCase();
			cattt  = categoria .length;
			if(cattt==1){
				jn1 = categoria.indexOf("M");
				jn2 = categoria.indexOf("G");
				jn3 = categoria.indexOf("F");
				jn4 = categoria.indexOf("E");
				jn5 = categoria.indexOf("H");
				jn6 = categoria.indexOf("P");
				if((jn1>-1)||(jn2>-1)||(jn3>-1)||(jn4>-1)||(jn5>-1)||(jn6>-1)){
					cattt = 0;
					cee=caa.indexOf(categoria);
				}else{
					if(categoria!=0){
						alert("Escolha uma categoria disponível");
						cattt = 1;
					}
				}
				if(categoria==""){
					cattt = 1;
				}
				jn1 = catt12.indexOf(categoria);
				if(jn1==-1){
					cattt = 1;
				}else{
					cattt = 0;
					ss1 = ss.indexOf(categoria);
					if(ss1==-1){
						ss = ss+categoria;
						passe = 1;
						b = 0;
						bbb = catj.charAt(b);
						while(bbb!=categoria){
							b++;
							bbb = catj.charAt(b);
						}
						b222 = "";
						b1 = b+25;
						b222 = catj.slice(b,b1);
						catj = catj.replace(b222,"");
					}
					if(ss1>-1){
						alert("Escolha uma categoria diferente!");
						cee = 0;
						cv8 = 0;
					}
				}
				if(categoria=="0"){
					cat = 0;
					cattt = 0;
					passe = 1;
				}
			}else{
				alert("Escolha uma categoria colocando a letra indicada");
				cattt = 1;
			}
		}
	}
	cattt = categoria.length;
	switch(categoria){
		case "M" : 
			perguntas = v;
			r = r1;
			c1 = perguntas.length;
			pd = 0;
			dd = d;
		break;
		case "E" :
			perguntas = v1;
			r = r2;
			c1 = perguntas.length;
			pd = 1;
		break;
		case "H" :
			perguntas = v2;
			r = r3;
			c1 = perguntas.length;
			pd = 0;
			dd = d2;
		break;
		case "P" :
			perguntas = v3;
			r = r4;
			c1 = perguntas.length;
			pd = 1;
		break
		case "F" :
			perguntas = v4;
			r = r5;
			c1 = perguntas.length;
			pd = 1;
		break;
		case "G":
			perguntas = v5;
			r = r6
			c1 = perguntas.length;
			pd = 1;
		break;
	}
	jn1 = 0;
	c88--;
	cv8 = 1;
	c = 0;
	c2 = 0;
	c3 = 0;
	c4 = 0;
	c6 = 0;
	c7 = 0;
	i = 0;
	i1 = "";
	i2 = "";
	perg = "";
	resposta = "";
	if(cat!=0){
		correcao(resposta,i);
		ponto(c4,c3);
		if(c6<porcen){
			alert("Você perdeu");
			cat = 0 ;
		}
		c3 = 0;
	}
	if((categoria=="0")||(c88==0)||(c6<porcen)){
		if(c8>prin){
			quin = quan;
			qui = qua;
			quan = tern;
			qua = ter;
			tern = segn;
			ter = seg;
			segn = prin;
			seg = pri;
			prin = c8;
			pri = nome;
		}else{
			if(c8>segn){
				quin = quan;
				qui = qua;
				quan = tern;
				qua = ter;
				tern = segn;
				ter = seg;
				segn  = c8;
				seg = nome;
			}else{
				if(c8>tern){
					quin = quan;
					qui = qua;
					quan = tern;
					qua = ter;
					tern = c8;
					ter = nome;
				}else{
					if(c8>quan){
						quin = quan;
						qui = qua;
						quan = c8;
						qua = nome;
					}else{
						if(c8>quin){
							quin = c8;
							qui = nome;
						}
					}
				}
			}
		}
		rankingg = "Ranking \n1° "+pri+"---"+prin+"\n2° "+seg+"---"+segn+"\n3° "+ter+"---"+tern+"\n4° "+qua+"---"+quan+"\n5° "+qui+"---"+quin;
		jn1 = 0;
		c6 = 0;
		if(c88==0){
			cat = -1;
			if(categoria!="0"){
				alert("Acabou sua vez!");
			}
		}
		while(jn1!=1){
			jn = prompt("O próximo jogador deseja continuar? \n1-Sim\n2-Não");
			if((jn=="1")||(jn=="2")){
				jn1 = 1;
			}
		}
		if(jn=="1"){
			ss = "";
			cat = 1;
			c8 = 0;
			c88 = jog;
			catj = catt;
		}
		if(jn=="2"){
			alert(rankingg);
			alert("Fim de jogo");
			cat = 0;
		}
	}
}