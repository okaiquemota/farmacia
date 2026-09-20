/* =========================================================================
   Núcleo compartilhado: cabeçalho, rodapé, carrinho, favoritos, avisos.
   ========================================================================= */
(function (janela, documento) {
  'use strict';

  var D = janela.LojaDados;
  var CFG = D.config;

  /* ------------------------------------------------------------ ícones */
  var ICONES = {
    busca: '<path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-4.35-4.35"/>',
    usuario: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    coracao: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
    sacola: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    caminhao: '<path d="M14 18V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2"/><path d="M14 9h4l4 4v4a1 1 0 0 1-1 1h-1"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    escudo: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
    cartao: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    devolucao: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    cheque: '<path d="m20 6-11 11-5-5"/>',
    estrela: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/>',
    mais: '<path d="M12 5v14M5 12h14"/>',
    menos: '<path d="M5 12h14"/>',
    fechar: '<path d="M18 6 6 18M6 6l12 12"/>',
    seta_esq: '<path d="m15 18-6-6 6-6"/>',
    seta_dir: '<path d="m9 18 6-6-6-6"/>',
    seta_baixo: '<path d="m6 9 6 6 6-6"/>',
    lupa_vazia: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M8 11h6"/>',
    local: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.8-.8L3 21l1.9-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z"/>',
    pix: '<path d="m12 3 4 4-4 4-4-4 4-4Z"/><path d="m12 13 4 4-4 4-4-4 4-4Z"/><path d="m3 12 4-4 4 4-4 4-4-4Z"/><path d="m13 12 4-4 4 4-4 4-4-4Z"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    camera: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
    globo: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15 0 18-2.5-3-2.5-15.4 0-18Z"/>',
    cabelos: '<path d="M12 3a7 7 0 0 0-7 7v11h3v-8a4 4 0 0 1 8 0v8h3V10a7 7 0 0 0-7-7Z"/>',
    dermo: '<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M9 15c1.5 1.2 4.5 1.2 6 0"/>',
    medicamentos: '<rect x="2" y="8" width="20" height="8" rx="4"/><path d="M12 8v8"/>',
    vitaminas: '<path d="M12 2a5 5 0 0 1 5 5c0 4-5 7-5 15C12 14 7 11 7 7a5 5 0 0 1 5-5Z"/>',
    higiene: '<path d="M9 2h6v4H9z"/><path d="M7 6h10v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6Z"/><path d="M7 11h10"/>',
    infantil: '<circle cx="12" cy="12" r="9"/><path d="M8 9h.01M16 9h.01M8.5 14.5a5 5 0 0 0 7 0"/>',
    ofertas: '<path d="M20.6 12.6 12 21.2 3.4 12.6A5.4 5.4 0 0 1 11 5l1 1 1-1a5.4 5.4 0 0 1 7.6 7.6Z"/>'
  };

  function icone(nome, tamanho, preenchido) {
    var t = tamanho || 20;
    return '<svg viewBox="0 0 24 24" width="' + t + '" height="' + t + '" aria-hidden="true" ' +
      'fill="' + (preenchido ? 'currentColor' : 'none') + '" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      (ICONES[nome] || '') + '</svg>';
  }

  /* ------------------------------------------------------------ utilidades */
  function moeda(v) {
    return 'R$ ' + Number(v || 0).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function escapar(txt) {
    return String(txt == null ? '' : txt)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function semAcento(txt) {
    return String(txt || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function dataBr(iso) {
    var p = String(iso).split('-');
    return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : iso;
  }

  function guardar(chave, valor) {
    try { janela.localStorage.setItem(chave, JSON.stringify(valor)); } catch (e) { /* modo privado */ }
  }

  function recuperar(chave, padrao) {
    try {
      var bruto = janela.localStorage.getItem(chave);
      return bruto ? JSON.parse(bruto) : padrao;
    } catch (e) { return padrao; }
  }

  function parcelamento(valor) {
    var n = Math.min(CFG.parcelasMax, Math.max(1, Math.floor(valor / CFG.parcelaMinima)));
    return { vezes: n, valor: valor / n };
  }

  function desconto(produto) {
    if (!produto.precoDe || produto.precoDe <= produto.preco) return 0;
    return Math.round((1 - produto.preco / produto.precoDe) * 100);
  }

  function precoPix(valor) { return valor * (1 - CFG.descontoPix); }

  /* ------------------------------------------------------------ estrelas */
  function estrelas(nota, tamanho) {
    var t = tamanho || 14;
    var html = '<span class="estrelas" aria-hidden="true">';
    for (var i = 1; i <= 5; i++) {
      var op = nota >= i ? 1 : (nota >= i - 0.5 ? 0.55 : 0.22);
      html += '<svg viewBox="0 0 24 24" width="' + t + '" height="' + t + '" fill="currentColor" ' +
        'opacity="' + op + '">' + ICONES.estrela + '</svg>';
    }
    return html + '</span>';
  }

  /* ------------------------------------------------------------ avisos */
  function aviso(texto, tipo) {
    var caixa = documento.getElementById('avisos');
    if (!caixa) {
      caixa = documento.createElement('div');
      caixa.id = 'avisos';
      caixa.setAttribute('role', 'status');
      caixa.setAttribute('aria-live', 'polite');
      documento.body.appendChild(caixa);
    }
    var el = documento.createElement('div');
    el.className = 'aviso' + (tipo ? ' aviso--' + tipo : '');
    el.innerHTML = (tipo === 'ok' ? icone('cheque', 18) : '') + '<span>' + escapar(texto) + '</span>';
    caixa.appendChild(el);
    janela.setTimeout(function () {
      el.style.opacity = '0';
      janela.setTimeout(function () { el.remove(); }, 250);
    }, 3200);
  }

  /* ------------------------------------------------------------ carrinho */
  var CHAVE_CARRINHO = 'bv:carrinho';
  var CHAVE_FAVORITOS = 'bv:favoritos';
  var CHAVE_VISTOS = 'bv:vistos';
  var CHAVE_CEP = 'bv:cep';
  var CHAVE_AVALIACOES = 'bv:avaliacoes';

  var carrinho = recuperar(CHAVE_CARRINHO, []);
  var favoritos = recuperar(CHAVE_FAVORITOS, []);

  function salvarCarrinho() {
    guardar(CHAVE_CARRINHO, carrinho);
    atualizarContadores();
    documento.dispatchEvent(new janela.CustomEvent('carrinho:mudou'));
  }

  function itensCarrinho() { return carrinho.slice(); }

  function totalItens() {
    return carrinho.reduce(function (s, i) { return s + i.qtd; }, 0);
  }

  function subtotal() {
    return carrinho.reduce(function (s, i) { return s + i.preco * i.qtd; }, 0);
  }

  function adicionar(sku, qtd, variacao) {
    var produto = D.porSku(sku);
    if (!produto) return;
    if (produto.estoque <= 0) { aviso('Produto indisponível no momento.', 'erro'); return; }

    var q = Math.max(1, qtd || 1);
    var chave = sku + (variacao ? '|' + variacao : '');
    var preco = produto.preco;
    var rotulo = '';

    if (variacao && produto.variacoes) {
      for (var v = 0; v < produto.variacoes.length; v++) {
        if (produto.variacoes[v].id === variacao) {
          preco = produto.variacoes[v].preco;
          rotulo = produto.variacoes[v].rotulo;
        }
      }
    }

    var existente = null;
    for (var i = 0; i < carrinho.length; i++) { if (carrinho[i].chave === chave) existente = carrinho[i]; }

    if (existente) {
      existente.qtd = Math.min(produto.estoque, existente.qtd + q);
    } else {
      carrinho.push({ chave: chave, sku: sku, variacao: variacao || null, rotulo: rotulo, preco: preco, qtd: Math.min(produto.estoque, q) });
    }
    salvarCarrinho();
    aviso('Produto adicionado ao carrinho.', 'ok');
    abrirGaveta();
  }

  function alterarQtd(chave, qtd) {
    for (var i = 0; i < carrinho.length; i++) {
      if (carrinho[i].chave === chave) {
        var produto = D.porSku(carrinho[i].sku);
        var max = produto ? produto.estoque : 99;
        carrinho[i].qtd = Math.min(max, Math.max(1, qtd));
      }
    }
    salvarCarrinho();
  }

  function remover(chave) {
    carrinho = carrinho.filter(function (i) { return i.chave !== chave; });
    salvarCarrinho();
    aviso('Item removido do carrinho.');
  }

  function esvaziar() { carrinho = []; salvarCarrinho(); }

  /* ------------------------------------------------------------ favoritos */
  function ehFavorito(sku) { return favoritos.indexOf(sku) !== -1; }

  function alternarFavorito(sku) {
    var i = favoritos.indexOf(sku);
    if (i === -1) { favoritos.push(sku); aviso('Adicionado aos favoritos.', 'ok'); }
    else { favoritos.splice(i, 1); aviso('Removido dos favoritos.'); }
    guardar(CHAVE_FAVORITOS, favoritos);
    atualizarContadores();
    return ehFavorito(sku);
  }

  /* ------------------------------------------------------------ vistos */
  function registrarVisto(sku) {
    var lista = recuperar(CHAVE_VISTOS, []).filter(function (s) { return s !== sku; });
    lista.unshift(sku);
    guardar(CHAVE_VISTOS, lista.slice(0, 8));
  }

  function vistosRecentemente(excluir) {
    return recuperar(CHAVE_VISTOS, [])
      .filter(function (s) { return s !== excluir; })
      .map(function (s) { return D.porSku(s); })
      .filter(Boolean);
  }

  /* ------------------------------------------------------------ frete */
  function calcularFrete(cep, valorPedido) {
    var limpo = String(cep || '').replace(/\D/g, '');
    if (limpo.length !== 8) return { erro: 'Digite um CEP válido com 8 dígitos.' };

    var numero = parseInt(limpo, 10);
    var regiao = null;
    for (var i = 0; i < D.regioes.length; i++) {
      if (numero >= D.regioes[i].faixa[0] && numero <= D.regioes[i].faixa[1]) regiao = D.regioes[i];
    }
    if (!regiao) return { erro: 'Não encontramos esse CEP. Confira os números digitados.' };

    var gratis = valorPedido >= CFG.freteGratisAcima;
    var opcoes = [
      {
        nome: 'Entrega padrão', prazo: regiao.prazo + ' dia' + (regiao.prazo > 1 ? 's' : '') + ' útil' + (regiao.prazo > 1 ? 'eis' : ''),
        valor: gratis ? 0 : regiao.base, gratis: gratis
      },
      {
        nome: 'Retirar na loja mais próxima', prazo: 'pronto em até 4 horas',
        valor: 0, gratis: true
      }
    ];
    if (regiao.expresso) {
      opcoes.splice(1, 0, { nome: 'Entrega expressa', prazo: 'hoje, em até 2 horas', valor: regiao.base + 12.9, gratis: false });
    }
    return { regiao: regiao, opcoes: opcoes, cep: limpo.slice(0, 5) + '-' + limpo.slice(5) };
  }

  function mascaraCep(campo) {
    campo.addEventListener('input', function () {
      var v = campo.value.replace(/\D/g, '').slice(0, 8);
      campo.value = v.length > 5 ? v.slice(0, 5) + '-' + v.slice(5) : v;
    });
  }

  /* ------------------------------------------------------------ cartão */
  function cartaoProduto(p, opcoes) {
    var op = opcoes || {};
    var off = desconto(p);
    var parc = parcelamento(p.preco);
    var fora = p.estoque <= 0;
    var selos = '';

    if (fora) selos += '<span class="selo selo--esgotado">Indisponível</span>';
    else if (off > 0) selos += '<span class="selo selo--oferta">-' + off + '%</span>';
    if (p.generico) selos += '<span class="selo selo--generico">Genérico</span>';
    (p.tags || []).forEach(function (t) { selos += '<span class="selo selo--novo">' + escapar(t) + '</span>'; });

    var href = 'produto.html?sku=' + encodeURIComponent(p.sku);

    return '' +
      '<article class="cartao" data-sku="' + escapar(p.sku) + '">' +
        '<div class="cartao__selos">' + selos + '</div>' +
        '<button class="cartao__favorito" type="button" data-favorito="' + escapar(p.sku) + '" ' +
          'aria-pressed="' + (ehFavorito(p.sku) ? 'true' : 'false') + '" ' +
          'aria-label="Adicionar ' + escapar(p.nome) + ' aos favoritos">' +
          icone('coracao', 16, ehFavorito(p.sku)) + '</button>' +
        '<a class="cartao__figura" href="' + href + '">' +
          '<img src="assets/img/' + escapar(p.imagem) + '" alt="' + escapar(p.nome) + '" loading="lazy" width="212" height="168">' +
        '</a>' +
        '<span class="cartao__marca">' + escapar(p.marca) + '</span>' +
        '<a class="cartao__nome" href="' + href + '">' + escapar(p.nome) + '</a>' +
        '<div class="avaliacao">' + estrelas(p.nota) +
          '<span>' + p.nota.toFixed(1).replace('.', ',') + ' (' + p.qtdAvaliacoes + ')</span></div>' +
        '<div class="cartao__precos">' +
          (off > 0 ? '<span class="preco-antigo">' + moeda(p.precoDe) + '</span>' : '') +
          '<span class="preco-atual">' + moeda(p.preco) + '</span>' +
          '<span class="preco-parcela">ou ' + parc.vezes + 'x de ' + moeda(parc.valor) + ' sem juros</span>' +
          (p.precoClube ? '<span class="preco-clube">' + icone('coracao', 12, true) +
            'Clube ' + moeda(p.precoClube) + '</span>' : '') +
        '</div>' +
        (op.semBotao ? '' :
          '<button class="btn ' + (fora ? 'btn--neutro' : 'btn--principal') + ' btn--bloco" type="button" ' +
          'data-add="' + escapar(p.sku) + '"' + (fora ? ' disabled' : '') + '>' +
          (fora ? 'Avise-me' : icone('sacola', 16) + ' Adicionar') + '</button>') +
      '</article>';
  }

  function prateleira(produtos, id) {
    var idt = id || ('prateleira-' + Math.random().toString(36).slice(2, 8));
    return '<div class="prateleira">' +
      '<button class="carrossel-seta carrossel-seta--ant" type="button" data-rolar="-1" data-alvo="' + idt + '" aria-label="Anterior">' + icone('seta_esq') + '</button>' +
      '<div class="prateleira__trilho" id="' + idt + '">' + produtos.map(function (p) { return cartaoProduto(p); }).join('') + '</div>' +
      '<button class="carrossel-seta carrossel-seta--prox" type="button" data-rolar="1" data-alvo="' + idt + '" aria-label="Próximo">' + icone('seta_dir') + '</button>' +
      '</div>';
  }

  /* ------------------------------------------------------------ cabeçalho */
  function montarCabecalho(paginaAtiva) {
    var alvo = documento.getElementById('cabecalho');
    if (!alvo) return;

    var links = D.categorias.map(function (c) {
      return '<li><a href="categoria.html?cat=' + c.id + '"' +
        (paginaAtiva === c.id ? ' class="ativo"' : (c.id === 'ofertas' ? ' class="destaque"' : '')) +
        '>' + escapar(c.nome) + '</a></li>';
    }).join('');

    alvo.innerHTML = '' +
      '<div class="barra-aviso">' +
        '<strong>Frete grátis</strong> em compras acima de ' + moeda(CFG.freteGratisAcima) +
        ' · Entrega expressa em até 2 horas nas capitais' +
      '</div>' +
      '<div class="cabecalho">' +
        '<div class="container cabecalho__topo">' +
          '<a class="cabecalho__logo" href="index.html" aria-label="' + escapar(CFG.nomeLoja) + ' — página inicial">' +
            '<img src="assets/img/logo.svg" alt="' + escapar(CFG.nomeLoja) + '" width="300" height="64">' +
          '</a>' +
          '<div class="busca">' +
            '<form class="busca__campo" role="search" action="categoria.html" method="get">' +
              '<label class="so-leitor" for="campo-busca">Buscar produtos</label>' +
              '<input id="campo-busca" name="q" type="search" autocomplete="off" ' +
                'placeholder="Busque por produto, marca ou princípio ativo">' +
              '<button class="busca__botao" type="submit" aria-label="Buscar">' + icone('busca', 18) + '</button>' +
            '</form>' +
            '<div class="busca__sugestoes oculto" id="sugestoes" role="listbox" aria-label="Sugestões de busca"></div>' +
          '</div>' +
          '<div class="acoes">' +
            '<a class="acao" href="#conta"><span>' + icone('usuario') + '</span>' +
              '<span class="acao__texto"><small>Olá, visitante</small><b>Entrar</b></span></a>' +
            '<a class="acao" href="#favoritos"><span>' + icone('coracao') + '</span>' +
              '<span class="acao__contador" data-contador-favoritos>0</span>' +
              '<span class="acao__texto"><small>Meus</small><b>Favoritos</b></span></a>' +
            '<button class="acao" type="button" data-abrir-carrinho>' +
              '<span>' + icone('sacola') + '</span>' +
              '<span class="acao__contador" data-contador-carrinho>0</span>' +
              '<span class="acao__texto"><small>Meu</small><b>Carrinho</b></span></button>' +
          '</div>' +
        '</div>' +
        '<nav class="menu" aria-label="Categorias"><div class="container">' +
          '<ul class="menu__lista">' + links + '</ul>' +
        '</div></nav>' +
      '</div>';

    ligarBusca();
    atualizarContadores();
  }

  /* ------------------------------------------------------------ busca */
  function ligarBusca() {
    var campo = documento.getElementById('campo-busca');
    var caixa = documento.getElementById('sugestoes');
    if (!campo || !caixa) return;

    function fechar() { caixa.classList.add('oculto'); caixa.innerHTML = ''; }

    campo.addEventListener('input', function () {
      var termo = semAcento(campo.value.trim());
      if (termo.length < 2) { fechar(); return; }

      var achados = D.produtos.filter(function (p) {
        return semAcento(p.nome).indexOf(termo) !== -1 ||
               semAcento(p.marca).indexOf(termo) !== -1 ||
               semAcento(p.subcategoria).indexOf(termo) !== -1;
      }).slice(0, 6);

      if (!achados.length) {
        caixa.innerHTML = '<div style="padding:14px 16px;color:var(--tinta-500);font-size:13.5px">' +
          'Nenhum produto encontrado para “' + escapar(campo.value.trim()) + '”.</div>';
        caixa.classList.remove('oculto');
        return;
      }

      caixa.innerHTML = achados.map(function (p) {
        return '<a class="busca__sugestao" href="produto.html?sku=' + encodeURIComponent(p.sku) + '" role="option">' +
          '<img src="assets/img/' + escapar(p.imagem) + '" alt="" width="40" height="40">' +
          '<span><b>' + escapar(p.nome) + '</b><span>' + moeda(p.preco) + '</span></span></a>';
      }).join('');
      caixa.classList.remove('oculto');
    });

    campo.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });
    documento.addEventListener('click', function (e) {
      if (!caixa.contains(e.target) && e.target !== campo) fechar();
    });
  }

  /* ------------------------------------------------------------ gaveta */
  function montarGaveta() {
    if (documento.getElementById('gaveta-carrinho')) return;

    var cortina = documento.createElement('div');
    cortina.className = 'cortina';
    cortina.id = 'cortina';
    documento.body.appendChild(cortina);

    var gaveta = documento.createElement('aside');
    gaveta.className = 'gaveta';
    gaveta.id = 'gaveta-carrinho';
    gaveta.setAttribute('aria-hidden', 'true');
    gaveta.setAttribute('aria-label', 'Carrinho de compras');
    gaveta.innerHTML =
      '<div class="gaveta__topo">' +
        '<h2>Meu carrinho</h2>' +
        '<button class="gaveta__fechar" type="button" data-fechar-carrinho aria-label="Fechar carrinho">' +
          icone('fechar') + '</button>' +
      '</div>' +
      '<div class="gaveta__corpo" id="gaveta-itens"></div>' +
      '<div class="gaveta__rodape" id="gaveta-rodape"></div>';
    documento.body.appendChild(gaveta);

    cortina.addEventListener('click', fecharGaveta);
    documento.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fecharGaveta();
    });

    desenharGaveta();
    documento.addEventListener('carrinho:mudou', desenharGaveta);
  }

  function desenharGaveta() {
    var corpo = documento.getElementById('gaveta-itens');
    var rodape = documento.getElementById('gaveta-rodape');
    if (!corpo || !rodape) return;

    if (!carrinho.length) {
      corpo.innerHTML = '<div class="vazio">' + icone('sacola', 48) +
        '<h3>Seu carrinho está vazio</h3>' +
        '<p>Adicione produtos para continuar a compra.</p></div>';
      rodape.innerHTML = '<a class="btn btn--contorno btn--bloco" href="categoria.html">Ver produtos</a>';
      return;
    }

    corpo.innerHTML = carrinho.map(function (item) {
      var p = D.porSku(item.sku);
      if (!p) return '';
      return '<div class="mini-item">' +
        '<img src="assets/img/' + escapar(p.imagem) + '" alt="" width="62" height="62">' +
        '<div><a class="mini-item__nome" href="produto.html?sku=' + encodeURIComponent(p.sku) + '">' +
          escapar(p.nome) + '</a>' +
          (item.rotulo ? '<small>' + escapar(item.rotulo) + '</small><br>' : '') +
          '<small>Qtd.: ' + item.qtd + '</small> · ' +
          '<button class="item-carrinho__remover" type="button" data-remover="' + escapar(item.chave) + '">remover</button>' +
        '</div>' +
        '<b>' + moeda(item.preco * item.qtd) + '</b></div>';
    }).join('');

    var sub = subtotal();
    var falta = CFG.freteGratisAcima - sub;
    rodape.innerHTML =
      (falta > 0
        ? '<div class="progresso-frete">Faltam <strong>' + moeda(falta) + '</strong> para o frete grátis' +
          '<div class="progresso-frete__trilho"><div class="progresso-frete__preenchimento" style="width:' +
          Math.min(100, (sub / CFG.freteGratisAcima) * 100).toFixed(0) + '%"></div></div></div>'
        : '<div class="progresso-frete">' + icone('cheque', 15) + ' <strong>Você ganhou frete grátis!</strong></div>') +
      '<div class="resumo__total"><span>Subtotal</span><span>' + moeda(sub) + '</span></div>' +
      '<a class="btn btn--compra btn--bloco" href="carrinho.html">Fechar pedido</a>' +
      '<button class="btn btn--neutro btn--bloco" type="button" data-fechar-carrinho>Continuar comprando</button>';
  }

  function abrirGaveta() {
    montarGaveta();
    documento.getElementById('gaveta-carrinho').classList.add('aberta');
    documento.getElementById('gaveta-carrinho').setAttribute('aria-hidden', 'false');
    documento.getElementById('cortina').classList.add('aberta');
  }

  function fecharGaveta() {
    var g = documento.getElementById('gaveta-carrinho');
    var c = documento.getElementById('cortina');
    if (g) { g.classList.remove('aberta'); g.setAttribute('aria-hidden', 'true'); }
    if (c) c.classList.remove('aberta');
  }

  /* ------------------------------------------------------------ contadores */
  function atualizarContadores() {
    var c = documento.querySelector('[data-contador-carrinho]');
    if (c) { c.textContent = totalItens(); c.style.display = totalItens() ? '' : 'none'; }
    var f = documento.querySelector('[data-contador-favoritos]');
    if (f) { f.textContent = favoritos.length; f.style.display = favoritos.length ? '' : 'none'; }
  }

  /* ------------------------------------------------------------ rodapé */
  function montarRodape() {
    var alvo = documento.getElementById('rodape');
    if (!alvo) return;

    function coluna(titulo, itens) {
      return '<div><h3>' + titulo + '</h3><ul>' +
        itens.map(function (i) { return '<li><a href="' + i[1] + '">' + i[0] + '</a></li>'; }).join('') +
        '</ul></div>';
    }

    alvo.innerHTML =
      '<div class="rodape">' +
        '<div class="rodape__newsletter"><div class="container">' +
          '<div><h2>Ofertas na sua caixa de entrada</h2>' +
          '<p>Cadastre-se e receba cupons exclusivos do Clube Bem Viver.</p></div>' +
          '<form class="form-news" data-newsletter>' +
            '<label class="so-leitor" for="email-news">Seu e-mail</label>' +
            '<input id="email-news" type="email" name="email" placeholder="Digite seu melhor e-mail" required>' +
            '<button class="btn" type="submit">Quero receber</button>' +
          '</form>' +
        '</div></div>' +

        '<div class="container rodape__colunas">' +
          '<div class="rodape__sobre">' +
            '<img src="assets/img/logo-claro.svg" alt="' + escapar(CFG.nomeLoja) + '" width="300" height="64">' +
            '<p>Rede de farmácias com atendimento farmacêutico presencial e online. ' +
            'Medicamentos, dermocosméticos e cuidado diário com entrega em todo o Brasil.</p>' +
            '<div class="redes">' +
              '<a href="#" aria-label="Nosso perfil em redes sociais">' + icone('camera', 16) + '</a>' +
              '<a href="#" aria-label="Nosso blog">' + icone('globo', 16) + '</a>' +
              '<a href="#" aria-label="Atendimento por mensagem">' + icone('chat', 16) + '</a>' +
            '</div>' +
          '</div>' +
          coluna('Institucional', [['Quem somos', '#'], ['Nossas lojas', '#'], ['Trabalhe conosco', '#'], ['Imprensa', '#']]) +
          coluna('Ajuda', [['Central de atendimento', '#'], ['Prazos e entregas', '#'], ['Trocas e devoluções', '#'], ['Perguntas frequentes', '#']]) +
          coluna('Políticas', [['Política de privacidade', '#'], ['Termos de uso', '#'], ['Política de cookies', '#'], ['Portal do titular (LGPD)', '#']]) +
          '<div><h3>Formas de pagamento</h3><div class="pagamentos">' +
            ['PIX', 'VISA', 'MASTER', 'ELO', 'AMEX', 'HIPER', 'BOLETO'].map(function (m) {
              return '<span class="pagamento">' + m + '</span>';
            }).join('') +
          '</div><h3 style="margin-top:20px">Atendimento</h3>' +
          '<ul><li>' + CFG.telefone + '</li><li>Seg. a sex., 8h às 20h</li></ul></div>' +
        '</div>' +

        '<div class="rodape__legal"><div class="container">' +
          '<p><strong>Farmacêutico(a) responsável:</strong> ' + escapar(CFG.farmaceutico) + '</p>' +
          '<p>' + escapar(CFG.nomeLoja) + ' Comércio de Medicamentos Ltda. — CNPJ ' + CFG.cnpj +
          ' — Rua das Acácias, 1.200, São Paulo/SP</p>' +
          '<p class="miudos">Medicamentos isentos de prescrição: ao persistirem os sintomas, o médico ' +
          'deverá ser consultado. Leia a bula. Suplementos alimentares não substituem uma alimentação ' +
          'equilibrada e seu consumo deve estar associado a hábitos saudáveis. Preços e estoques ' +
          'válidos apenas para o site.</p>' +
          '<p class="miudos"><strong>Site de demonstração.</strong> Loja, marcas, registros, preços e ' +
          'avaliações são fictícios e foram criados apenas para exemplificar a interface. ' +
          'Nenhuma venda é processada.</p>' +
        '</div></div>' +
      '</div>';
  }

  /* ------------------------------------------------------------ eventos globais */
  function ligarEventosGlobais() {
    documento.addEventListener('click', function (e) {
      var add = e.target.closest('[data-add]');
      if (add) { adicionar(add.getAttribute('data-add'), 1); return; }

      var fav = e.target.closest('[data-favorito]');
      if (fav) {
        var ativo = alternarFavorito(fav.getAttribute('data-favorito'));
        fav.setAttribute('aria-pressed', ativo ? 'true' : 'false');
        fav.innerHTML = icone('coracao', 16, ativo);
        return;
      }

      var rem = e.target.closest('[data-remover]');
      if (rem) { remover(rem.getAttribute('data-remover')); return; }

      if (e.target.closest('[data-abrir-carrinho]')) { abrirGaveta(); return; }
      if (e.target.closest('[data-fechar-carrinho]')) { fecharGaveta(); return; }

      var rolar = e.target.closest('[data-rolar]');
      if (rolar) {
        var trilho = documento.getElementById(rolar.getAttribute('data-alvo'));
        if (trilho) trilho.scrollBy({ left: Number(rolar.getAttribute('data-rolar')) * trilho.clientWidth * 0.8, behavior: 'smooth' });
      }
    });

    documento.addEventListener('submit', function (e) {
      if (e.target.matches('[data-newsletter]')) {
        e.preventDefault();
        aviso('Pronto! Você receberá nossas ofertas por e-mail.', 'ok');
        e.target.reset();
      }
    });
  }

  /* ------------------------------------------------------------ início */
  function iniciar(paginaAtiva) {
    montarCabecalho(paginaAtiva);
    montarRodape();
    montarGaveta();
    fecharGaveta();
    ligarEventosGlobais();
  }

  janela.Loja = {
    icone: icone, moeda: moeda, escapar: escapar, semAcento: semAcento, dataBr: dataBr,
    estrelas: estrelas, aviso: aviso, parcelamento: parcelamento, desconto: desconto,
    precoPix: precoPix, guardar: guardar, recuperar: recuperar,
    cartaoProduto: cartaoProduto, prateleira: prateleira,
    adicionar: adicionar, alterarQtd: alterarQtd, remover: remover, esvaziar: esvaziar,
    itensCarrinho: itensCarrinho, totalItens: totalItens, subtotal: subtotal,
    abrirGaveta: abrirGaveta, fecharGaveta: fecharGaveta,
    ehFavorito: ehFavorito, alternarFavorito: alternarFavorito,
    registrarVisto: registrarVisto, vistosRecentemente: vistosRecentemente,
    calcularFrete: calcularFrete, mascaraCep: mascaraCep,
    chaves: { cep: CHAVE_CEP, avaliacoes: CHAVE_AVALIACOES },
    iniciar: iniciar
  };
})(window, document);
