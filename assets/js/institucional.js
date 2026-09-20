/* =========================================================================
   Páginas institucionais, ajuda e políticas — conteúdo por ?p=
   ========================================================================= */
(function (janela, documento) {
  'use strict';

  var D = janela.LojaDados;
  var L = janela.Loja;
  var CFG = D.config;

  var LOJAS = [
    { nome: 'Bem Viver Pinheiros', end: 'Rua das Acácias, 1.200 — Pinheiros, São Paulo/SP',
      hora: 'Seg. a sáb., 7h às 22h · Dom., 8h às 20h', tel: '(11) 4000-0001', servicos: ['Farmácia 24h aos sábados', 'Aplicação de injetáveis', 'Aferição de pressão'] },
    { nome: 'Bem Viver Santana', end: 'Av. Brasilândia, 85 — Santana, São Paulo/SP',
      hora: 'Seg. a sáb., 8h às 21h', tel: '(11) 4000-0002', servicos: ['Retirada de pedidos online', 'Aferição de glicemia'] },
    { nome: 'Bem Viver Copacabana', end: 'Rua Barão de Ipanema, 340 — Copacabana, Rio de Janeiro/RJ',
      hora: 'Todos os dias, 7h às 23h', tel: '(21) 4000-0003', servicos: ['Aberta todos os dias', 'Aplicação de injetáveis', 'Teste de COVID-19'] },
    { nome: 'Bem Viver Savassi', end: 'Rua Pernambuco, 1.410 — Savassi, Belo Horizonte/MG',
      hora: 'Seg. a sáb., 8h às 22h', tel: '(31) 4000-0004', servicos: ['Retirada de pedidos online', 'Sala de serviços farmacêuticos'] }
  ];

  var FAQ = [
    ['Qual o prazo de entrega?',
     'Depende do seu CEP. Nas capitais e regiões metropolitanas atendidas, a entrega expressa chega em até 2 horas. ' +
     'A entrega padrão leva de 2 a 9 dias úteis conforme a região. O prazo exato aparece na página do produto ' +
     'e no carrinho assim que você informa o CEP.'],
    ['Como funciona o frete grátis?',
     'Pedidos a partir de ' + L.moeda(CFG.freteGratisAcima) + ' têm frete grátis na modalidade padrão para todo o Brasil. ' +
     'A entrega expressa continua sendo cobrada à parte.'],
    ['Posso retirar o pedido em uma loja?',
     'Sim, e a retirada é sempre gratuita. Escolha "Retirar na loja mais próxima" no carrinho. ' +
     'Avisamos por e-mail quando o pedido estiver separado — normalmente em até 4 horas.'],
    ['Vocês vendem medicamentos com receita?',
     'Medicamentos sujeitos a prescrição exigem a apresentação da receita válida. ' +
     'No site trabalhamos com medicamentos isentos de prescrição (MIP), dermocosméticos, ' +
     'suplementos e itens de higiene. Para receituário, procure uma de nossas lojas.'],
    ['Como funciona o Clube Bem Viver?',
     'A assinatura é gratuita. Com o CPF cadastrado, você paga o preço de clube — até 15% abaixo do preço normal — ' +
     'e acumula histórico de compras para receber lembretes de recompra dos seus medicamentos de uso contínuo.'],
    ['Posso trocar ou devolver um produto?',
     'Sim. Você tem 7 dias corridos a partir do recebimento para desistir da compra, conforme o Código de Defesa ' +
     'do Consumidor. Por segurança sanitária, medicamentos e produtos de higiene pessoal só são aceitos de volta ' +
     'com a embalagem lacrada e intacta.'],
    ['Quais as formas de pagamento?',
     'PIX (com 5% de desconto), cartão de crédito em até ' + CFG.parcelasMax + 'x sem juros e boleto bancário. ' +
     'O parcelamento respeita a parcela mínima de ' + L.moeda(CFG.parcelaMinima) + '.'],
    ['Como falo com um farmacêutico?',
     'Nosso time farmacêutico atende de segunda a sábado pelo telefone ' + CFG.telefone + ' e pelo chat do site. ' +
     'O atendimento é gratuito e não substitui uma consulta médica.']
  ];

  /* --------------------------------------------------------------------- */
  var PAGINAS = {
    'quem-somos': {
      titulo: 'Quem somos',
      resumo: 'Uma rede de farmácias de bairro que cresceu sem abrir mão do atendimento de perto.',
      corpo:
        '<p>A Drogaria Bem Viver nasceu em 2011 como uma farmácia de bairro em Pinheiros, São Paulo. ' +
        'A proposta era simples e continua a mesma: ter um farmacêutico disponível para conversar, ' +
        'preço justo em genéricos e um estoque que realmente atenda a vizinhança.</p>' +
        '<p>Hoje são quatro lojas em três estados e uma operação online que entrega para todo o Brasil. ' +
        'O que não mudou foi o atendimento: toda loja tem farmacêutico presente em horário integral, ' +
        'e o mesmo time responde pelo chat e pelo telefone.</p>' +
        '<h2>No que acreditamos</h2>' +
        '<ul>' +
        '<li><strong>Genérico é remédio.</strong> Trabalhamos com genéricos em todas as classes em que eles existem, ' +
        'e explicamos a equivalência sempre que perguntam.</li>' +
        '<li><strong>Informação antes da venda.</strong> Se o produto não é o indicado para o seu caso, ' +
        'nosso time vai dizer isso — mesmo que a venda não aconteça.</li>' +
        '<li><strong>Preço sem letra miúda.</strong> O preço do clube aparece junto do preço normal, ' +
        'em todas as páginas, sem exigir cadastro para ser visto.</li>' +
        '</ul>' +
        '<h2>Números</h2>' +
        '<div class="numeros">' +
          '<div class="numero"><b>2011</b><span>ano de fundação</span></div>' +
          '<div class="numero"><b>4</b><span>lojas físicas</span></div>' +
          '<div class="numero"><b>3</b><span>estados atendidos</span></div>' +
          '<div class="numero"><b>+180 mil</b><span>pedidos entregues</span></div>' +
        '</div>'
    },

    'lojas': {
      titulo: 'Nossas lojas',
      resumo: 'Quatro unidades com farmacêutico presente em horário integral.',
      corpo: '<div class="grade-lojas">' + LOJAS.map(function (l) {
        return '<article class="cartao-loja">' +
          '<h2>' + L.escapar(l.nome) + '</h2>' +
          '<p class="cartao-loja__linha">' + L.icone('local', 15) + ' ' + L.escapar(l.end) + '</p>' +
          '<p class="cartao-loja__linha">' + L.icone('relogio', 15) + ' ' + L.escapar(l.hora) + '</p>' +
          '<p class="cartao-loja__linha">' + L.icone('chat', 15) + ' ' + L.escapar(l.tel) + '</p>' +
          '<ul class="ficha__beneficios">' + l.servicos.map(function (s) {
            return '<li>' + L.icone('cheque', 15) + '<span>' + L.escapar(s) + '</span></li>';
          }).join('') + '</ul>' +
        '</article>';
      }).join('') + '</div>'
    },

    'trabalhe-conosco': {
      titulo: 'Trabalhe conosco',
      resumo: 'Vagas abertas para o time de loja, logística e tecnologia.',
      corpo:
        '<p>Procuramos gente que goste de atender bem e que leve a sério o papel de uma farmácia no bairro. ' +
        'Todas as vagas são registradas em CLT, com vale-refeição, plano de saúde e desconto em compras.</p>' +
        '<h2>Vagas abertas</h2>' +
        '<div class="grade-lojas">' +
          [['Farmacêutico(a) responsável', 'São Paulo/SP — presencial', 'CRF ativo e disponibilidade para escala 6x1'],
           ['Atendente de loja', 'Belo Horizonte/MG — presencial', 'Ensino médio completo; experiência com varejo é diferencial'],
           ['Analista de logística', 'São Paulo/SP — híbrido', 'Experiência com roteirização e last mile'],
           ['Pessoa desenvolvedora front-end', 'Remoto', 'JavaScript, acessibilidade e atenção a detalhe visual']
          ].map(function (v) {
            return '<article class="cartao-loja"><h2>' + v[0] + '</h2>' +
              '<p class="cartao-loja__linha">' + L.icone('local', 15) + ' ' + v[1] + '</p>' +
              '<p>' + v[2] + '</p>' +
              '<a class="btn btn--contorno" href="institucional.html?p=atendimento">Quero me candidatar</a></article>';
          }).join('') +
        '</div>'
    },

    'clube': {
      titulo: 'Clube Bem Viver',
      resumo: 'Programa de fidelidade gratuito com até 15% de desconto em todo o site.',
      corpo:
        '<p>O Clube Bem Viver é gratuito e não tem mensalidade. Basta cadastrar seu CPF para pagar o preço ' +
        'de clube — que aparece em todas as páginas de produto, ao lado do preço normal.</p>' +
        '<h2>O que você ganha</h2>' +
        '<ul>' +
        '<li>Até 15% de desconto em todo o catálogo, todos os dias.</li>' +
        '<li>Lembretes de recompra dos medicamentos de uso contínuo, no ritmo da sua receita.</li>' +
        '<li>Histórico de compras disponível para apresentar no imposto de renda ou ao seu médico.</li>' +
        '<li>Cupons exclusivos por e-mail, sem disparo mais de uma vez por semana.</li>' +
        '</ul>' +
        '<h2>O que fazemos com seus dados</h2>' +
        '<p>Usamos seu CPF apenas para identificar suas compras e aplicar o desconto. ' +
        'Não vendemos nem compartilhamos dados de saúde com terceiros. Você pode pedir a exclusão ' +
        'do cadastro a qualquer momento pelo <a href="institucional.html?p=lgpd">portal do titular</a>.</p>' +
        '<p><a class="btn btn--principal" href="conta.html">Criar minha conta</a></p>'
    },

    'atendimento': {
      titulo: 'Central de atendimento',
      resumo: 'Fale com nosso time — inclusive com um farmacêutico.',
      corpo:
        '<div class="grade-lojas">' +
          '<article class="cartao-loja"><h2>Telefone</h2>' +
            '<p class="cartao-loja__linha">' + L.icone('chat', 15) + ' ' + CFG.telefone + '</p>' +
            '<p>Segunda a sexta, das 8h às 20h. Sábados, das 8h às 14h.</p></article>' +
          '<article class="cartao-loja"><h2>Chat com farmacêutico</h2>' +
            '<p class="cartao-loja__linha">' + L.icone('escudo', 15) + ' Atendimento gratuito</p>' +
            '<p>Tire dúvidas sobre posologia, interações e uso de medicamentos isentos de prescrição. ' +
            'Não substitui consulta médica.</p></article>' +
          '<article class="cartao-loja"><h2>E-mail</h2>' +
            '<p class="cartao-loja__linha">' + L.icone('usuario', 15) + ' atendimento@bemviver.exemplo</p>' +
            '<p>Respondemos em até 1 dia útil.</p></article>' +
          '<article class="cartao-loja"><h2>Farmacovigilância</h2>' +
            '<p class="cartao-loja__linha">' + L.icone('escudo', 15) + ' Reação adversa a medicamento</p>' +
            '<p>Se você teve uma reação inesperada, avise-nos. Registramos e notificamos a ANVISA.</p></article>' +
        '</div>' +
        '<h2>Prefere que a gente ligue?</h2>' +
        '<form class="form-avaliacao" style="max-width:520px" data-contato>' +
          '<div><label for="ct-nome">Seu nome</label><input id="ct-nome" required></div>' +
          '<div><label for="ct-tel">Telefone com DDD</label><input id="ct-tel" required></div>' +
          '<div><label for="ct-msg">Como podemos ajudar?</label><textarea id="ct-msg" required></textarea></div>' +
          '<button class="btn btn--principal" type="submit" style="justify-self:start">Solicitar contato</button>' +
        '</form>'
    },

    'entregas': {
      titulo: 'Prazos e entregas',
      resumo: 'Como, quando e por quanto entregamos.',
      corpo:
        '<h2>Modalidades</h2>' +
        '<table class="tabela-specs"><tbody>' +
          '<tr><th scope="row">Entrega expressa</th><td>Em até 2 horas, nas capitais e regiões metropolitanas ' +
            'com cobertura. Pedidos feitos após as 20h saem no dia seguinte.</td></tr>' +
          '<tr><th scope="row">Entrega padrão</th><td>De 2 a 9 dias úteis conforme a região. ' +
            'Grátis em pedidos acima de ' + L.moeda(CFG.freteGratisAcima) + '.</td></tr>' +
          '<tr><th scope="row">Retirada em loja</th><td>Sempre gratuita. Pronto em até 4 horas ' +
            'em qualquer uma das nossas unidades.</td></tr>' +
        '</tbody></table>' +
        '<h2>Acompanhamento</h2>' +
        '<p>Assim que o pedido é despachado, enviamos o código de rastreio por e-mail. ' +
        'Você também acompanha tudo em <a href="conta.html">Meus pedidos</a>.</p>' +
        '<h2>Cuidados no transporte</h2>' +
        '<p>Medicamentos termossensíveis viajam em embalagem térmica com controle de temperatura. ' +
        'Produtos de uso contínuo são separados em sacola lacrada e identificada.</p>' +
        '<div class="aviso-legal"><strong>Importante</strong>A entrega é feita ao morador do endereço ' +
        'informado, mediante conferência. Não deixamos medicamentos com porteiro sem autorização prévia.</div>'
    },

    'trocas': {
      titulo: 'Trocas e devoluções',
      resumo: 'Seus direitos e o que a legislação sanitária permite.',
      corpo:
        '<h2>Arrependimento em 7 dias</h2>' +
        '<p>Conforme o artigo 49 do Código de Defesa do Consumidor, você pode desistir de uma compra feita ' +
        'pela internet em até 7 dias corridos contados do recebimento, sem precisar justificar. ' +
        'Devolvemos o valor integral, incluindo o frete.</p>' +
        '<h2>Restrições sanitárias</h2>' +
        '<p>Por determinação da ANVISA, medicamentos, produtos de higiene pessoal e cosméticos só podem ' +
        'retornar ao estoque se a embalagem estiver <strong>lacrada e intacta</strong>. ' +
        'Itens abertos não podem ser aceitos de volta, mesmo dentro do prazo de arrependimento.</p>' +
        '<h2>Produto com defeito ou avaria</h2>' +
        '<p>Se o item chegou danificado, com validade vencida ou diferente do pedido, avise-nos em até 30 dias. ' +
        'Trocamos ou estornamos o valor sem custo, e a coleta é por nossa conta.</p>' +
        '<h2>Como solicitar</h2>' +
        '<p>Abra a solicitação em <a href="conta.html">Meus pedidos</a> ou ligue para ' + CFG.telefone + '. ' +
        'O estorno aparece em até duas faturas no cartão, ou em até 5 dias úteis no caso do PIX.</p>'
    },

    'faq': {
      titulo: 'Perguntas frequentes',
      resumo: 'As dúvidas que mais chegam ao nosso atendimento.',
      corpo: '<div class="acordeao">' + FAQ.map(function (par, i) {
        return '<div class="acordeao__item">' +
          '<button class="acordeao__titulo" type="button" aria-expanded="false" aria-controls="faq-' + i + '">' +
            '<span>' + L.escapar(par[0]) + '</span>' + L.icone('seta_baixo', 18) + '</button>' +
          '<div class="acordeao__corpo" id="faq-' + i + '" hidden><p>' + par[1] + '</p></div>' +
        '</div>';
      }).join('') + '</div>'
    },

    'privacidade': {
      titulo: 'Política de privacidade',
      resumo: 'Quais dados coletamos, por quê, e o que você pode exigir de nós.',
      corpo:
        '<p class="miudos">Última atualização: 20 de setembro de 2026.</p>' +
        '<h2>Dados que coletamos</h2>' +
        '<ul>' +
        '<li><strong>Cadastro:</strong> nome, CPF, e-mail, telefone e endereço de entrega.</li>' +
        '<li><strong>Compras:</strong> itens adquiridos, valores e forma de pagamento.</li>' +
        '<li><strong>Navegação:</strong> páginas visitadas e produtos vistos, para recomendar itens relevantes.</li>' +
        '</ul>' +
        '<h2>Dados sensíveis</h2>' +
        '<p>O histórico de compra de medicamentos é dado pessoal sensível de saúde, conforme o artigo 5º, II ' +
        'da LGPD. Tratamos essa informação apenas para executar a venda, cumprir obrigações sanitárias ' +
        'e oferecer lembretes de recompra que você pode desativar a qualquer momento. ' +
        '<strong>Não compartilhamos histórico de saúde com anunciantes, seguradoras ou planos de saúde.</strong></p>' +
        '<h2>Com quem compartilhamos</h2>' +
        '<p>Apenas com quem é indispensável para a entrega: transportadora, meio de pagamento e, ' +
        'quando exigido, autoridades sanitárias. Todos operam sob contrato com cláusula de confidencialidade.</p>' +
        '<h2>Por quanto tempo guardamos</h2>' +
        '<p>Dados fiscais ficam retidos por 5 anos, por exigência legal. ' +
        'Dados de navegação são descartados em 12 meses. O restante é apagado quando você pede a exclusão.</p>' +
        '<h2>Seus direitos</h2>' +
        '<p>Você pode pedir acesso, correção, portabilidade ou exclusão dos seus dados pelo ' +
        '<a href="institucional.html?p=lgpd">portal do titular</a>. Respondemos em até 15 dias.</p>'
    },

    'termos': {
      titulo: 'Termos de uso',
      resumo: 'As regras para comprar e usar este site.',
      corpo:
        '<p class="miudos">Última atualização: 20 de setembro de 2026.</p>' +
        '<h2>1. Quem pode comprar</h2>' +
        '<p>É preciso ter 18 anos ou mais e capacidade civil. Pedidos com dados incorretos ou ' +
        'indício de fraude podem ser cancelados, com estorno integral.</p>' +
        '<h2>2. Preços e disponibilidade</h2>' +
        '<p>Preços e estoques valem apenas para o site e podem diferir das lojas físicas. ' +
        'Em caso de erro evidente de preço, entramos em contato antes de faturar e você decide se mantém o pedido.</p>' +
        '<h2>3. Medicamentos</h2>' +
        '<p>Vendemos pelo site apenas medicamentos isentos de prescrição. ' +
        'As informações desta loja não substituem a bula nem a orientação de um profissional de saúde.</p>' +
        '<h2>4. Conteúdo do site</h2>' +
        '<p>Textos, imagens e a identidade visual desta loja são de sua titularidade. ' +
        'As informações técnicas dos produtos seguem o que o fabricante declara.</p>' +
        '<h2>5. Foro</h2>' +
        '<p>Fica eleito o foro da comarca de São Paulo/SP para dirimir eventuais controvérsias.</p>'
    },

    'cookies': {
      titulo: 'Política de cookies',
      resumo: 'O que guardamos no seu navegador e como desligar.',
      corpo:
        '<h2>Tipos de cookie</h2>' +
        '<table class="tabela-specs"><tbody>' +
          '<tr><th scope="row">Essenciais</th><td>Mantêm seu carrinho, sua sessão e o CEP informado. ' +
            'Sem eles o site não funciona, e por isso não podem ser desativados.</td></tr>' +
          '<tr><th scope="row">Preferências</th><td>Lembram favoritos e produtos vistos recentemente.</td></tr>' +
          '<tr><th scope="row">Analíticos</th><td>Medem quais páginas são mais usadas, de forma agregada.</td></tr>' +
          '<tr><th scope="row">Publicidade</th><td>Não utilizamos cookies de publicidade comportamental.</td></tr>' +
        '</tbody></table>' +
        '<h2>Como desativar</h2>' +
        '<p>Você pode bloquear cookies nas configurações do seu navegador. ' +
        'Bloqueando os essenciais, o carrinho deixa de funcionar entre páginas.</p>' +
        '<div class="aviso-legal"><strong>Nesta demonstração</strong>Nenhum dado sai do seu navegador. ' +
        'Carrinho, favoritos e sessão ficam apenas no <code>localStorage</code> local, ' +
        'e não há rastreamento de terceiros.</div>'
    },

    'lgpd': {
      titulo: 'Portal do titular (LGPD)',
      resumo: 'Exerça seus direitos sobre os dados que temos a seu respeito.',
      corpo:
        '<p>A Lei Geral de Proteção de Dados garante a você uma série de direitos sobre seus dados pessoais. ' +
        'Use o formulário abaixo para exercê-los — respondemos em até 15 dias, sem custo.</p>' +
        '<h2>O que você pode pedir</h2>' +
        '<ul>' +
        '<li><strong>Confirmação e acesso:</strong> saber se tratamos seus dados e receber uma cópia.</li>' +
        '<li><strong>Correção:</strong> atualizar dados incompletos ou desatualizados.</li>' +
        '<li><strong>Portabilidade:</strong> receber seus dados em formato aberto.</li>' +
        '<li><strong>Eliminação:</strong> apagar dados tratados com base no seu consentimento.</li>' +
        '<li><strong>Revogação:</strong> retirar o consentimento a qualquer momento.</li>' +
        '</ul>' +
        '<form class="form-avaliacao" style="max-width:520px" data-contato>' +
          '<div><label for="lg-nome">Nome completo</label><input id="lg-nome" required></div>' +
          '<div><label for="lg-cpf">CPF</label><input id="lg-cpf" required></div>' +
          '<div><label for="lg-tipo">Que direito deseja exercer?</label>' +
            '<select id="lg-tipo" style="width:100%;border:1.5px solid var(--linha);border-radius:8px;padding:10px 12px">' +
            '<option>Confirmação e acesso</option><option>Correção</option><option>Portabilidade</option>' +
            '<option>Eliminação</option><option>Revogação do consentimento</option></select></div>' +
          '<div><label for="lg-msg">Detalhes do pedido</label><textarea id="lg-msg"></textarea></div>' +
          '<button class="btn btn--principal" type="submit" style="justify-self:start">Enviar solicitação</button>' +
        '</form>' +
        '<p class="miudos">Encarregado de dados (DPO): privacidade@bemviver.exemplo</p>'
    }
  };

  /* --------------------------------------------------------------------- */
  function montar() {
    var chave = new janela.URLSearchParams(janela.location.search).get('p') || 'quem-somos';
    var pagina = PAGINAS[chave] || PAGINAS['quem-somos'];

    L.iniciar('institucional');
    documento.title = pagina.titulo + ' | ' + CFG.nomeLoja;

    var meta = documento.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', pagina.resumo);

    documento.getElementById('trilha').innerHTML =
      '<nav class="trilha" aria-label="Você está aqui"><div class="container"><ol>' +
        '<li><a href="index.html">Início</a></li>' +
        '<li aria-current="page">' + L.escapar(pagina.titulo) + '</li></ol></div></nav>';

    var atalhos = [
      ['quem-somos', 'Quem somos'], ['lojas', 'Nossas lojas'], ['clube', 'Clube Bem Viver'],
      ['atendimento', 'Atendimento'], ['entregas', 'Entregas'], ['trocas', 'Trocas'],
      ['faq', 'Dúvidas'], ['privacidade', 'Privacidade'], ['termos', 'Termos'],
      ['cookies', 'Cookies'], ['lgpd', 'LGPD']
    ];

    documento.getElementById('conteudo').innerHTML =
      '<div class="container"><div class="layout-institucional">' +
        '<nav class="indice" aria-label="Seções institucionais"><ul>' +
          atalhos.map(function (a) {
            return '<li><a href="institucional.html?p=' + a[0] + '"' +
              (a[0] === chave ? ' aria-current="page"' : '') + '>' + a[1] + '</a></li>';
          }).join('') +
        '</ul></nav>' +
        '<article class="prosa">' +
          '<h1>' + L.escapar(pagina.titulo) + '</h1>' +
          '<p class="prosa__resumo">' + L.escapar(pagina.resumo) + '</p>' +
          pagina.corpo +
        '</article>' +
      '</div></div>';

    /* acordeão do FAQ */
    documento.addEventListener('click', function (e) {
      var botao = e.target.closest('.acordeao__titulo');
      if (!botao) return;
      var aberto = botao.getAttribute('aria-expanded') === 'true';
      botao.setAttribute('aria-expanded', aberto ? 'false' : 'true');
      var corpo = documento.getElementById(botao.getAttribute('aria-controls'));
      if (corpo) corpo.hidden = aberto;
    });

    documento.addEventListener('submit', function (e) {
      if (e.target.matches('[data-contato]')) {
        e.preventDefault();
        L.aviso('Solicitação registrada. Nosso time responde em breve.', 'ok');
        e.target.reset();
      }
    });
  }

  if (documento.readyState === 'loading') {
    documento.addEventListener('DOMContentLoaded', montar);
  } else { montar(); }
})(window, document);
