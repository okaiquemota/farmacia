# Drogaria Bem Viver — loja de farmácia online

Site de e-commerce farmacêutico completo, em HTML, CSS e JavaScript puros —
sem build, sem dependências, sem back-end. Basta abrir `index.html`.

O projeto foi criado a partir do pedido de "uma cópia de uma página de produto
de farmácia para outra farmácia". Ele reproduz **a estrutura e as convenções**
de uma loja farmacêutica brasileira (PDP com galeria, preço/PIX/parcelamento,
cálculo de frete por CEP, abas de composição e bula, avaliações, carrinho),
com marca, textos, ilustrações e dados **totalmente originais**.

> **Loja fictícia.** Drogaria Bem Viver, as marcas de produto (Lumiara, Nuvela,
> Solaris, Vitalis, Orallis, Soft Care), os registros sanitários, preços e
> avaliações foram inventados para esta demonstração. Nenhuma venda é
> processada e nenhum pagamento é cobrado.

## Páginas

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Home: carrossel de destaques, categorias, ofertas do dia com cronômetro, prateleiras, faixa do clube |
| `produto.html` | Página de produto (PDP) — a peça central. Aceita `?sku=` ou `?slug=` |
| `categoria.html` | Listagem com filtros. Aceita `?cat=`, `?q=` (busca) e `?sub=` |
| `carrinho.html` | Carrinho, cupom e frete |
| `checkout.html` | Checkout em 4 etapas: identificação, entrega, pagamento e confirmação |
| `conta.html` | Entrar, cadastrar, meus pedidos, meus dados, endereços e clube. Aceita `?aba=` |
| `favoritos.html` | Produtos salvos, com adicionar todos ao carrinho |
| `institucional.html` | 12 páginas de conteúdo, ajuda e políticas. Aceita `?p=` |

Sem parâmetros, `produto.html` abre o produto principal
(`?sku=LUM-CPH-250` — creme de pentear 250 ml).

## O que a página de produto faz

- **Galeria** com miniaturas e zoom por clique
- **Bloco de preço** com preço "de/por", percentual de desconto, valor no PIX
  (5% off), parcelamento calculado e preço do clube de fidelidade
- **Variações** de tamanho que recalculam preço, PIX, parcelas e clube
- **Estoque** com três estados (disponível, últimas unidades, esgotado →
  botão "avise-me")
- **Frete por CEP**: 13 faixas de CEP, com entrega padrão, expressa (só onde
  há cobertura) e retirada em loja; frete grátis acima de R$ 99
- **Abas**: descrição, modo de uso, composição, tabela de especificações e
  avaliações
- **Avisos regulatórios** por tipo de produto — MIP ("ao persistirem os
  sintomas…"), suplemento ("este produto não é um medicamento"), protetor solar
- **Avaliações** com média agregada, distribuição por estrela e formulário
  que publica o comentário na hora
- **Barra fixa de compra** ao rolar, relacionados e vistos recentemente
- **JSON-LD** `schema.org/Product` gerado para cada produto

## Navegação e checkout

- **Cabeçalho retrátil.** Ao passar de 220px de rolagem ele encolhe de 127px
  para 61px, escondendo a régua de categorias e devolvendo a altura à página;
  volta ao completo perto do topo. A decisão usa histerese de posição (faixa
  morta de 120 a 220px), e não a direção da rolagem — encolher o cabeçalho
  muda a altura do documento e dispara novos eventos de rolagem, o que faria
  uma regra por direção oscilar. A altura corrente fica na variável CSS
  `--topo-fixo`, usada pelos blocos `sticky` para não passarem por baixo dele.
- **Menu mobile.** Abaixo de 860px a régua de categorias vira uma gaveta
  lateral com categorias, conta e ajuda, aberta pelo hambúrguer.
- **Checkout em etapas.** Identificação → entrega (com CEP, endereços salvos e
  escolha de frete) → pagamento (PIX, cartão ou boleto) → confirmação. O pedido
  é gravado e aparece em *Meus pedidos*, com detalhamento e recompra.

## Estrutura

```
index.html      produto.html   categoria.html   carrinho.html
checkout.html   conta.html     favoritos.html   institucional.html
assets/
  css/estilos.css      tokens de design, componentes e responsivo
  js/dados.js          catálogo: 14 produtos, 7 categorias, frete, cupons
  js/loja.js           cabeçalho, rodapé, carrinho, favoritos, sessão, pedidos
  js/home.js  js/produto.js  js/categoria.js  js/carrinho.js
  js/checkout.js  js/conta.js  js/favoritos.js  js/institucional.js
  img/                 ilustrações SVG originais, logo e banners
```

Cabeçalho e rodapé são montados por `loja.js` em todas as páginas, então
mudanças neles valem para o site inteiro.

## Como rodar

```bash
python3 -m http.server 8000
# http://localhost:8000
```

Abrir os arquivos direto pelo `file://` também funciona.

## Como adaptar para outra farmácia

Quase tudo vive em dois lugares:

1. **`assets/js/dados.js`** — o objeto `CONFIG` no fim do arquivo tem nome da
   loja, CNPJ, farmacêutico responsável, telefone, regra de frete grátis,
   desconto do PIX, limite de parcelas e cupons. O array `PRODUTOS` é o
   catálogo; cada item aceita descrição, modo de uso, composição, tabela de
   especificações, aviso legal e avaliações.
2. **`assets/css/estilos.css`** — o bloco `:root` no topo concentra as cores.
   Trocar `--marca-*` e `--oferta-*` muda a identidade do site inteiro.

Logo e favicon estão em `assets/img/logo.svg`, `logo-claro.svg` e `favicon.svg`.

## Pagamento

O checkout está pronto, mas nenhum provedor foi integrado — nenhuma cobrança
acontece e nenhum dado de cartão sai do navegador. O ponto de integração está
isolado na função `cobrar()` em `assets/js/checkout.js`: é ali que a cobrança
será criada e o retorno do provedor (QR do PIX, 3DS do cartão, linha digitável
do boleto) tratado. O pedido já nasce com um campo `status` correspondente.

## Estado salvo no navegador

Carrinho, favoritos, CEP, produtos vistos, avaliações escritas, sessão do
cliente, pedidos e endereços ficam em `localStorage` (prefixo `bv:`). Toda
leitura é protegida por `try/catch`, então o site funciona normalmente em
janela anônima.

## Acessibilidade

HTML semântico, link "pular para o conteúdo", abas navegáveis por setas do
teclado, `aria-live` nos avisos e no resultado do frete, foco visível,
alvos de toque adequados e suporte a `prefers-reduced-motion`.

## Testes

A interface foi verificada com Playwright em 1360px e 390px, em duas suítes
que somam mais de 100 checagens: renderização, busca, carrinho, variações de
produto, frete (válido e inválido), filtros, ordenação, cupons, cabeçalho
retrátil, menu mobile, favoritos, conta, checkout completo, gravação do pedido
e ausência de rolagem horizontal no mobile em todas as páginas.
