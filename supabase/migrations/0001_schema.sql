-- =========================================================================
-- Drogaria São Carlos — esquema da loja online
--
-- Aplicar com `supabase db push`, ou colando no SQL Editor do projeto.
-- Tudo vive no schema `farmacia` para poder conviver com outros sistemas
-- no mesmo banco sem colidir com as tabelas deles.
-- =========================================================================

create schema if not exists farmacia;

-- ------------------------------------------------------------ catálogo

create table farmacia.categorias (
  id        text primary key,
  nome      text not null,
  icone     text not null default 'medicamentos',
  ordem     smallint not null default 0
);

create table farmacia.produtos (
  sku             text primary key,
  slug            text not null unique,
  nome            text not null,
  marca           text not null,
  linha           text,
  categoria_id    text not null references farmacia.categorias (id),
  subcategoria    text not null,

  -- centavos, não float: 89.90 em ponto flutuante não é exatamente 89.90,
  -- e somar isso num carrinho acumula diferença de arredondamento
  preco_centavos       integer not null check (preco_centavos >= 0),
  preco_de_centavos    integer check (preco_de_centavos >= 0),
  preco_clube_centavos integer check (preco_clube_centavos >= 0),

  imagem          text not null,
  galeria         text[] not null default '{}',
  nota            numeric(2,1) not null default 0 check (nota between 0 and 5),
  qtd_avaliacoes  integer not null default 0 check (qtd_avaliacoes >= 0),
  estoque         integer not null default 0 check (estoque >= 0),

  destaque        boolean not null default false,
  generico        boolean not null default false,
  tags            text[] not null default '{}',

  resumo          text not null,
  beneficios      text[] not null default '{}',
  descricao       text,
  modo_uso        text,
  ingredientes    text,
  especificacoes  jsonb not null default '[]',
  aviso_legal     text,
  variacoes       jsonb not null default '[]',
  relacionados    text[] not null default '{}',

  -- a vitrine tem ordem curada (carro-chefe primeiro, depois por categoria);
  -- sem esta coluna a listagem sairia em ordem de SKU e embaralharia as prateleiras
  ordem           smallint not null default 0,

  ativo           boolean not null default true,
  criado_em       timestamptz not null default now(),
  atualizado_em   timestamptz not null default now()
);

create index on farmacia.produtos (ordem) where ativo;
create index on farmacia.produtos (categoria_id) where ativo;
create index on farmacia.produtos (destaque) where ativo;

-- busca por nome, marca e resumo, sem acento e sem depender de maiúscula
create index produtos_busca_idx on farmacia.produtos
  using gin (to_tsvector('portuguese', nome || ' ' || marca || ' ' || subcategoria || ' ' || resumo));

-- ------------------------------------------------------------ rede física

create table farmacia.lojas (
  id        smallserial primary key,
  nome      text not null,
  numero    text not null default '',
  cidade    text not null,
  uf        char(2) not null default 'SP',
  endereco  text not null,
  horario   text not null,
  telefone  text not null default '',
  plantao   boolean not null default false,
  ordem     smallint not null default 0
);

create index on farmacia.lojas (cidade);

create table farmacia.servicos (
  id      text primary key,
  icone   text not null,
  titulo  text not null,
  resumo  text not null,
  texto   text not null,
  ordem   smallint not null default 0
);

-- ------------------------------------------------------------ comercial

create table farmacia.cupons (
  codigo          text primary key,
  tipo            text not null check (tipo in ('percentual', 'frete')),
  valor           numeric(5,4) not null check (valor > 0),
  descricao       text not null,
  minimo_centavos integer not null default 0,
  ativo           boolean not null default true,
  expira_em       timestamptz
);

create table farmacia.faixas_frete (
  id            smallserial primary key,
  cep_inicio    integer not null,
  cep_fim       integer not null,
  uf            text not null,
  nome          text not null,
  base_centavos integer not null check (base_centavos >= 0),
  prazo_dias    smallint not null check (prazo_dias > 0),
  expresso      boolean not null default false,
  check (cep_fim >= cep_inicio)
);

create index on farmacia.faixas_frete (cep_inicio, cep_fim);

-- ------------------------------------------------------------ avaliações

create table farmacia.avaliacoes (
  id           uuid primary key default gen_random_uuid(),
  produto_sku  text not null references farmacia.produtos (sku) on delete cascade,
  autor_id     uuid references auth.users (id) on delete set null,
  autor_nome   text not null,
  nota         smallint not null check (nota between 1 and 5),
  titulo       text,
  texto        text not null,
  verificada   boolean not null default false,
  publicada    boolean not null default true,
  criado_em    timestamptz not null default now()
);

create index on farmacia.avaliacoes (produto_sku) where publicada;

-- ------------------------------------------------------------ pedidos

