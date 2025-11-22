// MENU HAMBURGUER MOBILE
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', e => {
  e.stopPropagation();
  const opened = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', opened);
});
document.addEventListener('click', e => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  }
});

// TEMA CLARO / ESCURO
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlEl.setAttribute('data-theme', savedTheme);
} else {
  htmlEl.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
}
themeToggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// CONTADOR REGRESSIVO
function updateCountdown() {
  const target = new Date('2025-12-19T15:20:00Z').getTime();
  const now = Date.now();
  const diff = target - now;

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = '<p>🎉 O ano letivo acabou! 🎉</p>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minsEl.textContent = String(mins).padStart(2, '0');
  secsEl.textContent = String(secs).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// MURAL DE MENSAGENS
const messageForm = document.getElementById('messageForm');
const messageList = document.getElementById('messageList');
const messages = [
  { name: 'Will Smith', message: 'Foi um ano incrível! Parabéns a todos pela conclusão do Ensino Médio', date: new Date() }
];
function sanitize(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}
messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const msg = document.getElementById('message').value.trim();
  if (!name || !msg) return;

  messages.unshift({ name, message: msg, date: new Date() });
  renderMessages();
  messageForm.reset();
});
function renderMessages() {
  messageList.innerHTML = messages
    .map(m => `
      <div class="message-card">
        <p class="message-author">${sanitize(m.name)}</p>
        <p>${sanitize(m.message)}</p>
        <small>${m.date.toLocaleDateString('pt-BR')} às ${m.date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</small>
      </div>
    `).join('');
}
renderMessages();

