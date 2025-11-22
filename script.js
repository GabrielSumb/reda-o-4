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
const messages = [];

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

// REDAÇÕES (14 temas – use suas redações completas aqui)
const essays = [
 { tema: "O PAPEL DO ESPORTE COMO FERRAMENTA DE TRANSFORMAÇÃO SOCIAL", texto: `Uma pesquisa do Banco BV apontou que 88% dos brasileiros acreditam que o esporte promove inclusão, cooperação e superação. Do ponto de vista sociológico, Pierre Bourdieu oferece uma análise poderosa: para ele, o esporte é um "campo" social onde se manifestam diferentes formas de capital social, cultural, simbólico e onde o habitus de cada indivíduo pode se transformar. A participação esportiva permite construir redes (capital social) e adquirir reconhecimento, o que pode abrir caminhos antes inacessíveis. No âmbito cultural e midiático, a Rede Esporte pela Mudança Social (REMS) representa bem esse potencial. A REMS mobiliza instituições em todo o Brasil para levar atividades físicas a comunidades vulneráveis, reforçando cidadania, saúde e desenvolvimento humano. Em 2023, suas organizações atenderam diretamente 150.436 pessoas e impactaram indiretamente 451.308 segundo dados da própria rede. Para que esse poder transformador se concretize de forma mais ampla, o Estado junto do Ministério do Esporte deve: investir em políticas públicas que financiem projetos esportivos nas periferias e favelas, em parceria com empresas e ONGs; incorporar o esporte ao currículo escolar de forma constante, não só como competição, mas como prática de convivência e cidadania; fortalecer redes comunitárias esportivas, com lideranças locais e visibilidade para jovens atletas, para que o esporte seja de fato um agente de mudança social.` },
  { tema: "CAMINHOS PARA A UNIVERSALIZAÇÃO DO SANEAMENTO BÁSICO NO BRASIL", texto: `O saneamento básico é um dos pilares fundamentais para garantir saúde e qualidade de vida à população. No entanto, no Brasil, milhões de pessoas ainda vivem sem acesso à água potável e tratamento de esgoto, refletindo a desigualdade social e a ineficiência das políticas públicas. A universalização desse serviço é, portanto, um desafio urgente que exige planejamento e compromisso coletivo. Em primeiro lugar, a falta de investimentos adequados em infraestrutura e manutenção agrava o problema. Segundo dados do Instituto Trata Brasil, boa parte dos municípios carece de redes de esgoto eficientes e de gestão hídrica sustentável. Essa carência resulta em doenças de veiculação hídrica e em prejuízos econômicos. Assim, é essencial que o Estado amplie os repasses orçamentários e promova parcerias público-privadas que priorizem regiões mais vulneráveis. Além disso, a falta de conscientização da população sobre o uso racional da água e a importância do saneamento dificulta avanços. Muitas vezes, o desperdício e o descarte incorreto de resíduos comprometem o funcionamento dos sistemas existentes. Por isso, campanhas educativas e programas escolares voltados à educação ambiental são fundamentais. Portanto, para garantir a universalização do saneamento básico no Brasil, o Governo Federal, em parceria com o Ministério do Meio Ambiente e da Educação, deve ampliar investimentos em infraestrutura e criar projetos de conscientização social, com oficinas e campanhas midiáticas sobre o uso responsável da água. Dessa forma, será possível construir um país mais justo, saudável, coletivo e ambientalmente sustentável.` },
  { tema: "DESAFIOS PARA A VALORIZAÇÃO DA CULTURA POPULAR BRASILEIRA", texto: `O gênero musical Bossa Nova, conhecido por seu ritmo calmo e marcante, é mundialmente reconhecido como símbolo da cultura popular brasileira. No entanto, dentro do próprio país, observa-se uma crescente desvalorização das manifestações culturais nacionais, causada pela supervalorização de referências estrangeiras e pela falta de incentivo à preservação dos costumes nativos entre as novas gerações. Essa realidade enfraquece o sentimento de identidade e pertencimento do povo com sua própria história. Em primeiro lugar, a exaltação de culturas estrangeiras tem levado muitos brasileiros a subestimarem produções nacionais. O filme “O Auto da Compadecida”, por exemplo, retrata uma trama autêntica da cultura nordestina, mas ainda é tratado por parte da população com desdém, apenas por ser uma produção brasileira. Esse comportamento reflete a ideia de que o que vem de fora é melhor, o que prejudica o reconhecimento das obras nacionais. Por isso, é fundamental que o sistema educacional e os meios de comunicação promovam o consumo e o reconhecimento das produções culturais do país, com incentivos financeiros e maior divulgação. Além disso, observa-se o apagamento da cultura nas novas gerações, causado pela falta de transmissão dos costumes pelas gerações mais velhas. A escritora Clarice Lispector, ícone da literatura nacional, é cada vez menos conhecida entre os jovens, resultado da redução do hábito de leitura e da ausência de estímulos à valorização das obras brasileiras. Incentivar a leitura de obras nacionais e promover espaços de diálogo entre diferentes gerações pode fortalecer o vínculo com a cultura local e preservar tradições importantes. Portanto, com o intuito de promover a valorização da cultura brasileira, o Estado, em parceria com o Ministério da Educação, deve implementar programas escolares voltados à difusão de obras literárias, musicais e cinematográficas nacionais, além de campanhas públicas que envolvam artistas e tradições regionais.` },
  { tema: "A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA PARA OS JOVENS", texto: `A educação financeira para jovens destaca-se como pilar fundamental em uma sociedade marcada por rápidas transformações econômicas e culturais. Por conseguinte, filósofos como Aristóteles já apontavam que a virtude reside no "meio-termo", e a gestão dos recursos pessoais pode ser vista como parte integrante da vida ética. Nesse sentido, oferecer aos jovens conhecimentos sólidos sobre finanças favorece não apenas a autonomia individual, mas também uma cidadania mais consciente e participativa. Diante disso, Pierre Bourdieu evidenciou que o capital econômico, cultural e social são interligados; assim, jovens que aprendem sobre finanças, adquirindo capital financeiro, estão mais aptos a romper ciclos de desigualdade. Dados da Organização para a Cooperação e Desenvolvimento Econômico (OCDE) mostram que no Brasil estudantes de 15 anos obtiveram média de 416 pontos na avaliação de letramento financeiro, ou seja, 82 pontos abaixo da média. No entanto, observa-se que muitos jovens ainda não possuem a proficiência básica necessária para tomar decisões financeiras responsáveis. Por conseguinte, a intervenção deve vir por meio das escolas, famílias e do Estado. Por isso, é essencial que programas de educação financeira sejam incluídos no currículo escolar desde os níveis básicos, conforme preconiza a OCDE. Além disso, os pais que dialogam com seus filhos sobre dinheiro elevam o desempenho desses em letramento financeiro, e fintechs podem complementar com oficinas e plataformas digitais voltadas a jovens. Ademais, políticas públicas eficazes devem assegurar igualdade de acesso a esse conhecimento, sobretudo para os jovens de origem socioeconômica mais vulnerável. Em conclusão, a educação financeira para jovens emerge como estratégia imprescindível para promover autonomia, equidade e participação social consciente. Portanto, quando bem estruturada, ela conecta o conhecimento filosófico e sociológico no contexto da economia, capacitando indivíduos a tomarem decisões responsáveis e contribuindo assim por uma sociedade mais equilibrada e com futuro promissor.` },
  { tema: "CAMINHOS PARA COMBATER O ETARISMO NAS RELAÇÕES SOCIAIS", texto: `O etarismo, ou seja, a discriminação baseada na idade, ainda é um problema nas relações sociais e precisa ser enfrentado com mais seriedade. Nesse sentido, é necessário reconhecer como os estereótipos sobre a velhice são construídos e buscar promover uma convivência mais respeitosa entre as gerações. Assim, defende-se que o combate ao etarismo deve ocorrer tanto por meio da conscientização social quanto pelo incentivo a políticas e ações que valorizem todas as idades. Diante disso, pode-se citar que as produções culturais influenciam diretamente a forma como a sociedade enxerga o envelhecimento. O filme “Up – Altas Aventuras” (2009), por exemplo, mostra uma amizade entre um idoso e uma criança, ensinando que a troca de experiências entre gerações é enriquecedora. Além disso, a filósofa Simone de Beauvoir, em “A Velhice”, explica que a sociedade costuma tratar o idoso como “o outro”, reforçando preconceitos e exclusões. Outro ponto importante é que o etarismo também se manifesta em ambientes de trabalho e instituições, como afirmam sociólogos contemporâneos. Para mudar isso, é essencial criar espaços que unam jovens e pessoas mais velhas, por meio de projetos escolares e programas de mentoria. Essas ações fortalecem o respeito mútuo e combatem visões negativas da idade. Portanto, cabe ao Estado, famílias, empresas e escolas atuar juntos na construção de uma sociedade que valorize todas as etapas da vida. A solução envolve campanhas educativas, inclusão de debates sobre envelhecimento nas escolas e leis que incentivem a diversidade etária no trabalho. Assim, será possível construir um futuro mais igualitário e humano.` },
  { tema: "ADULTIZAÇÃO INFANTIL – CONSEQUÊNCIAS DA PERDA IRREPARÁVEL DA INFÂNCIA", texto: `“A infância tem suas maneiras de ver, pensar e sentir; nada há de mais insensato do que querer substituí-las pelas nossas.”, afirmou Jean-Jacques Rousseau, ao defender que essa fase da vida deve ser preservada. Na sociedade moderna, a velocidade da informação e a exposição midiática fazem muitas crianças assumirem comportamentos adultos, padrões estéticos e responsabilidades precoces. Segundo Guy Debord, em “A Sociedade do Espetáculo”, viver é cada vez mais uma representação mediada por imagens — e muitas crianças se veem como “produtos de exibição”. Já na modernidade líquida de Zygmunt Bauman, observa-se que a busca por validação e consumo precoce fragiliza a infância, gerando ansiedade, baixa autoestima e perda da espontaneidade. Para preservar o tempo da infância, é essencial que o Estado, as famílias e as escolas promovam campanhas educativas, regulem a exposição infantil nas redes sociais e capacitem educadores para orientar esse uso de forma saudável.` },
  { tema: "A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS", texto: `As desigualdades sociais são profundas e persistem ao longo da história. No entanto, o trabalho voluntário tem se mostrado uma ferramenta poderosa para promover transformação e solidariedade. Paulo Freire afirmava que a conscientização e a participação ativa são fundamentais para a emancipação — e o voluntariado encarna exatamente isso. Em campanhas históricas e contemporâneas, voluntários já organizaram suporte em crises, construíram redes comunitárias e trouxeram dignidade para muitos. Para fortalecer essa prática, é necessário que o Estado apoie organizações sociais, promova políticas públicas que incentivem o voluntariado e reconheça formalmente o valor social daqueles que dedicam seu tempo ao bem coletivo.` },
  { tema: "FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB", texto: `A dependência em jogos de apostas online cresceu com a expansão da internet e se tornou um problema de saúde pública. No Brasil, muitos jovens são atraídos pelo sonho de ganhar dinheiro fácil, sem perceber os riscos. Byung-Chul Han analisa como a “sociedade do cansaço” torna o jogo uma fuga ilusória, e Bauman descreve como a modernidade líquida intensifica a busca por recompensas imediatas. Psicologicamente, plataformas de aposta exploram reforço variável (Skinner) para manter os usuários dependentes. Para enfrentar esse problema, é urgente criar programas de acolhimento no SUS, campanhas de educação financeira e produções midiáticas que ressignifiquem a ideia de “sorte” como projeto de vida sustentável.` },
  { tema: "O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE", texto: `Os alimentos ultraprocessados são baratos, práticos e muito presentes no dia a dia, mas têm impacto grave na saúde: obesidade, diabetes, hipertensão e outras doenças crônicas. Esses alimentos são parte de um sistema capitalista que valoriza a produção industrial em massa em detrimento da qualidade nutricional. Para reverter esse quadro, são necessárias políticas públicas que tributen menos frutas, verduras e alimentos frescos, mais educação nutricional nas escolas e campanhas que conscientizem as pessoas sobre os riscos de uma dieta industrializada.` },
  { tema: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO", texto: `O descarte inadequado de lixo eletrônico representa uma ameaça ambiental significativa: metais pesados, substâncias tóxicas e componentes inflamáveis poluem solos e águas. A obsolescência rápida impulsionada pela lógica do consumo descarte agrava essa crise. A modernidade líquida, teoria de Bauman, ajuda a entender por que descartamos tanto: vivemos com produtos descartáveis. Para mitigar isso, é necessário fortalecer a logística reversa, exigir responsabilidade estendida das empresas e educar a população sobre descarte consciente.` },
  { tema: "AS MUDANÇAS CLIMÁTICAS NO BRASIL E SEUS DESAFIOS", texto: `As mudanças climáticas representam um dos maiores desafios do século XXI. No Brasil, o desmatamento, a degradação do solo e a emissão de gases de efeito estufa ameaçam biomas, comunidades e a própria agricultura. A lógica capitalista, denunciada por Karl Marx, se reflete no agronegócio predatório que lucra à custa da natureza. Para enfrentar essa crise, o Estado deve incentivar práticas agrícolas sustentáveis, fiscalizar o uso da terra e promover a educação ambiental nas escolas.` },
  { tema: "PRINCIPAIS FATORES QUE INFLUENCIAM NA QUALIDADE DE VIDA E NO BEM-ESTAR DA POPULAÇÃO", texto: `O bem-estar social depende de saúde, educação e justiça social. Aristóteles já falava da eudaimonia como uma vida plena, mas, para muitos, isso é inacessível devido à desigualdade. No Brasil, o SUS, a educação pública e a distribuição de renda são fundamentais para garantir dignidade. Políticas públicas que priorizem saúde mental, educação de qualidade e segurança são cruciais para elevar a qualidade de vida de todos.` },
  { tema: "ACESSIBILIDADE E INCLUSÃO DE PESSOAS COM DEFICIÊNCIA NO BRASIL", texto: `A inclusão de pessoas com deficiência é uma questão de justiça social e cidadania plena. Muitas instituições ainda não têm recursos essenciais: intérpretes de Libras, materiais adaptados ou software acessível. A ausência dessas adaptações reforça a desigualdade. É urgente que o Estado invista em infraestrutura acessível, fiscalize leis existentes e promova campanhas de conscientização para que a acessibilidade seja visão, não exceção.` },
  { tema: "POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?", texto: `A pressão estética sobre os jovens é intensa: padrões de beleza, consumo de redes sociais e a urgência de “parecer adulto” levam muitos adolescentes a considerar procedimentos estéticos. Cirurgias plásticas nessa fase podem ter riscos físicos e emocionais graves. Para combater isso, é necessário promover uma educação sobre autoestima, mídia e corpo nas escolas, e uma cultura que valorize o bem-estar mais do que a aparência.` }
];

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
