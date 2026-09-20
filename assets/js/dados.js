/* =========================================================================
   Catálogo da loja — dados fictícios, criados para esta demonstração.
   Marcas, registros, preços e avaliações são inventados.
   ========================================================================= */
(function (janela) {
  'use strict';

  var CATEGORIAS = [
    { id: 'cabelos',      nome: 'Cabelos',           icone: 'cabelos' },
    { id: 'dermo',        nome: 'Dermocosméticos',   icone: 'dermo' },
    { id: 'medicamentos', nome: 'Medicamentos',      icone: 'medicamentos' },
    { id: 'vitaminas',    nome: 'Vitaminas',         icone: 'vitaminas' },
    { id: 'higiene',      nome: 'Higiene Pessoal',   icone: 'higiene' },
    { id: 'infantil',     nome: 'Mamãe e Bebê',      icone: 'infantil' },
    { id: 'ofertas',      nome: 'Ofertas',           icone: 'ofertas' }
  ];

  /* --------------------------------------------------------------------- */
  var PRODUTOS = [

    /* ---------------------------------------------- 1. produto principal */
    {
      sku: 'LUM-CPH-250',
      slug: 'lumiara-creme-pentear-hidratacao-profunda-250ml',
      nome: 'Lumiara Professional Creme de Pentear Hidratação Profunda 250ml',
      marca: 'Lumiara Professional',
      linha: 'Hidratação Profunda',
      categoria: 'cabelos',
      subcategoria: 'Tratamento e finalização',
      preco: 89.9,
      precoDe: 119.9,
      precoClube: 76.41,
      imagem: 'lum-creme-pentear.svg',
      galeria: ['lum-creme-pentear.svg', 'lum-shampoo.svg', 'lum-mascara.svg'],
      nota: 4.8,
      qtdAvaliacoes: 213,
      estoque: 18,
      destaque: true,
      tags: ['Mais vendido'],
      resumo: 'Creme de pentear sem enxágue que devolve maciez e controle aos fios ' +
              'ressecados por química, calor ou sol. Textura leve, não pesa e facilita ' +
              'o desembaraço desde a primeira aplicação.',
      beneficios: [
        'Hidratação prolongada por até 72 horas',
        'Reduz o frizz e facilita o desembaraço',
        'Proteção térmica leve até 180 °C',
        'Livre de sal, parabenos e corantes artificiais'
      ],
      variacoes: [
        { id: '250', rotulo: '250 ml', detalhe: 'R$ 0,36 / ml', preco: 89.9, precoDe: 119.9, padrao: true },
        { id: '500', rotulo: '500 ml', detalhe: 'R$ 0,30 / ml', preco: 149.9, precoDe: 189.9 },
        { id: 'kit', rotulo: 'Kit 250 ml + máscara', detalhe: 'economize R$ 40', preco: 159.9, precoDe: 229.8 }
      ],
      descricao:
        '<p>O <strong>Creme de Pentear Hidratação Profunda</strong> da linha Lumiara Professional ' +
        'foi desenvolvido para cabelos que perderam água e maleabilidade — seja por coloração, ' +
        'alisamento, uso frequente de secador ou exposição ao sol e à piscina.</p>' +
        '<p>A fórmula combina um complexo de aminoácidos vegetais com manteiga de murumuru e ' +
        'ácido hialurônico de baixo peso molecular. Enquanto os aminoácidos preenchem as falhas ' +
        'da fibra capilar, a manteiga sela a cutícula e o ácido hialurônico retém água no interior ' +
        'do fio. O resultado é um cabelo mais macio, alinhado e com brilho natural — sem o aspecto ' +
        'engordurado típico de cremes muito oleosos.</p>' +
        '<p>Por ser leve e sem enxágue, pode ser usado diariamente, inclusive em cabelos com ' +
        'baixa porosidade. É compatível com cronograma capilar e pode ser aplicado antes da ' +
        'escova ou do secador como proteção térmica leve.</p>',
      modoUso:
        '<ol>' +
        '<li>Lave os cabelos normalmente e remova o excesso de água com a toalha.</li>' +
        '<li>Com os fios úmidos, distribua uma noz do produto do meio às pontas, evitando a raiz.</li>' +
        '<li>Desembarace com pente de dentes largos, das pontas em direção ao comprimento.</li>' +
        '<li>Finalize ao natural, com difusor ou escova. <strong>Não enxágue.</strong></li>' +
        '</ol>' +
        '<p>Em cabelos muito grossos ou longos, aplique em mechas separadas para garantir ' +
        'distribuição uniforme. Uso diário liberado.</p>',
      ingredientes:
        '<p>Aqua, Cetearyl Alcohol, Behentrimonium Chloride, Glycerin, Astrocaryum Murumuru ' +
        'Seed Butter, Sodium Hyaluronate, Hydrolyzed Wheat Protein, Arginine, Panthenol, ' +
        'Cocos Nucifera Oil, Butyrospermum Parkii Butter, Citric Acid, Phenoxyethanol, ' +
        'Ethylhexylglycerin, Parfum.</p>' +
        '<p class="miudos"><em>Não contém: cloreto de sódio, parabenos, corantes artificiais, ' +
        'formol ou derivados. Produto não testado em animais.</em></p>',
      especificacoes: [
        ['Marca', 'Lumiara Professional'],
        ['Linha', 'Hidratação Profunda'],
        ['Tipo de produto', 'Creme de pentear sem enxágue (leave-in)'],
        ['Conteúdo', '250 ml'],
        ['Indicação', 'Cabelos secos, danificados ou quimicamente tratados'],
        ['Tipo de cabelo', 'Todos os tipos, inclusive cacheados e crespos'],
        ['Textura', 'Creme leve'],
        ['Fragrância', 'Floral amadeirado'],
        ['Registro ANVISA', 'Cosmético grau 1 — notificação nº 25351.000000/0000 (fictício)'],
        ['Código de barras (EAN)', '7890000000015'],
        ['Código interno (SKU)', 'LUM-CPH-250'],
        ['Fabricante', 'Lumiara Cosméticos Ltda. (marca fictícia)'],
        ['País de origem', 'Brasil'],
        ['Validade', '36 meses a partir da data de fabricação'],
        ['Conservação', 'Manter em local seco, ao abrigo da luz e do calor']
      ],
      avisoLegal: null,
      avaliacoes: [
        { autor: 'Camila R.',  nota: 5, data: '2026-08-28', titulo: 'Meu cabelo voltou a ter brilho',
          texto: 'Uso há dois meses depois de uma progressiva que ressecou tudo. O desembaraço ' +
                 'mudou completamente e não pesa, mesmo eu tendo cabelo fino.', verificada: true },
        { autor: 'Juliana M.', nota: 5, data: '2026-08-14', titulo: 'Rende muito',
          texto: 'Um pote dura bastante porque precisa de pouquíssimo produto. Cheiro discreto, ' +
                 'não enjoa.', verificada: true },
        { autor: 'Patrícia L.', nota: 4, data: '2026-07-30', titulo: 'Bom, mas o preço subiu',
          texto: 'Produto excelente para cabelo cacheado, define sem deixar duro. Tirei uma ' +
                 'estrela só porque achei caro fora de promoção.', verificada: true },
        { autor: 'Renata S.',  nota: 5, data: '2026-07-11', titulo: 'Recomendo para cabelo cacheado',
          texto: 'Faço fitagem com ele e os cachos ficam definidos o dia todo, sem frizz. ' +
                 'Chegou bem embalado e dentro do prazo.', verificada: false },
        { autor: 'Ana Beatriz', nota: 4, data: '2026-06-22', titulo: 'Cumpre o que promete',
          texto: 'Hidrata bem e o cabelo fica sedoso. Senti falta de uma embalagem com ' +
                 'válvula pump, mas o produto em si é ótimo.', verificada: true }
      ],
      relacionados: ['LUM-SHP-300', 'LUM-MSC-200', 'DER-SER-30', 'DER-HID-400', 'VIT-DEE-60']
    },

    /* ---------------------------------------------- cabelos */
    {
      sku: 'LUM-SHP-300',
      slug: 'lumiara-shampoo-reconstrucao-diaria-300ml',
      nome: 'Lumiara Professional Shampoo Reconstrução Diária 300ml',
      marca: 'Lumiara Professional', linha: 'Reconstrução', categoria: 'cabelos',
      subcategoria: 'Shampoo', preco: 64.9, precoDe: 79.9, precoClube: 55.17,
      imagem: 'lum-shampoo.svg', galeria: ['lum-shampoo.svg', 'lum-creme-pentear.svg'],
      nota: 4.6, qtdAvaliacoes: 148, estoque: 32, destaque: true, tags: [],
      resumo: 'Shampoo de limpeza suave, sem sulfatos agressivos, que repõe massa capilar ' +
              'em fios enfraquecidos por química.',
      beneficios: ['Sem sulfatos agressivos', 'Repõe queratina e aminoácidos', 'pH balanceado 5,5'],
      descricao: '<p>Limpa sem retirar a oleosidade natural do couro cabeludo e prepara o fio ' +
                 'para receber o tratamento seguinte. Indicado para uso diário em cabelos ' +
                 'com química ou quebra frequente.</p>',
      modoUso: '<p>Aplique nos cabelos molhados, massageie o couro cabeludo e enxágue. ' +
               'Repita se necessário.</p>',
      ingredientes: '<p>Aqua, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, ' +
                    'Hydrolyzed Keratin, Panthenol, Citric Acid, Phenoxyethanol, Parfum.</p>',
      especificacoes: [
        ['Marca', 'Lumiara Professional'], ['Tipo de produto', 'Shampoo'],
        ['Conteúdo', '300 ml'], ['Indicação', 'Cabelos enfraquecidos e quimicamente tratados'],
        ['Código de barras (EAN)', '7890000000022'], ['País de origem', 'Brasil']
      ],
      relacionados: ['LUM-CPH-250', 'LUM-MSC-200', 'DER-HID-400']
    },
    {
      sku: 'LUM-MSC-200',
      slug: 'lumiara-mascara-nutricao-extrema-200g',
      nome: 'Lumiara Professional Máscara Nutrição Extrema 200g',
      marca: 'Lumiara Professional', linha: 'Nutrição', categoria: 'cabelos',
      subcategoria: 'Máscara de tratamento', preco: 109.9, precoDe: 139.9, precoClube: 93.41,
      imagem: 'lum-mascara.svg', galeria: ['lum-mascara.svg', 'lum-creme-pentear.svg'],
      nota: 4.9, qtdAvaliacoes: 96, estoque: 7, destaque: true, tags: ['Últimas unidades'],
      resumo: 'Máscara de nutrição intensiva com óleos vegetais para cabelos porosos e opacos.',
      beneficios: ['Ação em 5 minutos', 'Óleos de murumuru e pracaxi', 'Brilho imediato'],
      descricao: '<p>Tratamento semanal de nutrição profunda. A combinação de óleos amazônicos ' +
                 'repõe lipídios perdidos e devolve maleabilidade aos fios.</p>',
      modoUso: '<p>Após o shampoo, aplique do meio às pontas, deixe agir de 5 a 10 minutos ' +
               'e enxágue bem. Use uma a duas vezes por semana.</p>',
      ingredientes: '<p>Aqua, Cetearyl Alcohol, Behentrimonium Methosulfate, Astrocaryum ' +
                    'Murumuru Seed Butter, Pentaclethra Macroloba Seed Oil, Panthenol, Parfum.</p>',
      especificacoes: [
        ['Marca', 'Lumiara Professional'], ['Tipo de produto', 'Máscara capilar'],
        ['Conteúdo', '200 g'], ['Código de barras (EAN)', '7890000000039'], ['País de origem', 'Brasil']
      ],
      relacionados: ['LUM-CPH-250', 'LUM-SHP-300']
    },

    /* ---------------------------------------------- dermocosméticos */
    {
      sku: 'DER-PRT-50',
      slug: 'solaris-protetor-solar-facial-fps70-50g',
      nome: 'Solaris Protetor Solar Facial FPS 70 Toque Seco 50g',
      marca: 'Solaris', linha: 'Facial', categoria: 'dermo', subcategoria: 'Proteção solar',
      preco: 74.9, precoDe: 96.9, precoClube: 63.67,
      imagem: 'solaris-fps70.svg', galeria: ['solaris-fps70.svg'],
      nota: 4.7, qtdAvaliacoes: 402, estoque: 45, destaque: true, tags: ['Mais vendido'],
      resumo: 'Protetor solar facial com toque seco, alta proteção UVA/UVB e controle de oleosidade ' +
              'por até 8 horas.',
      beneficios: ['FPS 70 / PPD 23', 'Toque seco, não deixa resíduo branco', 'Testado dermatologicamente'],
      descricao: '<p>Fotoproteção diária de amplo espectro para peles oleosas e mistas. ' +
                 'A textura fluida seca rapidamente e pode ser usada sob a maquiagem.</p>',
      modoUso: '<p>Aplique generosamente no rosto e pescoço 15 minutos antes da exposição solar. ' +
               'Reaplique a cada 2 horas ou após nadar, transpirar ou secar-se com toalha.</p>',
      ingredientes: '<p>Aqua, Homosalate, Ethylhexyl Salicylate, Butyl Methoxydibenzoylmethane, ' +
                    'Silica, Niacinamide, Tocopheryl Acetate, Phenoxyethanol.</p>',
      especificacoes: [
        ['Marca', 'Solaris'], ['Tipo de produto', 'Protetor solar facial'], ['FPS', '70'],
        ['Conteúdo', '50 g'], ['Tipo de pele', 'Oleosa e mista'],
        ['Registro ANVISA', 'Cosmético grau 2 — nº 25351.000000/0001 (fictício)'],
        ['Código de barras (EAN)', '7890000000046'], ['País de origem', 'Brasil']
      ],
      avisoLegal: 'A proteção solar é apenas uma das medidas de fotoproteção. Evite a exposição ' +
                  'ao sol entre 10h e 16h e use também chapéu, óculos escuros e roupas adequadas.',
      relacionados: ['DER-SER-30', 'DER-HID-400', 'LUM-CPH-250']
    },
    {
      sku: 'DER-SER-30',
      slug: 'nuvela-serum-facial-vitamina-c-10-30ml',
      nome: 'Nuvela Sérum Facial Vitamina C 10% Antioxidante 30ml',
      marca: 'Nuvela', linha: 'Glow', categoria: 'dermo', subcategoria: 'Tratamento facial',
      preco: 129.9, precoDe: 169.9, precoClube: 110.41,
      imagem: 'nuvela-serum.svg', galeria: ['nuvela-serum.svg'],
      nota: 4.5, qtdAvaliacoes: 187, estoque: 21, destaque: true, tags: [],
      resumo: 'Sérum antioxidante com vitamina C estabilizada a 10% para uniformizar o tom ' +
              'e iluminar a pele.',
      beneficios: ['Vitamina C estabilizada 10%', 'Uniformiza o tom da pele', 'Textura de rápida absorção'],
      descricao: '<p>Concentrado antioxidante de uso matinal. Ajuda a reduzir manchas leves, ' +
                 'neutraliza radicais livres e potencializa o efeito do protetor solar.</p>',
      modoUso: '<p>Pela manhã, na pele limpa e seca, aplique 3 a 4 gotas no rosto. ' +
               'Aguarde a absorção e finalize com hidratante e protetor solar.</p>',
      ingredientes: '<p>Aqua, Ethyl Ascorbic Acid, Propanediol, Glycerin, Ferulic Acid, ' +
                    'Tocopherol, Sodium Hyaluronate, Phenoxyethanol.</p>',
      especificacoes: [
        ['Marca', 'Nuvela'], ['Tipo de produto', 'Sérum facial'], ['Conteúdo', '30 ml'],
        ['Ativo principal', 'Ácido 3-O-etil ascórbico 10%'], ['Período de uso', 'Manhã'],
        ['Código de barras (EAN)', '7890000000053'], ['País de origem', 'Brasil']
      ],
      relacionados: ['DER-PRT-50', 'DER-HID-400', 'VIT-DEE-60']
    },
    {
      sku: 'DER-HID-400',
      slug: 'nuvela-hidratante-corporal-ureia-10-400ml',
      nome: 'Nuvela Hidratante Corporal Ureia 10% 400ml',
      marca: 'Nuvela', linha: 'Repair', categoria: 'dermo', subcategoria: 'Hidratante corporal',
      preco: 49.9, precoDe: 62.9, precoClube: 42.41,
      imagem: 'nuvela-ureia.svg', galeria: ['nuvela-ureia.svg'],
      nota: 4.8, qtdAvaliacoes: 311, estoque: 60, destaque: false, tags: [],
      resumo: 'Hidratante para pele extrasseca com ureia 10%, indicado para pernas, ' +
              'cotovelos, joelhos e pés.',
      beneficios: ['Ureia 10% + ceramidas', 'Alívio da aspereza em 7 dias', 'Sem perfume'],
      descricao: '<p>Loção de alta emoliência para peles muito secas e com descamação. ' +
                 'A ureia atua como umectante e queratolítico suave.</p>',
      modoUso: '<p>Aplique uma a duas vezes ao dia sobre a pele limpa, massageando até ' +
               'a completa absorção. Evite mucosas e pele lesionada.</p>',
      ingredientes: '<p>Aqua, Urea, Glycerin, Cetearyl Alcohol, Ceramide NP, Lactic Acid, ' +
                    'Panthenol, Phenoxyethanol.</p>',
      especificacoes: [
        ['Marca', 'Nuvela'], ['Tipo de produto', 'Hidratante corporal'], ['Conteúdo', '400 ml'],
        ['Tipo de pele', 'Extrasseca'], ['Fragrância', 'Sem perfume'],
        ['Código de barras (EAN)', '7890000000060'], ['País de origem', 'Brasil']
      ],
      relacionados: ['DER-SER-30', 'DER-PRT-50', 'HIG-CRE-90']
    },

    /* ---------------------------------------------- medicamentos */
    {
      sku: 'MED-DIP-500',
      slug: 'dipirona-monoidratada-500mg-20-comprimidos',
      nome: 'Dipirona Monoidratada 500mg 20 Comprimidos — Genérico',
      marca: 'Genérico São Carlos', linha: 'Genéricos', categoria: 'medicamentos',
      subcategoria: 'Analgésicos e antitérmicos',
      preco: 12.49, precoDe: 18.9, precoClube: 10.62,
      imagem: 'med-dipirona.svg', galeria: ['med-dipirona.svg'],
      nota: 4.4, qtdAvaliacoes: 528, estoque: 120, destaque: true, tags: ['Genérico'],
      generico: true,
      resumo: 'Analgésico e antitérmico indicado para dor e febre. Medicamento genérico, ' +
              'isento de prescrição.',
      beneficios: ['Início de ação rápido', 'Genérico com preço acessível', 'Cartela com 20 comprimidos'],
      descricao: '<p>Medicamento genérico à base de dipirona monoidratada 500 mg, indicado ' +
                 'como analgésico e antitérmico em adultos e crianças acima de 12 anos.</p>',
      modoUso: '<p>Adultos e adolescentes acima de 12 anos: 1 a 2 comprimidos por dose, ' +
               'até 4 vezes ao dia. Não exceda a dose recomendada. ' +
               'Siga sempre a orientação do médico ou farmacêutico.</p>',
      ingredientes: '<p><strong>Princípio ativo:</strong> dipirona monoidratada 500 mg.<br>' +
                    '<strong>Excipientes:</strong> amido, estearato de magnésio, ' +
                    'croscarmelose sódica, celulose microcristalina.</p>',
      especificacoes: [
        ['Princípio ativo', 'Dipirona monoidratada'], ['Concentração', '500 mg'],
        ['Forma farmacêutica', 'Comprimido'], ['Quantidade', '20 comprimidos'],
        ['Classe terapêutica', 'Analgésico / antitérmico'],
        ['Tipo de medicamento', 'Genérico — isento de prescrição (MIP)'],
        ['Registro MS', '1.0000.0000 (fictício)'], ['Código de barras (EAN)', '7890000000077'],
        ['País de origem', 'Brasil']
      ],
      avisoLegal: 'MEDICAMENTO ISENTO DE PRESCRIÇÃO. AO PERSISTIREM OS SINTOMAS, O MÉDICO ' +
                  'DEVERÁ SER CONSULTADO. Não use este medicamento em caso de alergia à dipirona. ' +
                  'Leia a bula antes de usar.',
      relacionados: ['MED-IBU-400', 'VIT-DEE-60', 'HIG-CRE-90']
    },
    {
      sku: 'MED-IBU-400',
      slug: 'ibuprofeno-400mg-20-comprimidos',
      nome: 'Ibuprofeno 400mg 20 Comprimidos Revestidos — Genérico',
      marca: 'Genérico São Carlos', linha: 'Genéricos', categoria: 'medicamentos',
      subcategoria: 'Anti-inflamatórios',
      preco: 18.9, precoDe: 26.5, precoClube: 16.07,
      imagem: 'med-ibuprofeno.svg', galeria: ['med-ibuprofeno.svg'],
      nota: 4.5, qtdAvaliacoes: 289, estoque: 84, destaque: false, tags: ['Genérico'],
      generico: true,
      resumo: 'Anti-inflamatório não esteroidal indicado para dores leves a moderadas e febre.',
      beneficios: ['Ação anti-inflamatória e analgésica', 'Comprimidos revestidos', 'Genérico'],
      descricao: '<p>Medicamento genérico à base de ibuprofeno 400 mg, indicado para o alívio ' +
                 'de dores leves a moderadas, processos inflamatórios e febre.</p>',
      modoUso: '<p>Adultos: 1 comprimido a cada 6 a 8 horas, preferencialmente após as refeições. ' +
               'Não exceda 3 comprimidos ao dia sem orientação médica.</p>',
      ingredientes: '<p><strong>Princípio ativo:</strong> ibuprofeno 400 mg.<br>' +
                    '<strong>Excipientes:</strong> celulose microcristalina, dióxido de silício, ' +
                    'estearato de magnésio, hipromelose.</p>',
      especificacoes: [
        ['Princípio ativo', 'Ibuprofeno'], ['Concentração', '400 mg'],
        ['Forma farmacêutica', 'Comprimido revestido'], ['Quantidade', '20 comprimidos'],
        ['Classe terapêutica', 'Anti-inflamatório não esteroidal'],
        ['Tipo de medicamento', 'Genérico — isento de prescrição (MIP)'],
        ['Registro MS', '1.0000.0001 (fictício)'], ['Código de barras (EAN)', '7890000000084'],
        ['País de origem', 'Brasil']
      ],
      avisoLegal: 'MEDICAMENTO ISENTO DE PRESCRIÇÃO. AO PERSISTIREM OS SINTOMAS, O MÉDICO ' +
                  'DEVERÁ SER CONSULTADO. Não recomendado para gestantes no terceiro trimestre. ' +
                  'Leia a bula antes de usar.',
      relacionados: ['MED-DIP-500', 'VIT-MAG-90']
    },

    /* ---------------------------------------------- vitaminas */
    {
      sku: 'VIT-DEE-60',
      slug: 'vitamina-d3-2000ui-60-capsulas',
      nome: 'Vitamina D3 2000UI 60 Cápsulas',
      marca: 'Vitalis', linha: 'Essenciais', categoria: 'vitaminas', subcategoria: 'Vitaminas',
      preco: 39.9, precoDe: 54.9, precoClube: 33.92,
      imagem: 'vit-d3.svg', galeria: ['vit-d3.svg'],
      nota: 4.7, qtdAvaliacoes: 364, estoque: 52, destaque: true, tags: [],
      resumo: 'Suplemento de vitamina D3 em cápsulas de rápida absorção. Dois meses de tratamento.',
      beneficios: ['Contribui para a saúde óssea', 'Auxilia o sistema imunológico', '60 cápsulas — 2 meses'],
      descricao: '<p>A vitamina D3 (colecalciferol) auxilia na absorção de cálcio e no ' +
                 'funcionamento normal do sistema imunológico.</p>',
      modoUso: '<p>Ingerir 1 cápsula ao dia, preferencialmente junto a uma refeição que ' +
               'contenha gordura, ou conforme orientação de nutricionista ou médico.</p>',
      ingredientes: '<p>Colecalciferol (vitamina D3) 50 mcg (2000 UI), óleo de girassol, ' +
                    'cápsula de gelatina, umectante glicerina.</p>',
      especificacoes: [
        ['Marca', 'Vitalis'], ['Tipo de produto', 'Suplemento alimentar'],
        ['Concentração', '2000 UI (50 mcg) por cápsula'], ['Quantidade', '60 cápsulas'],
        ['Porção diária', '1 cápsula'], ['Sabor', 'Sem sabor'],
        ['Código de barras (EAN)', '7890000000091'], ['País de origem', 'Brasil']
      ],
      avisoLegal: 'Este produto não é um medicamento. Não exceder a recomendação diária de consumo ' +
                  'indicada na embalagem. Mantenha fora do alcance de crianças. ' +
                  'Gestantes, nutrizes e crianças devem consultar o médico antes de consumir.',
      relacionados: ['VIT-MAG-90', 'VIT-OME-120', 'DER-SER-30']
    },
    {
      sku: 'VIT-MAG-90',
      slug: 'magnesio-dimalato-500mg-90-capsulas',
      nome: 'Magnésio Dimalato 500mg 90 Cápsulas',
      marca: 'Vitalis', linha: 'Essenciais', categoria: 'vitaminas', subcategoria: 'Minerais',
      preco: 59.9, precoDe: 74.9, precoClube: 50.92,
      imagem: 'vit-magnesio.svg', galeria: ['vit-magnesio.svg'],
      nota: 4.6, qtdAvaliacoes: 142, estoque: 38, destaque: false, tags: [],
      resumo: 'Magnésio dimalato em cápsulas, forma de boa tolerância gástrica.',
      beneficios: ['Auxilia na função muscular', 'Contribui para o metabolismo energético', '90 cápsulas'],
      descricao: '<p>O magnésio participa de centenas de reações enzimáticas e auxilia no ' +
                 'funcionamento normal dos músculos e do sistema nervoso.</p>',
      modoUso: '<p>Ingerir 2 cápsulas ao dia, ou conforme orientação profissional.</p>',
      ingredientes: '<p>Magnésio dimalato 500 mg, cápsula de celulose vegetal, ' +
                    'antiumectante dióxido de silício.</p>',
      especificacoes: [
        ['Marca', 'Vitalis'], ['Tipo de produto', 'Suplemento alimentar'],
        ['Concentração', '500 mg por cápsula'], ['Quantidade', '90 cápsulas'],
        ['Cápsula', 'Vegetal — adequado para vegetarianos'],
        ['Código de barras (EAN)', '7890000000107'], ['País de origem', 'Brasil']
      ],
      avisoLegal: 'Este produto não é um medicamento. Não exceder a recomendação diária de consumo.',
      relacionados: ['VIT-DEE-60', 'VIT-OME-120']
    },
    {
      sku: 'VIT-OME-120',
      slug: 'omega-3-1000mg-120-capsulas',
      nome: 'Ômega 3 1000mg 120 Cápsulas EPA/DHA',
      marca: 'Vitalis', linha: 'Premium', categoria: 'vitaminas', subcategoria: 'Ácidos graxos',
      preco: 89.9, precoDe: 119.9, precoClube: 76.41,
      imagem: 'vit-omega3.svg', galeria: ['vit-omega3.svg'],
      nota: 4.8, qtdAvaliacoes: 219, estoque: 26, destaque: true, tags: [],
      resumo: 'Óleo de peixe purificado com alta concentração de EPA e DHA, sem refluxo.',
      beneficios: ['540 mg de EPA + 360 mg de DHA', 'Óleo purificado e livre de metais pesados', '120 cápsulas'],
      descricao: '<p>Suplemento de ácidos graxos essenciais da série ômega 3, obtido de ' +
                 'peixes de águas frias e submetido a processo de purificação molecular.</p>',
      modoUso: '<p>Ingerir 2 cápsulas ao dia junto às refeições.</p>',
      ingredientes: '<p>Óleo de peixe concentrado, cápsula de gelatina, umectante glicerina, ' +
                    'antioxidante tocoferol.</p>',
      especificacoes: [
        ['Marca', 'Vitalis'], ['Tipo de produto', 'Suplemento alimentar'],
        ['Concentração', '1000 mg por cápsula'], ['Quantidade', '120 cápsulas'],
        ['EPA / DHA', '540 mg / 360 mg na porção diária'],
        ['Código de barras (EAN)', '7890000000114'], ['País de origem', 'Brasil']
      ],
      avisoLegal: 'Este produto não é um medicamento. Não exceder a recomendação diária de consumo. ' +
                  'Contém peixe — pode causar reação em pessoas alérgicas.',
      relacionados: ['VIT-DEE-60', 'VIT-MAG-90']
    },

    /* ---------------------------------------------- higiene */
    {
      sku: 'HIG-CRE-90',
      slug: 'creme-dental-clareador-menta-90g',
      nome: 'Creme Dental Clareador Menta Intensa 90g',
      marca: 'Orallis', linha: 'White', categoria: 'higiene', subcategoria: 'Higiene bucal',
      preco: 15.9, precoDe: 21.9, precoClube: 13.52,
      imagem: 'hig-creme-dental.svg', galeria: ['hig-creme-dental.svg'],
      nota: 4.3, qtdAvaliacoes: 176, estoque: 95, destaque: false, tags: [],
      resumo: 'Creme dental com ação clareadora suave e proteção anticárie com flúor.',
      beneficios: ['1450 ppm de flúor', 'Remove manchas superficiais', 'Hálito fresco prolongado'],
      descricao: '<p>Creme dental de uso diário que combina agentes de polimento suave com ' +
                 'flúor para proteção contra cáries.</p>',
      modoUso: '<p>Escove os dentes por no mínimo dois minutos, três vezes ao dia. ' +
               'Crianças menores de 6 anos devem usar quantidade equivalente a um grão de ervilha, ' +
               'sob supervisão de um adulto.</p>',
      ingredientes: '<p>Aqua, Sorbitol, Hydrated Silica, Sodium Fluoride (1450 ppm F), ' +
                    'Sodium Lauryl Sulfate, Aroma, Sodium Saccharin.</p>',
      especificacoes: [
        ['Marca', 'Orallis'], ['Tipo de produto', 'Creme dental'], ['Conteúdo', '90 g'],
        ['Flúor', '1450 ppm'], ['Sabor', 'Menta intensa'],
        ['Código de barras (EAN)', '7890000000121'], ['País de origem', 'Brasil']
      ],
      relacionados: ['HIG-ESC-01', 'DER-HID-400']
    },
    {
      sku: 'HIG-ESC-01',
      slug: 'escova-dental-macia-cabo-ergonomico',
      nome: 'Escova Dental Macia Cabo Ergonômico — Unidade',
      marca: 'Orallis', linha: 'Care', categoria: 'higiene', subcategoria: 'Higiene bucal',
      preco: 12.9, precoDe: 16.9, precoClube: 10.97,
      imagem: 'hig-escova.svg', galeria: ['hig-escova.svg'],
      nota: 4.2, qtdAvaliacoes: 88, estoque: 140, destaque: false, tags: [],
      resumo: 'Escova de cerdas macias com pontas arredondadas e limpador de língua.',
      beneficios: ['Cerdas macias com pontas arredondadas', 'Cabo antiderrapante', 'Limpador de língua'],
      descricao: '<p>Escova de uso diário indicada para gengivas sensíveis. As cerdas macias ' +
                 'limpam sem agredir o esmalte e a margem gengival.</p>',
      modoUso: '<p>Escove três vezes ao dia. Substitua a escova a cada três meses ou quando ' +
               'as cerdas estiverem deformadas.</p>',
      ingredientes: '<p>Cerdas de náilon, cabo de polipropileno e elastômero termoplástico.</p>',
      especificacoes: [
        ['Marca', 'Orallis'], ['Tipo de produto', 'Escova dental'], ['Dureza', 'Macia'],
        ['Quantidade', '1 unidade'], ['Código de barras (EAN)', '7890000000138'], ['País de origem', 'Brasil']
      ],
      relacionados: ['HIG-CRE-90']
    },

    /* ---------------------------------------------- infantil */
    {
      sku: 'INF-FRA-M40',
      slug: 'fralda-infantil-soft-care-m-40-unidades',
      nome: 'Fralda Infantil Soft Care Tamanho M 40 Unidades',
      marca: 'Soft Care', linha: 'Baby', categoria: 'infantil', subcategoria: 'Fraldas',
      preco: 54.9, precoDe: 69.9, precoClube: 46.67,
      imagem: 'inf-fralda.svg', galeria: ['inf-fralda.svg'],
      nota: 4.6, qtdAvaliacoes: 254, estoque: 0, destaque: false, tags: [],
      resumo: 'Fralda descartável com barreiras antivazamento e cobertura macia, tamanho M (6 a 10 kg).',
      beneficios: ['Até 12 horas de absorção', 'Barreiras antivazamento', 'Indicador de umidade'],
      descricao: '<p>Fralda com núcleo absorvente de alta capacidade e cobertura respirável, ' +
                 'indicada para bebês de 6 a 10 kg.</p>',
      modoUso: '<p>Troque a fralda sempre que necessário, mantendo a pele do bebê limpa e seca.</p>',
      ingredientes: '<p>Polipropileno, polietileno, celulose, polímero superabsorvente, ' +
                    'adesivos termoplásticos e elásticos.</p>',
      especificacoes: [
        ['Marca', 'Soft Care'], ['Tipo de produto', 'Fralda descartável infantil'],
        ['Tamanho', 'M — 6 a 10 kg'], ['Quantidade', '40 unidades'],
        ['Código de barras (EAN)', '7890000000145'], ['País de origem', 'Brasil']
      ],
      relacionados: ['DER-HID-400', 'HIG-CRE-90']
    }
  ];

  /* --------------------------------------------------------------------- */
  var BANNERS = [
    {
      imagem: 'banner-1.svg', etiqueta: 'Desde 1973',
      titulo: 'Agora a sua drogaria de sempre também é online',
      texto: '17 lojas em Ribeirão Preto, Matão, Pirassununga e Jardinópolis — e o mesmo ' +
             'atendimento, agora a qualquer hora.',
      cta: 'Ver as lojas', href: 'institucional.html?p=lojas'
    },
    {
      imagem: 'banner-2.svg', etiqueta: 'Ofertas',
      titulo: 'Genéricos e dermocosméticos com até 30% OFF',
      texto: 'Mais de 3.000 medicamentos de marca e genéricos, com preço de clube à vista ' +
             'em todas as páginas.',
      cta: 'Ver ofertas', href: 'categoria.html?cat=ofertas'
    },
    {
      imagem: 'banner-3.svg', etiqueta: 'Disk Entrega',
      titulo: 'Peça pelo site ou pelo WhatsApp e receba em casa',
      texto: 'Entrega em até 2 horas nas cidades da rede, ou retirada gratuita em qualquer ' +
             'uma das 17 lojas.',
      cta: 'Comprar agora', href: 'categoria.html'
    }
  ];

  /* frete fictício por região — usado pelo simulador de CEP */
  var REGIOES = [
    { faixa: [1000000, 19999999], uf: 'SP', nome: 'São Paulo',       base: 16.9, prazo: 2, expresso: true },
    { faixa: [20000000, 28999999], uf: 'RJ', nome: 'Rio de Janeiro', base: 19.9, prazo: 3, expresso: true },
    { faixa: [29000000, 29999999], uf: 'ES', nome: 'Espírito Santo', base: 22.9, prazo: 4, expresso: false },
    { faixa: [30000000, 39999999], uf: 'MG', nome: 'Minas Gerais',   base: 21.9, prazo: 3, expresso: true },
    { faixa: [40000000, 48999999], uf: 'BA', nome: 'Bahia',          base: 27.9, prazo: 6, expresso: false },
    { faixa: [49000000, 56999999], uf: 'NE', nome: 'Nordeste',       base: 29.9, prazo: 7, expresso: false },
    { faixa: [57000000, 63999999], uf: 'NE', nome: 'Nordeste',       base: 29.9, prazo: 7, expresso: false },
    { faixa: [64000000, 69999999], uf: 'NO', nome: 'Norte',          base: 34.9, prazo: 9, expresso: false },
    { faixa: [70000000, 76999999], uf: 'DF', nome: 'Distrito Federal e Goiás', base: 23.9, prazo: 4, expresso: true },
    { faixa: [77000000, 79999999], uf: 'CO', nome: 'Centro-Oeste',   base: 26.9, prazo: 6, expresso: false },
    { faixa: [80000000, 87999999], uf: 'PR', nome: 'Paraná',         base: 19.9, prazo: 4, expresso: true },
    { faixa: [88000000, 89999999], uf: 'SC', nome: 'Santa Catarina', base: 21.9, prazo: 4, expresso: false },
    { faixa: [90000000, 99999999], uf: 'RS', nome: 'Rio Grande do Sul', base: 23.9, prazo: 5, expresso: false }
  ];

  /* -----------------------------------------------------------------------
     Dados da rede.

     Os campos marcados como A CONFIRMAR são espaços reservados: não temos a
     informação oficial e ela não pode ser inventada num material que leva o
     nome da rede. Substituir antes de qualquer publicação.
     ----------------------------------------------------------------------- */
  var CONFIG = {
    nomeLoja: 'Drogaria São Carlos',
    fundacao: 1973,
    fundador: 'Ildefonso Henrique Knup',
    totalLojas: 17,
    cidades: ['Ribeirão Preto', 'Matão', 'Pirassununga', 'Jardinópolis'],

    freteGratisAcima: 99,
    descontoPix: 0.05,
    parcelasMax: 6,
    parcelaMinima: 20,
    descontoClube: 0.15,

    cupons: {
      SAOCARLOS10: { tipo: 'percentual', valor: 0.10, descricao: '10% de desconto' },
      PRIMEIRA20: { tipo: 'percentual', valor: 0.20, descricao: '20% na primeira compra', minimo: 120 },
      FRETEGRATIS: { tipo: 'frete', valor: 1, descricao: 'frete grátis' }
    },

    /* Disk Entrega divulgado pela rede, exclusivo de Ribeirão Preto */
    whatsapp: '(16) 4042-0778',
    whatsappLink: 'https://wa.me/551640420778',

    /* Preencher para o catálogo passar a vir do banco em vez deste arquivo.
       A chave publicável (anon) é pública por natureza: o que protege os
       dados é o RLS do schema, não o segredo da chave. */
    supabase: { url: '', chave: '', schema: 'farmacia' },

    razaoSocial: 'Razão social A CONFIRMAR',
    enderecoSede: 'endereço da sede A CONFIRMAR',
    farmaceutico: 'Farmacêutico(a) responsável A CONFIRMAR — CRF-SP a confirmar',
    cnpj: 'A CONFIRMAR',
    telefone: '(16) 4042-0778'
  };

  /* As 17 unidades da rede, com endereço, horário e telefone conforme o site
     oficial. A loja Jardim Oliveira não publica telefone lá; o campo fica
     vazio de propósito em vez de receber um número inventado. */
  var LOJAS = [
    { nome: 'Bonfim Paulista', numero: 'Loja 08', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Via Doutor Luiz Carlos Bianchi, 2995', horario: 'Diariamente das 7h às 23h', telefone: '(16) 4042-0778' },
    { nome: 'Garibaldi', numero: 'Loja 04', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Rua Garibaldi, 941', horario: 'Diariamente das 7h às 23h', telefone: '(16) 4042-0778' },
    { nome: 'Jardim Cristo Redentor', numero: 'Nova 02', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Av. Maximilliam Maggioni, 320', horario: 'Diariamente das 7h às 23h', telefone: '(16) 4042-0778' },
    { nome: 'Jardim Paulista', numero: 'Loja 09', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Rua Henrique Dumont, 736', horario: 'Diariamente das 7h às 23h', telefone: '(16) 4042-0778' },
    { nome: 'Jardim Roberto Benedetti', numero: 'Loja 10', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Rua Thereza Moreira Pastori, 56', horario: 'Diariamente das 7h às 23h', telefone: '(16) 4042-0778' },
    { nome: 'Jardim das Palmeiras', numero: 'Loja 15', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Av. Henry Nestlé, 1400', horario: 'Diariamente das 7h às 23h', telefone: '(16) 4042-0778' },
    { nome: 'Lagoinha', numero: '', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Rua Niterói, 886', horario: 'Diariamente das 7h às 23h', telefone: '(16) 4042-0778' },
    { nome: 'Parque Ribeirão Preto', numero: 'Loja 02', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Av. Luzitana, 824', horario: 'Diariamente das 7h às 23h', telefone: '(16) 4042-0778' },
    { nome: 'Parque São Sebastião', numero: '', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Rua Heron Domingues, 654', horario: 'Diariamente das 7h às 23h', telefone: '(16) 4042-0778' },
    { nome: 'Planalto Verde', numero: 'Loja 16', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Rua Sérgio Achê, 911', horario: 'Aberta 24 horas', telefone: '(16) 4042-0778', plantao: true },
    { nome: 'Ribeirão Verde', numero: '', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Rua Emygidio Rosseto, 2537', horario: 'Diariamente das 7h às 23h', telefone: '(16) 4042-0778' },
    { nome: 'Saudade', numero: 'Loja 07', cidade: 'Ribeirão Preto', uf: 'SP', endereco: 'Av. Saudade, 969', horario: 'Diariamente das 7h às 23h', telefone: '(16) 4042-0778' },
    { nome: 'Rui Barbosa', numero: '', cidade: 'Matão', uf: 'SP', endereco: 'Rua Rui Barbosa, 980', horario: 'Diariamente das 7h às 23h', telefone: '(16) 3384-6607' },
    { nome: 'XV de Novembro', numero: '', cidade: 'Matão', uf: 'SP', endereco: 'Av. XV de Novembro, 986', horario: 'Diariamente das 7h às 23h', telefone: '(16) 3384-9300' },
    { nome: '24 Horas', numero: '', cidade: 'Pirassununga', uf: 'SP', endereco: 'Rua Duque de Caxias, 1446', horario: '24 horas', telefone: '(19) 3561-3010', plantao: true },
    { nome: 'Centro', numero: '', cidade: 'Pirassununga', uf: 'SP', endereco: 'Rua Duque de Caxias, 1306', horario: 'Diariamente das 7h às 23h', telefone: '(19) 3561-9266' },
    { nome: 'Jardim Oliveira', numero: 'Loja 13', cidade: 'Jardinópolis', uf: 'SP', endereco: 'Av. Belarmino Pereira de Oliveira, 483', horario: 'Diariamente das 7h às 23h', telefone: '' }
  ];

  /* Os nove serviços que a rede presta nas lojas. Descrições escritas para
     este protótipo a partir do que cada serviço é. */
  var SERVICOS = [
    {
      id: 'farmacia-popular', icone: 'escudo', titulo: 'Farmácia Popular',
      resumo: 'Medicamentos gratuitos ou com desconto pelo programa do Ministério da Saúde.',
      texto: 'A rede é credenciada ao programa e trabalha com os principais laboratórios nele ' +
             'incluídos. São gratuitos os medicamentos para hipertensão, diabetes e asma, e têm ' +
             'desconto os de dislipidemia, osteoporose, rinite, glaucoma, doença de Parkinson e ' +
             'anticoncepcionais. Leve documento com foto, CPF e a receita dentro da validade.'
    },
    {
      id: 'injecoes', icone: 'escudo', titulo: 'Injeções',
      resumo: 'Aplicação de injetáveis em sala apropriada, por profissional qualificado.',
      texto: 'As lojas têm local reservado e equipe habilitada para aplicar medicamentos ' +
             'injetáveis. Traga a receita e o medicamento. Consulte a unidade mais próxima ' +
             'para confirmar os horários em que o serviço está disponível.'
    },
    {
      id: 'afericoes', icone: 'relogio', titulo: 'Aferições',
      resumo: 'Medição de pressão arterial e de glicose com equipe especializada.',
      texto: 'Acompanhamento de rotina para quem controla pressão ou diabetes, feito por equipe ' +
             'treinada. É um serviço de acompanhamento: não substitui consulta médica nem exame ' +
             'laboratorial.'
    },
    {
      id: 'pbm', icone: 'medicamentos', titulo: 'PBM',
      resumo: 'Mais de 3.000 medicamentos de marca e genéricos com desconto de laboratório.',
      texto: 'Os Programas de Benefício em Medicamentos aplicam o desconto do próprio ' +
             'laboratório direto no balcão, mediante cadastro e apresentação da receita. ' +
             'A rede trabalha com mais de 3.000 medicamentos de marca e genéricos para os ' +
             'mais variados tratamentos.'
    },
    {
      id: 'convenios', icone: 'cartao', titulo: 'Convênios',
      resumo: 'Descontos por convênio particular ou empresarial.',
      texto: 'Empresas e entidades conveniadas garantem desconto a funcionários e associados, ' +
             'com compra identificada e desconto em folha quando o convênio prevê. ' +
             'Consulte se o seu convênio já é atendido pela rede.'
    },
    {
      id: 'plantao', icone: 'relogio', titulo: 'Atendimento 24 horas',
      resumo: 'Duas unidades de plantão, para quando a necessidade não espera.',
      texto: 'Planalto Verde, em Ribeirão Preto, e a unidade 24 Horas, em Pirassununga, ' +
             'atendem em regime de plantão, todos os dias. As demais lojas funcionam ' +
             'diariamente das 7h às 23h.'
    },
    {
      id: 'entrega', icone: 'caminhao', titulo: 'Disk Entrega',
      resumo: 'Medicamentos e perfumaria entregues em casa, pedidos pelo WhatsApp.',
      texto: 'Hoje o pedido é feito por telefone ou WhatsApp e passa por um atendente. ' +
             'Com a loja online, o mesmo pedido pode ser fechado pelo próprio cliente, a ' +
             'qualquer hora, com o frete calculado pelo CEP e sem ocupar ninguém no balcão.'
    },
    {
      id: 'recarga', icone: 'celular', titulo: 'Recarga de celular',
      resumo: 'Recarga das principais operadoras, na hora.',
      texto: 'Recarga de crédito pré-pago das principais operadoras de telefonia móvel, ' +
             'feita no caixa em poucos segundos.'
    },
    {
      id: 'estacionamento', icone: 'carro', titulo: 'Estacionamento próprio',
      resumo: 'Todas as lojas da rede têm estacionamento para clientes.',
      texto: 'Todas as unidades contam com estacionamento próprio, o que facilita a compra ' +
             'de volume e a retirada de pedidos feitos pelo site.'
    }
  ];

  janela.LojaDados = {
    categorias: CATEGORIAS,
    produtos: PRODUTOS,
    banners: BANNERS,
    regioes: REGIOES,
    config: CONFIG,
    lojas: LOJAS,
    servicos: SERVICOS,
    porSku: function (sku) {
      for (var i = 0; i < PRODUTOS.length; i++) {
        if (PRODUTOS[i].sku === sku) return PRODUTOS[i];
      }
      return null;
    },
    porSlug: function (slug) {
      for (var i = 0; i < PRODUTOS.length; i++) {
        if (PRODUTOS[i].slug === slug) return PRODUTOS[i];
      }
      return null;
    },
    porCategoria: function (id) {
      return PRODUTOS.filter(function (p) { return p.categoria === id; });
    },
    nomeCategoria: function (id) {
      for (var i = 0; i < CATEGORIAS.length; i++) {
        if (CATEGORIAS[i].id === id) return CATEGORIAS[i].nome;
      }
      return 'Produtos';
    }
  };
})(window);