// REDAÇÕES (exemplo; coloque suas 14 redações aqui)
const essays = [
  {
    tema: "O PAPEL DO ESPORTE COMO FERRAMENTA DE TRANSFORMAÇÃO SOCIAL",
    texto: `Uma pesquisa do Banco BV apontou que
88% dos brasileiros acreditam que o esporte promove inclusão,
cooperação e superação.
Do ponto de vista sociológico, Pierre Bourdieu oferece uma análise
poderosa: para ele, o esporte é um "campo" social onde se
manifestam diferentes formas de capital social, cultural, simbólico e
onde o habitus de cada indivíduo pode se transformar. A
participação esportiva permite construir redes (capital social) e
adquirir reconhecimento, o que pode abrir caminhos antes
inacessíveis.
No âmbito cultural e midiático, a Rede Esporte pela Mudança
Social (REMS) representa bem esse potencial. A REMS mobiliza
instituições em todo o Brasil para levar atividades físicas a
comunidades vulneráveis, reforçando cidadania, saúde e desenvolvimento humano. Em 2023, suas organizações atenderam
diretamente 150.436 pessoas e impactaram indiretamente 451.308
segundo dados da própria rede.
Para que esse poder transformador se concretize de forma mais
ampla, o Estado junto do Ministério do Esporte deve: investir em
políticas públicas que financiem projetos esportivos nas periferias e
favelas, em parceria com empresas e ONGs; incorporar o esporte
ao currículo escolar de forma constante, não só como competição,
mas como prática de convivência e cidadania; fortalecer redes
comunitárias esportivas, com lideranças locais e visibilidade para
jovens atletas, para que o esporte seja de fato um agente de
mudança social.`
  },
  {
    tema: "CAMINHOS PARA A UNIVERSALIZAÇÃO DO SANEAMENTO BÁSICO NO BRASIL",
    texto: `O saneamento básico é um dos pilares fundamentais para garantir saúde e qualidade de vida à população. No
entanto, no Brasil, milhões de pessoas ainda vivem sem acesso à água potável e tratamento de esgoto, refletindo a
desigualdade social e a ineficiência das políticas públicas. A universalização desse serviço é, portanto, um desafio
urgente que exige planejamento e compromisso coletivo.
Em primeiro lugar, a falta de investimentos adequados em infraestrutura e manutenção agrava o problema. Segundo
dados do Instituto Trata Brasil, boa parte dos municípios carece de redes de esgoto eficientes e de gestão hídrica
sustentável. Essa carência resulta em doenças de veiculação hídrica e em prejuízos econômicos. Assim, é essencial
que o Estado amplie os repasses orçamentários e promova parcerias público-privadas que priorizem regiões mais
vulneráveis.
Além disso, a falta de conscientização da população sobre o uso racional da água e a importância do saneamento
dificulta avanços. Muitas vezes, o desperdício e o descarte incorreto de resíduos comprometem o funcionamento dos
sistemas existentes. Por isso, campanhas educativas e programas escolares voltados à educação ambiental são
fundamentais para formar cidadãos conscientes e participativos nesse processo.
Portanto, para garantir a universalização do saneamento básico no Brasil, o Governo Federal, em parceria com o
Ministério do Meio Ambiente e da Educação, deve ampliar investimentos em infraestrutura e criar projetos de
conscientização social, com oficinas e campanhas midiáticas sobre o uso responsável da água. Dessa forma, será
possível construir um país mais justo, saudável, coletivo e ambientalmente sustentável, assegurando dignidade a
todos os brasileiros.`
  },
  {
    tema: "DESAFIOS PARA A VALORIZAÇÃO DA CULTURA POPULAR BRASILEIRA",
    texto: `O gênero musical Bossa Nova, conhecido por seu ritmo calmo e marcante, é mundialmente reconhecido como símbolo da cultura popular brasileira. No entanto, dentro do próprio país, observa-se uma crescente desvalorização das manifestações culturais nacionais, causada pela supervalorização de referências estrangeiras e pela falta de incentivo à preservação dos costumes nativos entre as novas gerações. Essa realidade enfraquece o sentimento de identidade e pertencimento do povo com sua própria história.
Em primeiro lugar, a exaltação de culturas estrangeiras tem levado muitos brasileiros a subestimarem produções nacionais. O filme “O Auto da Compadecida”, por exemplo, retrata uma trama autêntica da cultura nordestina, mas ainda é tratado por parte da população com desdém, apenas por ser uma produção brasileira. Esse comportamento reflete a ideia de que o que vem de fora é melhor, o que prejudica o reconhecimento das obras nacionais. Por isso, é fundamental que o sistema educacional e os meios de comunicação promovam o consumo e o reconhecimento das produções culturais do país, com incentivos financeiros e maior divulgação.
Além disso, observa-se o apagamento da cultura nas novas gerações, causado pela falta de transmissão dos costumes pelas gerações mais velhas. A escritora Clarice Lispector, ícone da literatura nacional, é cada vez menos conhecida entre os jovens, resultado da redução do hábito de leitura e da ausência de estímulos à valorização das obras brasileiras. Incentivar a leitura de obras nacionais e promover espaços de diálogo entre diferentes gerações pode fortalecer o vínculo com a cultura local e preservar tradições importantes.
Portanto, com o intuito de promover a valorização da cultura brasileira, o Estado, em parceria com o Ministério da Educação, deve implementar programas escolares voltados à difusão de obras literárias, musicais e cinematográficas nacionais, além de campanhas públicas que envolvam artistas e tradições regionais.`
  },
  {
    tema: "A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA PARA OS JOVENS",
    texto: `A educação financeira para jovens destaca-se como pilar fundamental em uma sociedade marcada por rápidas transformações econômicas e culturais. Por conseguinte, filósofos como Aristóteles já apontavam que a virtude reside no "meio-termo", e a gestão dos recursos pessoais pode ser vista como parte integrante da vida ética. Nesse sentido, oferecer aos jovens conhecimentos sólidos sobre finanças favorece não apenas a autonomia individual, mas também uma cidadania mais consciente e participativa.
Diante disso, Pierre Bourdieu evidenciou que o capital econômico, cultural e social são interligados; assim, jovens que aprendem sobre finanças, adquirindo capital financeiro, estão mais aptos a romper ciclos de desigualdade. Dados da Organização para a Cooperação e Desenvolvimento Econômico (OCDE) mostram que no Brasil estudantes de 15 anos obtiveram média de 416 pontos na avaliação de letramento financeiro, ou seja, 82 pontos abaixo da média. No entanto, observa-se que muitos jovens ainda não possuem a proficiência básica necessária para tomar decisões financeiras responsáveis.
Por conseguinte, a intervenção deve vir por meio das escolas, famílias e do Estado. Por isso, é essencial que programas de educação financeira sejam incluídos no currículo escolar desde os níveis básicos, conforme preconiza a OCDE. Além disso, os pais que dialogam com seus filhos sobre dinheiro elevam o desempenho desses em letramento financeiro, e fintechs podem complementar com oficinas e plataformas digitais voltadas a jovens. Ademais, políticas públicas eficazes devem assegurar igualdade de acesso a esse conhecimento, sobretudo para os jovens de origem socioeconômica mais vulnerável.
Em conclusão, a educação financeira para jovens emerge como estratégia imprescindível para promover autonomia, equidade e participação social consciente. Portanto, quando bem estruturada, ela conecta o conhecimento filosófico e sociológico no contexto da economia, capacitando indivíduos a tomarem decisões responsáveis e contribuindo assim por uma sociedade mais equilibrada e com futuro promissor.`
  },
  {
    tema: "CAMINHOS PARA COMBATER O ETARISMO NAS RELAÇÕES SOCIAIS",
    texto: `O etarismo, ou seja, a discriminação baseada na idade, ainda é um problema nas relações sociais e precisa ser enfrentado com mais seriedade. Nesse sentido, é necessário reconhecer como os estereótipos sobre a velhice são construídos e buscar promover uma convivência mais respeitosa entre as gerações. Assim, defende-se que o combate ao etarismo deve ocorrer tanto por meio da conscientização social quanto pelo incentivo a políticas e ações que valorizem todas as idades.
Diante disso, pode-se citar que as produções culturais influenciam diretamente a forma como a sociedade enxerga o envelhecimento. O filme “Up – Altas Aventuras” (2009), por exemplo, mostra uma amizade entre um idoso e uma criança, ensinando que a troca de experiências entre gerações é enriquecedora. Além disso, a filósofa Simone de Beauvoir, em “A Velhice”, explica que a sociedade costuma tratar o idoso como “o outro”, reforçando preconceitos e exclusões.
Outro ponto importante é que o etarismo também se manifesta em ambientes de trabalho e instituições, como afirmam sociólogos contemporâneos. Para mudar isso, é essencial criar espaços que unam jovens e pessoas mais velhas, por meio de projetos escolares e programas de mentoria. Essas ações fortalecem o respeito mútuo e combatem visões negativas da idade.
Portanto, cabe ao Estado, famílias, empresas e escolas atuar juntos na construção de uma sociedade que valorize todas as etapas da vida. A solução envolve campanhas educativas, inclusão de debates sobre envelhecimento nas escolas e leis que incentivem a diversidade etária no trabalho. Assim, será possível construir um futuro mais igualitário e humano.`
  },
  {
    tema: "ADULTIZAÇÃO INFANTIL – CONSEQUÊNCIAS DA PERDA IRREPARÁVEL DA INFÂNCIA",
    texto: `“A infância tem suas maneiras de ver, pensar e sentir; nada há de mais insensato do que querer substituí-las pelas nossas.”, afirmou o filósofo Jean-Jacques Rousseau, ao defender que esta fase da vida não deve ter uma intervenção, pois, é um momento da vida onde a pureza e a singularidade são presentes. No entanto, na sociedade atual, esta fase tem como marca a velocidade de informação e pelo consumo de vídeos e imagens, tem como uma certa consequência a adultização infantil.
Isto é o processo que crianças passam para assumir comportamentos de pessoas adultas, responsabilidades e padrões estéticos. Segundo o sociólogo Guy Debord, em A Sociedade do Espetáculo, vivemos em um mundo em que “tudo o que era vivido diretamente se afasta em uma representação”. Isso significa que a realidade é mediada por imagens, aparência e visibilidade.
Nesse contexto diversas crianças têm se tornado produtos de exibição nas redes sociais e na publicidade, onde meninas e meninos são incentivados a agir e se vestir como adultos.
No contexto da modernidade líquida, proposta por Zygmunt Bauman, que defende que a modernidade é marcada por relações frágeis e imediatistas, as crianças aprendem cedo a competir, a desejar e a buscar validação externa, o que provoca ansiedade, baixa autoestima e perda da espontaneidade infantil. Desse modo, o fenômeno representa não apenas uma questão cultural, mas também ética e social, que compromete o processo educativo e o desenvolvimento humano integral.
Diante disso, é indispensável que medidas sejam tomadas para proteger a infância e promover uma cultura que valorize o tempo de crescer. O ministério da educação, em parceria com o Ministério das Comunicações, deve criar campanhas educativas e políticas de regulação midiática, que limitem a exposição infantil em conteúdos publicitários e digitais, além de capacitar escolas e famílias para orientar o uso responsável das redes.`
  },
  {
    tema: "A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS",
    texto: `As desigualdades sociais existem desde o início da sociedade, fruto do capitalismo e de seus ideais, é algo que é combatido a séculos. No entanto mesmo com todos estes anos não chegamos nem perto do seu fim, com o Estado sempre se importando tão pouco com essas diferenças o próprio povo precisou ajudar voluntariamente, como no século XVI, no Movimento das Santas Casas da Misericórdia.
Além disso, o trabalho voluntário tem extrema importância na evolução histórica do planeta, como campanhas de solidariedade na 2° Guerra Mundial, que abrigaram feridos e refugiados. A desigualdade da segunda guerra com seu movimento antisemita era obra de palco para objetivos desumanos, e pessoas que sentiam compaixão uma pelas outras viram a necessidade de prestar socorro.
Contudo, de acordo com o sociólogo Paulo Freire, a transformação social ocorre pelo engajamento e pela conscientização dos indivíduos. O voluntariado pode ser um instrumento de educação libertadora e de cidadania ativa. Isto mostra que a voluntariado com destino de procurar ajudar, transforma e liberta conhecimento e progresso.
Levando em conta a análise desses fatos, temos a conclusão de que o voluntarismo é algo essencial para a construção da sociedade e na busca de um local melhor para a convivência humana. E que em momentos importantes da sociedade ela esteve presente e mudando e trazendo história para momentos melhores.`
  },
  {
    tema: "FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB",
    texto: `A democratização do acesso à internet paradoxalmente fomentou uma crise de saúde pública: a dependência em jogos de apostas online. Esse fenômeno, amparado na ilusão de mobilidade social, assume contornos epidêmicos no Brasil, onde o Lenad III (2024) registra 1,4 milhão de brasileiros com transtorno do jogo patológico. A análise desse cenário exige interlocução com referenciais teóricos capazes de desvendar suas múltiplas dimensões.
Sob a ótica de Byung-Chul Han, a sociedade do cansaço transforma as apostas em falsos atalhos para o sucesso, especialmente entre jovens periféricos. Esta busca por reconhecimento rápido dialoga com a modernidade líquida de Bauman, onde relações efêmeras espelham a busca por ganhos imediatos. Psicologicamente, as plataformas utilizam o reforço variável skinneriano, criando mecanismos de recompensa que sequestram o sistema dopaminérgico cerebral. A combinação entre pressão social e arquitetura comportamental manipulativa constitui o cerne do problema.
Para enfrentar esta complexa teia, propõe-se uma intervenção tríplice. Primariamente, a receita tributária do setor deve financiar Núcleos de Acolhimento Digital no SUS, integrando psicólogos e assistentes sociais. Secundariamente, campanhas midiáticas deverão ressignificar o conceito de sorte, associando-o ao investimento em educação. Por fim, a Ancine poderia fomentar produções audiovisuais que desmontem a romantização do risco, nos moldes do crítico O Lobo de Wall Street.
Em síntese, a dependência digital em apostas configura-se como sintoma de uma sociedade que supervaloriza resultados imediatos. Superá-la exige uma reconstrução cultural que substitua a sedução do acaso pela valorização de projetos de vida substanciais, transformando a sociedade do cansaço em uma sociedade do cuidado.`
  },
  {
    tema: "O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE",
    texto: `O ultraprocessamento de comidas, leva-se ao fato da realidade capitalista e exploração do trabalho. Estes alimentos além de simples acesso, é rápido e prático de se fazer, traz abundantes problemas de saúde, como obesidade, diabetes, e doenças cardiovasculares de acordo com a Organização Mundial da Saúde (OMS).
Sendo assim, o acessível caminho para tal alimentação, é resultado da industrialização e a vida urbana acelerada iniciada no século XX, pois, os operários com curto tempo para realizar a refeição, necessitavam de comidas rápidas para seu consumo, que são cheias de conservantes e calorias. Diante disso, diversos problemas como intoxicações alimentares, acúmulo de colesterol, pressão alta e etc., surgiram em abundância, levando em conta a falta de nutrientes nas iguarias e seu alto nível de conservação.
Contudo, a lei da rotulagem de alimentos, já presente nos dias de hoje, ajuda pessoas a identificarem alimentos que contêm ingredientes excessivos e que se consumido em desmando pode trazer riscos a saúde. Porém, o incentivo fiscal a alimentação saudável, seria uma solução e pelo Ministério da Fazenda junto do Governo Federal aumentariam impostos sobre esses alimentos ultraprocessados e a redução sobre frutas e legumes levando a um menor consumo consequentemente.
Sendo assim, os alimentos ultraprocessados que infelizmente diante de seu histórico ruim ainda é muito consumido nos dias de hoje. Consequentemente levando a distúrbios alimentares em maior abundância na atual sociedade. Mas com apoio do Estado e da Conscientização política e educacional sobre saúde e segurança alimentar está realidade pode mudar e tornar a vida algo mais saudável e natural.`
  },
  {
    tema: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
    texto: `Na era digital a evolução constante e o consumo abundante intensificam um problema crítico: o descarte incorreto de lixo eletrônico. Esse resíduo pode causar diversos impactos ambientais extremamente preocupantes na sociedade e no ecossistema, exigindo intervenção urgente.
Em vista disso, o sociólogo Zygmunt Bauman, em sua pesquisa sobre a Modernidade Líquida diz que a busca incessante por inovações tecnológicas tornam produtos cada vez mais descartáveis, e acaba resultando em um ciclo de consumo efêmero, agravando o acúmulo de lixo e seus efeitos perversos.
Sendo assim, culturalmente, filmes como Wall-E da Pixar, preveem de forma ficcional, o planeta Terra inabitável, denunciando a poluição no meio ambiente, no filme o planeta Terra se torna inabitável aos seres vivos graças a quantidade de lixo e risco a saúde agravado pelo mal descarte. Os componentes de objetos eletrônicos podem ter alto risco, pois, líquidos tóxicos, riscos de incêndio e poluições hídricas são eventos que podem ocorrer e afetar todo o ecossistema ao redor da população.
Diante do exposto, é imperativo combater tais consequências. O Estado deveria fiscalizar o cumprimento da logística reversa, enquanto empresas precisam adotar a responsabilidade estendida. Além disso, campanhas e obras midiáticas responsabilidade e educacionais, inspiradas em obras como Wall-E podem promover o descarte consciente ao público e na educação, podendo assim assegurar um futuro mais sustentável.`
  },
  {
    tema: "AS MUDANÇAS CLIMÁTICAS NO BRASIL E SEUS DESAFIOS",
    texto: `Na obra cinematográfica "Interestelar", conseguimos identificar consequências futuras sobre as mudanças climáticas, afetando não só a temperatura do planeta, mas as condições de vida e ambientais da época. Tal visão sobre o mundo nos leva a refletir o mundo de agora e o que será de nosso país caso esse futuro venha a se aproximar cada vez mais.
Uma pesquisa realizada pela CNN Brasil, o maior exportador de comida do mundo teria uma enorme escassez do plantio já que diversos tipos de planta não estariam mais aptas a se desenvolver graças às impurezas do ar, aumento das temperaturas e as impurezas do solo, causadas pela acidificação da água da chuva como exemplo. Atualmente, tal cenário já é observado na mídia, causado por desastres naturais que não eram tão comuns em nosso país, como enchentes, secas prolongadas, o calor intolerável que está afetando até regiões que deveriam ser frias, principalmente ao inverno.
De acordo com o sociólogo Karl Marx, no seu Manifesto, criticando ações capitalistas que visam o aumento da riqueza, se encaixa perfeitamente na nossa realidade de hoje, principalmente com o fato de que em nosso país, o agronegócio, que apesar de ser grande parte da nossa economia, visa o lucro acima do que é necessário. Desmatamento apenas para plantio de diversos tipos de mercadoria, tirando milhares de árvores de florestas importantes, lares de animais, para priorização do lucro em detrimento da preservação ambiental.
Portanto, o governo federal, em parceria com órgãos ambientais, deve implementar políticas públicas de incentivo à agricultura sustentável, por meio de subsídios e fiscalização mais rigorosa, a fim de reduzir o desmatamento e preservar a biodiversidade brasileira.`
  },
  {
    tema: "PRINCIPAIS FATORES QUE INFLUENCIAM NA QUALIDADE DE VIDA E NO BEM-ESTAR DA POPULAÇÃO",
    texto: `A qualidade de vida é o bem-estar da população sempre foram temas centrais nas reflexões filosóficas e sociológicas. Aristóteles, por exemplo, defendia que a felicidade (eudaimonia) só seria alcançada quando o ser humano tivesse condições de desenvolver plenamente suas capacidades. No entanto, ao longo da história, percebe-se que fatores como saúde, educação, segurança e justiça social nunca foram igualmente garantidos a todos. No Brasil, essa desigualdade se tornou visível desde o período colonial, quando a concentração de riquezas nas mãos de poucos já comprometia o bem-estar coletivo.
Um dos principais fatores que influenciam o bem-estar é a saúde. Revolução Industrial, no século XIX, exemplifica como más condições de trabalho e moradia levaram a epidemias e ao adoecimento das massas operárias, obrigando os Estados a criar sistemas públicos de saneamento e saúde. No Brasil atual, embora exista o SUS, ainda há problemas como a falta de infraestrutura hospitalar e a ausência de políticas efetivas para a saúde mental, o que compromete a qualidade de vida, especialmente das camadas mais pobres da população.
Portanto, compreender os fatores que influenciam a qualidade de vida exige uma análise histórica e filosófica, que revela como a desigualdade social compromete o bem-estar coletivo. Cabe ao Estado investir em políticas públicas de saúde e educação, e a sociedade civil participar ativamente dessas mudanças. Assim será possível concretizar o ideal aristotélico de uma vida plena e justa, além de construir uma nação mais equilibrada e capaz de promover o verdadeiro bem-estar de seus cidadãos.`
  },
  {
    tema: "ACESSIBILIDADE E INCLUSÃO DE PESSOAS COM DEFICIÊNCIA NO BRASIL",
    texto: `De acordo com o filme "A Teoria de Tudo" a deficiência é um desafio que não é enfrentado apenas pela pessoa com a deficiência, consequentemente ela afeta os próprios cuidadores desta pessoa. O impacto social é relevante e a acessibilidade tem papel fundamental na sociedade, os desafios enfrentados pela falta de inclusão envolvem risco, frustração e exclusão.
Além disso, a negligência com a acessibilidade também afeta diretamente o direito à educação e ao trabalho. Escolas e universidades, muitas vezes, não possuem recursos inclusivos como intérpretes de Libras, materiais em braile ou softwares adaptados, dificultando o aprendizado. No mercado de trabalho, a ausência de adaptações nos espaços físicos e tecnológicos restringe a inserção de profissionais com deficiência, alimentando o preconceito e reduzindo oportunidades. Essa realidade perpetua um ciclo de marginalização que poderia ser evitado com políticas públicas eficazes.
Portanto, a falta de acessibilidade é reflexo de uma sociedade que ainda não compreende a importância da inclusão. É essencial que governos invistam em infraestrutura acessível, fiscalização do cumprimento das leis e campanhas de conscientização social. Apenas com a união de esforços entre poder público e população será possível garantir a equidade, possibilitando que pessoas com deficiência exerçam plenamente sua cidadania e participem ativamente da vida comunitária.`
  },
  {
    tema: "POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?",
    texto: `De acordo com a psicóloga Ana Beatriz Chamat, a adultização de menores é influenciada pelos próprios adultos e pela sociedade. A idealização de corpos começa na infância com modelos de séries adolescentes, a ditadura da moda imposta pela mídia com a padronização de corpos. Especialmente entre a comunidade feminina, esse hábito de comparação é comum, como tamanho dos seios, cintura fina, o que leva adolescentes a pensarem em procedimentos estéticos cada vez mais cedo.
Desde cedo, os pais veem crianças como adultos, impondo maturidade desnecessária. As cirurgias estéticas em adolescentes, como silicone ou lipoaspiração, podem trazer riscos graves para um corpo ainda em formação. A imposição de padrões de beleza adultizados pode levar a consequências físicas e psicológicas, incluindo deformações, traumas e vulnerabilidade emocional.
Uma solução para esse problema é uma educação social mais profunda: nas escolas, famílias e na mídia, discutir autoestima, mídia e identidade. Além disso, políticas públicas devem desencorajar a pressão estética precoce e promover campanhas voltadas para valorização da diversidade corporal e saúde emocional.`
  }
];

