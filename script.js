const nomeCavaleiro = document.getElementById("nome-cavaleiro")
const botao = document.getElementById("botao")
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal")

botao.addEventListener('click', function() {
    const cavaleiroEscolhido = nomeCavaleiro.value
    visualizar(cavaleiroEscolhido)
})

function visualizar(cavaleiro) {
   switch (cavaleiro) {
    case 'aries':
        modal.innerHTML = '<h2>Mú de Áries</h2> <div id="modal-body"> <img src="assets/mu.png" alt="Mú de Áries" id="mu" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Nascido em Jamiel, Mú é o responsável por defender a primeira das 12 casas do santuário. O cavaleiro conquistou sua armadura de ouro aos 7 anos de idade, teve como seu mestre Shion, antigo cavaleiro de ouro de Áries e posterior, mestre do santuário. Mú foi contra a rebelião de saga, permitindo que os cavaleiros de bronze protagonistas atravessassem a casa de Áries e também concertando suas armaduras. Seus maiores feitos foram derrotar Máscara-da-Morte de câncer e Afrodite de Peixes em suas versões de espectros e também derrotou um poderoso espectro de Hades Myu de Papilon. O dourado teve seu fim no ultimo episódio da saga de Hades parte 2 (Inferno) ao se reunir com todos os outros dourados para destruir o Muro das Lamentações para que os cavaleiros de bronze pudessem atravessar e derrotar o Deus do submundo.</p> </div> <div id="div-attacks"> <h3>Principais Golpes:</h3> <ul id="aries"> <li>Muralha de Cristal</li> <li>Extinção Estelar</li> <li>Revolução Estelar</li> </ul> </div> <audio preload="metadata" autoplay> <source src="audio/mu.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>'
        break
    case 'touro':
        modal.innerHTML = '<h2>Aldebaran de Touro</h2> <div id="modal-body"> <img src="assets/aldebaran.png" alt="Aldebaran de Touro" id="aldebaran" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Nascido no Brasil, Aldebaran de Touro é o responsável por defender a segunda das doze casas do Santuário de Athena, a Casa de Touro, conquistou sua armadura aos 7 anos de idade. Aldebaran era conhecido por sua incrível força e resistência física. Durante a rebelião de saga, foi um dos poucos a desconfiar da verdadeira identidade do Grande Mestre, permitindo, após um curto combate contra os cavaleiros de bronze, que os mesmos passasem pela casa de Touro. Aldebaran não teve grandes feitos na obra, apenas enfrentou Sorento de Sirene, um dos sete Generais Marinas de Poseidon, de igual para igual. Aldebaran foi morto pelo espectro Niobe de Deep durante a primeira fase da Saga de Hades (santuário).</p> </div> <div id="div-attacks"> <h3>Principais Golpes:</h3> <ul id="touro"> <li>Grande Chifre</li> </ul> </div> <audio preload="metadata" autoplay> <source src="audio/aldebaran.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>' 
        break
    case 'gemeos':
        modal.innerHTML ='<h2>Saga de Gêmeos</h2> <div id="modal-body"> <img src="assets/saga.png" alt="Saga de Gêmeos" id="saga" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Nascido na Grécia, Saga é o responsável por defender a terceira casa do Santuário, a casa de Gemêos. Sua personalidade flutuava entre o bem e o mal. Aiolos de Sagitário e Saga de Gêmeos concorreram ao cargo de Grande Mestre para suceder Shion, mesmo Saga sendo tão poderoso e por muitos considerado um deus, o atual Mestre, desconfiando da maldade escondida em saga, esolheu Aiolos para sucede-lo, então, durante a noite, sua personalidade má tomou conta de sua mente e atacou o Grande Mestre que já estava muito velho para se defender e morreu, o cavaleiro assumiu o trono, fingindo ser o Grande Mestre e tentou assassinar a deusa Athena ainda bebê, porém foi impedido por Aiolos que toma a deusa em seus braços e foge. No final da batalha das 12 casas quando Saga tenta atacar Athena, ele é envolvido pelo cosmo da deusa e sua personalidade ruim deixa seu corpo, ao perceber os crimes que cometeu, Saga comete suicidio, pondo fim em sua rebelião e devolvendo o santuário para Athena.</p> </div> <div id="div-golpes"> <h3>Principais Golpes:</h3> <ul id="gemeos"> <li>Satã Imperial</li> <li>Outra Dimensão</li> <li>Explosão Galáctica</li> </ul> </div> <audio preload="metadata" autoplay>  <source src="audio/saga.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>'
        break
    case 'cancer':
        modal.innerHTML = '<h2>Máscara da Morte</h2> <div id="modal-body"> <img src="assets/mdm.png" alt="Máscara da Morte de Câncer" id="mdm" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Máscara da Morte é o responsável por defender a quarta das 12 casas, conquistou sua armadura de ouro ainda criança. Seu nome nunca foi revelado, e seu apleido se dá devido aos rostos estampados na casa de Câncer das pessoas que matou. Máscara da Morte se desvirtuou da conduta de um cavaleiro de ouro, assassinando até mesmo inocentes, na série apareceu como um vilão e não como um honrado cavaleiro de Athena. Ele não teve grandes feitos na obra, mas tinha total controle sobre o Sekishiki, onde os mortos vão antes de passar para o submundo, podendo acessar e enviar o inimigo, e por lá continuar a batalha. O dourado foi derrotado e morto por Shiryu de Dragão durante a batalha das 12 casas.</p> </div> <div id="div-golpes"> <h3>Principais Golpes:</h3> <ul id="cancer"> <li>Ondas do Inferno</li> </ul> <audio preload="metadata" autoplay> <source src="audio/mdm.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>'
        break
    case 'leao':
        modal.innerHTML = '<h2>Aiolia de Leão</h2> <div id="modal-body"> <img src="assets/aiolia.png" alt="Aiolia de Leão" id="aiolia" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Aiolia é o cavaleiro responsável por defender a quinta casa, a casa de Leão. Também conquistou sua armadura quando criança. Teve commo mestre seu irmão mais velho - Aiolos de Sagitário. O cavaleiro era conhecido pela sua devoção à Athena e ao Santuário, estando sempre de prontidão para servir. Aiolia foi um dos poucos cavaleiros a reconhecer que Saori era a reencarnação de Athena, chegando até confrontar o Grande Mestre, que na verdade era o usaurpador - Saga de Gêmeos, porém sem sucesso, teve sua mente manipulada pelo vilão, onde só recuperou sua consciência ao matar Cassios em uma batalha contra Seiya de Pégasus durante a saga das 12 casas. Aiolia não teve muitos feitos na série, apenas derrotando um grupo de espectros que tentou atravessar a casa de Leão durante a saga de Hades, entre eles estava Raimi de Verme. O cavaleiro teve seu fim ao reunir-se com todos os outros dourados para destruir o Muro das Lamentações durante a guerra santa contra o deus do submundo.</p> </div> <div id="div-golpes"> <h3>Principais Golpes:</h3> <ul id="leao"> <li>Cápsula do Poder</li> <li>Relâmpago de Plasma</li> </ul> </div> <audio preload="metadata" autoplay> <source src="audio/aiolia.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>'
        break
    case 'virgem':
        modal.innerHTML = '<h2>Shaka de Virgem</h2> <div id="modal-body"> <img src="assets/shaka.png" alt="Shaka de Virgem" id="shaka" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Shaka de Virgem é o cavaleiro responsável por defender a sexta das 12 casas do Santuário. Shaka é considerado o cavaleiro mais próximo de Deus, permanecendo a maior parte do seu tempo meditando, sendo visto por muitos como a reencarnação do próprio Buda. Shaka conquistou sua armadura de ouro ainda criança aos 7 anos de idade. Durante a a série, Shaka realizou muitos feitos, mas o maior de todos foi ter enfrentado Saga, Shura e Câmus ao tentarem atravessar as 12 casas para matarem Athena na saga de Hades, em suas versões espectros, sendo que para conseguirem derrotar o cavaleiro de virgem foi necessário que os três utilizassem de uma técnica proibída, a Exclamação de Athena. Ainda assim não foi o suficiente para derrotar Shaka, pois o mesmo se deu por vencido para se teletransportar para o submundo utilizando-se do oitavo sentido, o Arayashiki, sendo um dos poucos cavaleiros a dominar este sentido. Shaka teve seu fim junto com os outros dourados para destruir o Muro das Lamentações.</p> </div> <div id="div-golpes"> <h3>Principais Golpes:</h3> <ul id="virgem"> <li>Rendição Divina</li> <li>Invocação dos Espíritos Malígnos</li> <li>Círculo das seis existências</li> <li>Tesouro do Céu</li> </ul> </div> <audio preload="metadata" autoplay>  <source src="audio/shaka.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>'
        break
    case 'libra':
        modal.innerHTML = ' <h2>Dohko de Libra</h2> <div id="modal-body"> <img src="assets/dohko.png" alt="Dohko de Libra" id="dohko" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Dohko de Libra, famoso Mestre Ancião, defensor da sétima casa do Santuário, foi um lendário cavaleiro de ouro de Athena do século XVIII por ter lutado na Guerra Santa contra Hades e ter sido um dos únicos sobreviventes, juntamente com Shion de Áries. Ao final do conflito Dohko foi incubido por Athena para vijiar o selo que aprisionava os espectros de Hades. No século XX Dohko é apresentado como Mestre Ancião, onde permaneceu recluso nos 5 Picos Antigos treinando Shiryu de Dragão. Com a morte de Saga de Gêmeos ao fim de sua rebelião, Athena concede a Dohko o cargo de Grande Mestre do Santuário. Para preservar sua juventude Dohko usou o Misopethamenos, uma técnica que faria com que Dohko retornase a sua forma fisica de quando tinha 18 anos de idade. No iníco da Guerra Santa do século XX, o Mestre Ancião retorna a sua forma jovem e enfrenta Shion em sua forma de espectro, e posterior ajuda os cavaleiros de bronze no submundo. Dohko teve seu fim ao juntar-se com os outros dourados para destruir o muro das Lamentações.</p> </div> <div id="div-golpes"> <h3>Principais Golpes:</h3> <ul id="libra"> <li>Cólera do Dragão</li> <li>Cólera dos Cem Dragões</li> <li>Último Dragão</li> </ul> </div> <audio preload="metadata" autoplay>  <source src="audio/dohko.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>'
        break
    case 'escorpiao':
        modal.innerHTML = '<h2>Milo de Escorpião</h2> <div id="modal-body"> <img src="assets/milo.png" alt="Milo de Escorpião" id="milo" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Milo de Escorpião defende a oitava casa do Santuário, a casa de escorpião, o cavaleiro conquistou sua armadura aos sete anos de idade. Milo é conhecido pela sua vaidade e soberba, e seus ataques são muito parecidos como de um escorpião, disparando diversas agulhas no oponente, fazendo-o sangrar até a morte. Seus maiores feitos na obra foi der assassinado quase todos os cavaleiros da Ilha de Andrômeda sob ordens do falso Mestre do Santuário, Saga de Gêmeos, e derrotar Hyoga de Cisne durante a batalha das 12 casas. Hyoga de certo teria morrido se Milo não tivesse mudado de ideia de última hora, pois durante a rebelião de Saga, Milo acreditava que o cavaleiro de Gêmeos realmente era o Grande Mestre, e a perseverança de Hyoga em atravessar a casa de escorpião para salvar a deusa Athena, fez com que Milo abrisse os olhos para a verade. O cavaleiro de Escorpião morreu ao juntar-se com todos os outros cavaleiros de ouro para destruir o Muro das Lamentações.</p> </div> <div id="div-golpes"> <h3>Principais Golpes:</h3> <ul id="escorpiao"> <li>Restrição</li> <li>Agulha Escarlate</li> <li>Antares</li> </ul> </div> <audio preload="metadata" autoplay>  <source src="audio/milo.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>'
        break
    case 'sagitario':
        modal.innerHTML = '<h2>Aiolos de Sagitário</h2> <div id="modal-body"> <img src="assets/aiolos.png" alt="Aiolos de Sagitário"  id="aiolos" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Aiolos de Sagitário, defensor da nona casa do Santuário, foi um dos cavaleiros de ouro mais prodígio de sua época. Foi nomeado por Shion para sucede-lo como Mestre do Santuário. Aiolos ficou conhecido pela sua coragem, justiça e lealdade a deusa Athena. Quando ele tinha apenas 14 anos, impediu Saga de Gêmeos, o falso Mestre, de matar a deusa Athena ainda bebê. O cavaleiro tomou a deusa em seus braços e desceu as 12 casas ao contrário sem vestir sua armadura, Aiolos enfrentou alguns dos cavaleiros que defendiam suas casas saindo vitorioso em todas as batalhas, porém Shura de Capricórnio o seguiu e continuou a luta fora do Santuário. Aiolos, sabendo que Shura estava sendo engado por Saga, não lutou com todas as suas forças, e para defender a deusa Athena recém nascida, deu sua vida. O espírito de Aiolos acompanhou Seiya e os outros cavaleiros de bronze durante suas jornadas, aparecendo na forma da armadura de Sagitário no momentos mais críticos.</p> </div> <div id="div-golpes"> <h3>Principais Golpes:</h3> <ul id="sagitario"> <li>Trovão Atômico</li> <li>Flecha de Sagitário</li> <li>Destruição Infinita</li> </ul> </div> <audio preload="metadata" autoplay>  <source src="audio/aiolos.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>'
        break
    case 'capricornio':
        modal.innerHTML = '<h2>Shura de Capricórnio</h2> <div id="modal-body"> <img src="assets/shura.png" alt="Shura de Capricórnio" id="shura" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Shura de Capricórnio, defensor da décima casa do Santuário, tornou-se cavaleiro aos sete anos de idade. Nas eras mitológicas Athena concedeu a sagrada espada Excalibur ao cavaleiro de Capricórnio, como recompensa por ser o cavaleiro mais fiel à deusa de sua época, e portanto a espada foi passando de geração em geração chegando até Shura. Por ser achar o mais fiel à Athena, Shura ficou cego e foi facilmente manipulado por Saga de Gêmeos, usurpador do trono de Grande Mesre, levando Shura a cometer diversas atrocidades, como matar Aiolos quando ele estava protegendo a própria reencarnação de Athena. Shura foi derrotado e morto por Shiryu de Dragão durante a batalha das 12 casas. Próximo da morte, quando Shura abriu os olhos e viu que estava errado, emprestou sua armadura a Shiryu para que o cavaleiro sobrevivesse, pois o cavaleiro de Dragão estava disposto a dar sua vida para derrotar o dourado. Shura também lhe deu sua espada sagrada Excalibur, arrependendo-se dos seus pecados antes de ser lançado ao espaço pelo ataque de Shiryu.</p> </div> <div id="div-golpes"> <h3>Principais Golpes:</h3> <ul id="capricornio"> <li>Pedras Saltitantes</li> <li>Excalibur</li> </ul> </div>  <audio preload="metadata" autoplay>  <source src="audio/shura.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>'
        break
    case 'aquario':
        modal.innerHTML = '<h2>Câmus de Aquário</h2> <div id="modal-body"> <img src="assets/camus.png" alt="Câmus de Aquário" id="camus" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Câmus de Aquário é o defensor da décima primeira casa, também conquistou sua armadura de ouro aos sete anos de idade. Câmus possui controle total sobre o gelo, podendo congelar completamente seus inimigos. No mangá, Câmus foi o mestre de Yoga de Cisne ja no anime Câmus treinou o Cavaleiro de Cristal, que foi o mestre de Yoga. O cavaleiro de Aquário não teve grandes feitos na série, durante a rebelião de Saga, Câmus permaneceu neutro, enfrentando Yoga apenas para testar o seu pupilo. Portanto seu maior feito na obra foi ter feito com que Yoga despertasse seu sétimo sentido e alcançasse o zero absoluto. Câmus teve seu fim ao enfrentar Yoga de Cisne durante a batalha das 12 casas.</p> </div> <div id="div-golpes"> <h3>Principais Golpes:</h3> <ul id="aquario"> <li>Pó de Diamante</li> <li>Trovão Aurora</li> <li>Execução Aurora</li> </ul> </div> <audio preload="metadata" autoplay>  <source src="audio/camus.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>'
        break
    case 'peixes':
        modal.innerHTML = ' <h2>Afrodite de Peixes</h2> <div id="modal-body"> <img src="assets/afrodite.png" alt="Afrodite de Peixes" id="afrodite" class="geral"> <div id="div-info"> <div id="div-sobre"> <h3>Sobre:</h3> <p>Afrodite de Peixes, responsável por defender a última casa do Santuário, também se tornou cavaleiro aos sete anos de idade. Afrodite era considerado o cavaleiro mais belo do exército e Athena, era conhecido por sua vaidade e seu orgulho exarcebado. Seus ataques são baseados em três tipos de rosas diferentes, as vermelhas que são venenosas, as pretas que são como piranhas, seus espinhos devoram tudo o que tocam, e a branca que é arrermessada no coração e suga todo o sangue do inimigo, tingindo as pétalas brancas da rosa de vermelho. O cavaleiro de Peixes disvirtuou-se de sua missão como cavaleiro de Athena, pois acreditava que a paz e a ordem deviam ser estabelecidas no mundo a qualquer custo, e por isso seguiu o Grande Mestre, mesmo sabendo de sua índole ruim. Afrodite não teve grandes feitos na série, e apenas assassinou covardemente Albiore de Cefeu, mestre de Shun de Andrômeda. Afrodite foi derrotado e morto por Shun de durante a travessia dos cinco cavaleiros de bronze protagonistas pelas 12 casas. </p> </div> <div id="div-golpes"> <h3>Principais Golpes:</h3> <ul id="peixes"> <li>Rosas Diabólicas Reais</li> <li>Rosas Piranhas</li> <li>Rosas Sangrentas</li> </ul> </div> <audio preload="metadata" autoplay> <source src="audio/afrodite.mp3" type="audio/mpeg"> Seu navegador não suporta a reprodução de áudio.</audio> </div> </div>'
        break
    case '':
        window.alert('Esolha um Cavaleiro!')
        return
    default:
        return
   }

    modal.style.visibility = 'visible'
    modal.style.opacity = 1
    overlay.style.display = 'block'
}

function fecharVisualizacao() {
    modal.style.visibility = 'hidden'
    modal.style.opacity = 0
    overlay.style.display = 'none'
}

overlay.addEventListener("click", fecharVisualizacao)