create table farmacia.pedidos (
  id                 uuid primary key default gen_random_uuid(),
  numero             text not null unique,
  cliente_id         uuid references auth.users (id) on delete set null,

  cliente            jsonb not null,   -- nome, email, cpf, telefone
  entrega            jsonb not null,   -- cep, rua, numero, complemento, bairro, cidade, uf
  frete              jsonb not null,   -- nome, prazo, valor

  pagamento          text not null check (pagamento in ('pix', 'cartao', 'boleto')),
  cupom              text references farmacia.cupons (codigo),

  subtotal_centavos  integer not null check (subtotal_centavos >= 0),
  desconto_centavos  integer not null default 0 check (desconto_centavos >= 0),
  frete_centavos     integer not null default 0 check (frete_centavos >= 0),
  total_centavos     integer not null check (total_centavos >= 0),

  status             text not null default 'aguardando_pagamento'
                     check (status in ('aguardando_pagamento', 'pago', 'separando',
                                       'enviado', 'entregue', 'cancelado')),

  -- preenchido pelo provedor de pagamento quando houver integração
  pagamento_ref      text,

  criado_em          timestamptz not null default now(),
  atualizado_em      timestamptz not null default now()
);

create index on farmacia.pedidos (cliente_id, criado_em desc);

create table farmacia.pedido_itens (
  id             bigserial primary key,
  pedido_id      uuid not null references farmacia.pedidos (id) on delete cascade,
  sku            text not null,

  -- nome, marca e preço ficam gravados no item: o catálogo muda de preço e
  -- o pedido antigo tem de continuar mostrando o que o cliente pagou
  nome           text not null,
  marca          text not null,
  imagem         text not null default '',
  variacao       text,
  preco_centavos integer not null check (preco_centavos >= 0),
  quantidade     smallint not null check (quantidade > 0)
);

create index on farmacia.pedido_itens (pedido_id);

-- ------------------------------------------------------------ atualizado_em

create or replace function farmacia.toca_atualizado_em()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.atualizado_em = now();
  return new;
end;
$$;

create trigger produtos_atualizado_em before update on farmacia.produtos
  for each row execute function farmacia.toca_atualizado_em();

create trigger pedidos_atualizado_em before update on farmacia.pedidos
  for each row execute function farmacia.toca_atualizado_em();

-- =========================================================================
-- Row Level Security
--
-- O catálogo é público para leitura: é uma vitrine. Escrita no catálogo é
-- só pelo painel, com service_role, que ignora RLS — por isso não existe
-- policy de escrita aqui. Pedido é do dono e de mais ninguém.
-- =========================================================================

alter table farmacia.categorias    enable row level security;
alter table farmacia.produtos      enable row level security;
alter table farmacia.lojas         enable row level security;
alter table farmacia.servicos      enable row level security;
alter table farmacia.cupons        enable row level security;
alter table farmacia.faixas_frete  enable row level security;
alter table farmacia.avaliacoes    enable row level security;
alter table farmacia.pedidos       enable row level security;
alter table farmacia.pedido_itens  enable row level security;

create policy leitura_publica on farmacia.categorias
  for select to anon, authenticated using (true);

create policy leitura_publica on farmacia.produtos
  for select to anon, authenticated using (ativo);

create policy leitura_publica on farmacia.lojas
  for select to anon, authenticated using (true);

create policy leitura_publica on farmacia.servicos
  for select to anon, authenticated using (true);

create policy leitura_publica on farmacia.faixas_frete
  for select to anon, authenticated using (true);

-- cupom expirado ou desligado não deve nem aparecer
create policy leitura_publica on farmacia.cupons
  for select to anon, authenticated
  using (ativo and (expira_em is null or expira_em > now()));

create policy leitura_publica on farmacia.avaliacoes
  for select to anon, authenticated using (publicada);

-- avaliar exige conta: sem isso a caixa de comentários vira alvo de robô
create policy escreve_a_propria on farmacia.avaliacoes
  for insert to authenticated with check (autor_id = (select auth.uid()));

create policy edita_a_propria on farmacia.avaliacoes
  for update to authenticated
  using (autor_id = (select auth.uid()))
  with check (autor_id = (select auth.uid()));

create policy le_os_proprios on farmacia.pedidos
  for select to authenticated using (cliente_id = (select auth.uid()));

create policy cria_os_proprios on farmacia.pedidos
  for insert to authenticated with check (cliente_id = (select auth.uid()));

create policy le_os_proprios on farmacia.pedido_itens
  for select to authenticated
  using (exists (
    select 1 from farmacia.pedidos p
    where p.id = pedido_id and p.cliente_id = (select auth.uid())
  ));

create policy cria_os_proprios on farmacia.pedido_itens
  for insert to authenticated
  with check (exists (
    select 1 from farmacia.pedidos p
    where p.id = pedido_id and p.cliente_id = (select auth.uid())
  ));

-- ------------------------------------------------------------ exposição

-- o PostgREST só enxerga schema que estiver exposto nas configurações da API
grant usage on schema farmacia to anon, authenticated;
grant select on all tables in schema farmacia to anon, authenticated;
grant insert on farmacia.avaliacoes, farmacia.pedidos, farmacia.pedido_itens to authenticated;
grant update on farmacia.avaliacoes to authenticated;
grant usage on all sequences in schema farmacia to authenticated;