// O resto do seu script — construção de TOC, acordeão, leitura em voz alta etc.
// ...


function buildEssaysTOC() {
  const toc = document.querySelector('#essays-toc ul');
  essays.forEach((e, i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#essay-${i}`;
    a.textContent = e.tema;
    li.appendChild(a);
    toc.appendChild(li);
  });
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert("Navegador não suporta leitura de texto.");
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'pt-BR';
  speechSynthesis.speak(utter);
}

function buildEssaysAccordion() {
  const container = document.getElementById('essays-accordion');
  essays.forEach((e, i) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';

    const header = document.createElement('div');
    header.className = 'accordion-header';
    const btn = document.createElement('button');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', `content-${i}`);
    btn.id = `accordion-header-${i}`;
    btn.textContent = e.tema;
    header.appendChild(btn);

    const content = document.createElement('div');
    content.className = 'accordion-content';
    content.id = `content-${i}`;
    content.setAttribute('aria-labelledby', btn.id);
    content.setAttribute('role', 'region');

    const p = document.createElement('p');
    p.textContent = e.texto;
    content.appendChild(p);

    const readBtn = document.createElement('button');
    readBtn.className = 'read-btn';
    readBtn.textContent = '🔊 Ouvir redação';
    readBtn.addEventListener('click', () => speakText(e.texto));
    content.appendChild(readBtn);

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      content.classList.toggle('open');
    });

    item.appendChild(header);
    item.appendChild(content);
    container.appendChild(item);
  });
}

const essaysBtn = document.getElementById('show-essays-btn');
const essaysSection = document.getElementById('essays-section');
essaysBtn.addEventListener('click', () => {
  if (essaysSection.style.display === 'block') {
    essaysSection.style.display = 'none';
    essaysBtn.textContent = '📚 Redações';
  } else {
    if (!document.querySelector('#essays-accordion').hasChildNodes()) {
      buildEssaysTOC();
      buildEssaysAccordion();
    }
    essaysSection.style.display = 'block';
    essaysBtn.textContent = '❌ Fechar Redações';
  }
});

// ACESSIBILIDADE: FONTE E CONTRASTE
const btnIncrease = document.getElementById('increase-font');
const btnDecrease = document.getElementById('decrease-font');
const btnContrast = document.getElementById('toggle-contrast');
btnIncrease.addEventListener('click', () => {
  const curr = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (curr + 1) + 'px';
});
btnDecrease.addEventListener('click', () => {
  const curr = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (curr - 1) + 'px';
});
btnContrast.addEventListener('click', () => {
  document.body.classList.toggle('contrast');
});
