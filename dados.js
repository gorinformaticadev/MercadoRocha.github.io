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

    email: 'contato@mercadorocha.com.br',
    emailCurriculo: 'rh@mercadorocha.com.br',

    instagram: 'https://www.instagram.com/gorinformatica/',
    instagramNome: '@gorinformatica',
    facebook: 'https://www.facebook.com/mercadorocha',
    facebookNome: 'Facebook',

    // Link para gerar o mapa: https://www.openstreetmap.org/export/embed.html?bbox=<LON_ESQ>%2C<LAT_SUL>%2C<LON_DIR>%2C<LAT_NOR>&layer=mapnik
    mapa: 'https://www.openstreetmap.org/export/embed.html?bbox=-47.95%2C-15.83%2C-47.88%2C-15.77&layer=mapnik'
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

  /* ---------- Imagens ----------
     Aceita caminho local (images/logo.png) ou link do Drive/Dropbox.
     Google Drive: https://drive.google.com/thumbnail?id=ID_DO_ARQUIVO&sz=w800
     Dropbox:      https://www.dropbox.com/s/ID/arquivo.jpg?raw=1            */
  imagens: {
    logo: 'images/logo.png',
    fachada: 'images/fachada.jpg'
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
      imagem: 'images/ofertas/banana.png',
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
