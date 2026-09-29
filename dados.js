/* =====================================================================
   DADOS DO MERCADO ROCHA
   ---------------------------------------------------------------------
   ALTERE SOMENTE ESTE ARQUIVO.
   Salve (Ctrl+S) e atualize a pagina (Ctrl+F5). Nada mais precisa mudar.

   Observacao: este arquivo fica visivel no navegador (basta digitar
   site.com/dados.js). Isso NAO e problema aqui, porque sao os mesmos
   dados que ja aparecem para o visitante. NUNCA coloque aqui senha,
   token ou chave de API.
   ===================================================================== */

var MERCADO = {

  /* ---------- Identidade ---------- */
  nome: 'Mercado Rocha',
  // nome quebrado no logo do cabecalho
  nomeParte1: 'Mercado',
  nomeParte2: 'Rocha',
  sigla: 'MR',
  cnpj: 'CNPJ 00.000.000/0001-00',
  descricao: 'A economia do seu dia-a-dia.',

  /* ---------- Contato ---------- */
  contato: {
    // Endereco: use \n para pular linha
    endereco: 'Cond. Residêncial Buriti, Q 1, Area Especial, loja 13, Água Quente\nÁgua Quente, Brasília - DF, 72669-300',

    telefone: '(61) 3459-9937',

    // WhatsApp: SOMENTE numeros, com codigo do pais e sem o sinal de +
    whatsapp: '556134599937',

    email: 'mercadorocha2016@outlook.com',

    instagram: 'https://www.instagram.com/gorinformatica/',
    instagramNome: '@gorinformatica',
    facebook: 'https://www.facebook.com/mercadorocha',
    facebookNome: 'Facebook',

    // Link da ficha no Google Maps (botao "Compartilhar" do Google Meu Negocio)
    linkMapa: 'https://maps.app.goo.gl/mNUVmepgo9zAkCR89',
    // Link direto para as avaliações (Google Maps não aceita /reviews no link curto)
    linkMapaAvaliacoes: 'https://www.google.com/maps/place/Supermercado+Rocha/@-15.9468269,-48.2316314,17z/data=!3m1!4b1!4m6!3m5!1s0x935bd0852be6550b:0x5484ecb140f1faad!8m2!3d-15.9468269!4d-48.2316314!16s%2Fg%2F11c6v92vbc',
    placeId: '0x935bd0852be6550b:0x5484ecb140f1faad',

    // Mapa exibido no site. Este formato NAO precisa de chave de API.
    // Coordenadas exatas da ficha: -15.9468269, -48.2316314
    mapa: 'https://maps.google.com/maps?q=Supermercado+Rocha+%40-15.9468269,-48.2316314&z=16&hl=pt-BR&output=embed'

    /*
      OPCIONAL - Embed API oficial do Google (dá mais controle e nao
      mostra o botao "Ver no Google Maps" dentro do mapa), mas exige
      uma chave com a Maps Embed API habilitada:
        https://www.google.com/maps/embed/v1/place?key=SUA_CHAVE&q=place_id:PLACE_ID
      O place_id curto da ficha voce encontra em:
        https://www.google.com/maps/place/SEU-LINKS>...  (ultimo bloco da URL)
    */
  },

  /* ---------- Horario ---------- */
  horario: {
    barraTopo: 'Seg a Sáb, 7h às 21h, Dom até as 14h',
    // cada item vira uma linha
    linhas: [
      'Seg a Sex: 7h às 21h',
      'Sábado: 7h às 21h',
      'Domingo: 7h às 14h'
    ],
    rodape: 'Seg a Sáb, 7h às 21h, Dom até as 14h'
  },

  /* ---------- Entrega ---------- 
  entrega: {
    texto: 'Frete grátis acima de R$ 150 em um raio de 6 km.',
    tempoMedio: '30min',
    raio: '6 km'
  },*/

  /* ---------- Departamentos ----------
     Aparecem na grade do site. Ao clicar, abre o WhatsApp perguntando
     das ofertas daquele departamento. Para apontar para outra pagina,
     troque o campo `link` (ex.: link: 'https://.../hortifruti.html').
     Para adicionar ou remover, copie/apague um bloco.            */
  departamentos: [
    { icone: '🥬', nome: 'Hortifrúti' },
    { icone: '🥩', nome: 'Itens de Açougue' },
    { icone: '🐟', nome: 'Peixes' },
    { icone: '🧀', nome: 'Mercearia' },
    { icone: '🍞', nome: 'Padaria' },
    { icone: '🧊', nome: 'Congelados' },
    { icone: '🍺', nome: 'Bebidas' },
    { icone: '🧴', nome: 'Limpeza' },
    { icone: '🧼', nome: 'Higiene' },
    { icone: '🐾', nome: 'Pet' }
  ],

  /* ---------- SEO ----------
     IMPORTANTE: o titulo e a descricao abaixo sao uma COPIA do que
     esta escrito no <head> do index.html, para que os buscadores leiam
     o texto CERTO mesmo sem executar JavaScript. Quando alterar aqui,
     altere tambem no index.html (busque por <title> e
     <meta name="description">).                                      */
  seo: {
    titulo: 'Mercado Rocha | Supermercado em Água Quente, Brasília-DF',
    descricao: 'Supermercado em Água Quente, Brasília-DF. Hortifrúti, açougue, peixaria, padaria e mercearia com preço justo. Peça pelo WhatsApp e receba em 30 minutos.',
    palavrasChave: 'supermercado Brasília, mercado Água Quente, hortifrúti, açougue, peixaria, mercearia, padaria, congelados, bebidas, entrega em Brasília'
  },

  /* ---------- Imagens ----------
     Aceita caminho local (images/logo.png) ou link do Drive/Dropbox.
     Google Drive: https://drive.google.com/thumbnail?id=ID_DO_ARQUIVO&sz=w800
     Dropbox:      https://www.dropbox.com/s/ID/arquivo.jpg?raw=1            */
  imagens: {
    // Logo: aparece no cabecalho e no rodape, no lugar do antigo "MR"
    logo: 'images/logo.png',

    // Foto principal do topo: ocupa toda a area. Formato retrato (4:5)
    destaque: 'images/destaque.jpg',

    // Foto da loja na secao "Sobre"
    fachada: 'images/fachada.jpg',

    // Icone da aba do navegador
    favicon: 'images/favicon.png'
  },

  /* ---------- Ofertas da semana ----------
     Aqui a IMAGEM e a oferta inteira: o preco, o nome e a descricao
     ja vem escritos nela. Nao ha texto em volta do card.

     Voce so precisa trocar a imagem. Aceita caminho local ou link:
       Google Drive: https://drive.google.com/thumbnail?id=ID&sz=w800
       Dropbox:      https://www.dropbox.com/s/ID/arquivo.jpg?raw=1

     Um produto so aparece se a imagem carregar. Se a lista ficar
     vazia (ou nenhuma imagem carregar), a secao inteira some do site.

     Campos:
       imagem  -> obrigatorio. A imagem da oferta (quadrada).
       nome    -> opcional. NAO aparece na tela: serve so para o
                  leitor de tela (acessibilidade). Descreva o produto.
       link    -> opcional. Para onde o clique leva (a post do
                  Instagram, o WhatsApp, a pagina do produto...).

     Formato recomendado: imagem QUADRADA (1:1), 1000x1000 px.       */
  ofertas: [
    {
      imagem: 'images/ofertas/promo1.png',
      nome: 'Oferta: banana prata, quilo por R$ 5,99'
    },
    {
      imagem: 'images/ofertas/picanha.png',
      nome: 'Oferta: picanha, quilo por R$ 73,90'
    },
    {
      imagem: 'images/ofertas/leite.png',
      nome: 'Oferta: leite integral, 1 litro por R$ 4,54'
    },
    {
      imagem: 'images/ofertas/pao.png',
      nome: 'Oferta: pão francês, 500 g por R$ 6,24'
    },
    {
      imagem: 'images/ofertas/ovos.png',
      nome: 'Oferta: ovos, cartela com 30 unidades por R$ 21,16'
    },
    {
      imagem: 'images/ofertas/laranja.png',
      nome: 'Oferta: laranja pera, quilo por R$ 3,29'
    }
  ]
};
