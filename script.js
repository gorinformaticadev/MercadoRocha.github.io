(function () {
  'use strict';

  var D = window.MERCADO || {};

  /* =========================================================
     1. Preenche os campos marcados com data-cfg no HTML
     ========================================================= */

  function buscar(caminho) {
    return caminho.split('.').reduce(function (obj, parte) {
      return obj == null ? undefined : obj[parte];
    }, D);
  }

  function textoSeguro(valor) {
    return String(valor)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .split('\n').join('<br>');
  }

  /* Links derivados — precisam existir ANTES de preencher o HTML. */
  if (D.contato) {
    if (D.contato.telefone) {
      D.contato.ligar = 'tel:+' + String(D.contato.telefone).replace(/\D/g, '');
    }
    if (D.contato.email) D.contato.emailLink = 'mailto:' + D.contato.email;
    if (D.contato.emailCurriculo) D.contato.emailCurriculoLink = 'mailto:' + D.contato.emailCurriculo;
    if (D.contato.whatsapp) D.contato.linkWhatsapp = 'https://wa.me/' + D.contato.whatsapp;
    if (D.contato.linkMapaAvaliacoes) {
      // já vem pronto no dados.js
    } else if (D.contato.linkMapa) {
      D.contato.linkMapaAvaliacoes = D.contato.linkMapa.replace(/\?.*$/, '') + '/reviews';
    }
    if (D.contato.endereco) {
      D.contato.enderecoLinha1 = String(D.contato.endereco).split('\n').pop();
    }
  }
  if (D.nomeParte1) D.nome = (D.nomeParte1 + ' ' + (D.nomeParte2 || '')).trim();

  /* Titulo e descricao: o index.html ja traz a versao estatica (que e a
     que o buscador le com seguranca). Aqui so sincronizamos caso o
     dados.js mude — e nunca trocamos pelo nome da loja, que perderia
     as palavras-chave. */
  if (D.seo && D.seo.titulo) document.title = D.seo.titulo;
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && D.seo && D.seo.descricao) metaDesc.setAttribute('content', D.seo.descricao);
  var metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && D.seo && D.seo.palavrasChave) {
    metaKeywords.setAttribute('content', D.seo.palavrasChave);
  }
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  function valorDe(caminho) {
    var v = buscar(caminho);
    if (v === undefined) return null;
    return Array.isArray(v) ? v.join('\n') : v;
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-cfg]'), function (el) {
    var v = valorDe(el.getAttribute('data-cfg'));
    if (v !== null) el.innerHTML = textoSeguro(v);
  });

  Array.prototype.forEach.call(document.querySelectorAll('[data-cfg-href]'), function (el) {
    var v = valorDe(el.getAttribute('data-cfg-href'));
    if (v) el.setAttribute('href', v);
  });

  Array.prototype.forEach.call(document.querySelectorAll('[data-cfg-src]'), function (el) {
    var v = valorDe(el.getAttribute('data-cfg-src'));
    if (v) el.setAttribute('src', v);
  });

  Array.prototype.forEach.call(document.querySelectorAll('[data-cfg-alt]'), function (el) {
    var v = valorDe(el.getAttribute('data-cfg-alt'));
    if (v) el.setAttribute('alt', String(v));
  });

  /* =========================================================
     Departamentos: vem do dados.js. Cada item leva ao WhatsApp
     pedindo as ofertas daquele departamento (ou ao `link` definido).
     ========================================================= */

  (function departamentos() {
    var grid = document.getElementById('deptGrid');
    if (!grid) return;
    var lista = Array.isArray(D.departamentos) ? D.departamentos : [];
    var zap = D.contato && D.contato.whatsapp ? D.contato.whatsapp : '';

    lista.forEach(function (dept) {
      var a = document.createElement('a');
      a.className = 'dept';
      a.href = dept.link || ('https://wa.me/' + zap + '?text=' +
        encodeURIComponent('Olá! Quero saber as ofertas de ' + (dept.nome || '') + '.'));
      if (dept.link && /^https?:/i.test(dept.link)) {
        a.target = '_blank';
        a.rel = 'noopener';
      }
      if (dept.icone) {
        var icone = document.createElement('span');
        icone.textContent = dept.icone;
        a.appendChild(icone);
        a.appendChild(document.createTextNode(' ' + (dept.nome || '')));
      } else {
        a.textContent = dept.nome || '';
      }
      grid.appendChild(a);
    });
  })();

  /* =========================================================
     Ofertas: gera os cards e so mostra os que carregarem
     ========================================================= */

  (function ofertas() {
    var grid = document.getElementById('prodGrid');
    var section = grid && grid.closest('section');
    if (!grid || !section) return;

    var lista = Array.isArray(D.ofertas) ? D.ofertas : [];

    var removerSecao = function () {
      section.remove();
      Array.prototype.slice.call(document.querySelectorAll('a[href="#ofertas"]'))
        .forEach(function (a) {
          var alvo = a.hasAttribute('data-oferta-link') ? a.parentNode : a;
          if (alvo) alvo.remove();
        });
    };

    if (!lista.length) return removerSecao();

    var validos = 0;
    var resolvidos = 0;

    lista.forEach(function (oferta) {
      var card = document.createElement('article');
      card.className = 'prod is-pending';

      var img = document.createElement('img');
      img.className = 'prod__img';
      img.alt = oferta.nome || 'Oferta';
      img.width = 600;
      img.height = 600;
      if (oferta.imagem) img.src = oferta.imagem;

      if (oferta.link) {
        var a = document.createElement('a');
        a.className = 'prod__link';
        a.href = oferta.link;
        if (/^https?:/i.test(oferta.link)) {
          a.target = '_blank';
          a.rel = 'noopener';
        }
        a.appendChild(img);
        card.appendChild(a);
      } else {
        card.appendChild(img);
      }

      grid.appendChild(card);

      var resolver = function (carregou) {
        if (carregou) {
          validos++;
          card.classList.remove('is-pending');
        } else {
          card.classList.add('is-gone');
        }
        if (++resolvidos < lista.length) return;
        if (validos > 0) return;
        removerSecao();
      };

      if (!oferta.imagem) return resolver(false);
      if (img.complete) return resolver(img.naturalWidth > 0);
      img.addEventListener('load', function () { resolver(true); });
      img.addEventListener('error', function () { resolver(false); });
    });
  })();

  /* =========================================================
     3. Imagens de logo e fachada: avisa o caminho se faltar
     ========================================================= */

  /* Imagens que podem faltar: mostra o caminho para corrigir. 
  Array.prototype.forEach.call(
    document.querySelectorAll('.destaque img, .photo-box img, .logo__mark img'),
    function (img) {
      img.addEventListener('error', function () {
        img.classList.add('is-missing');
        var ph = document.createElement('span');
        ph.className = 'img-faltando';
        ph.innerHTML = 'Coloque a imagem em<br><code>' + img.getAttribute('src') + '</code>';
        img.parentNode.appendChild(ph);
      });
    }
  );
*/
  /* =========================================================
     4. Menu, header e formulario
     ========================================================= */

  var header = document.getElementById('header');
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  var onScroll = function () {
    header.classList.toggle('is-stuck', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggleMenu = function (force) {
    var open = force !== undefined ? force : !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  };
  burger.addEventListener('click', function () { toggleMenu(); });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && window.innerWidth <= 760) toggleMenu(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) toggleMenu(false);
  });

  var form = document.getElementById('contatoForm');
  var status = document.getElementById('formStatus');
  var numero = D.contato && D.contato.whatsapp ? D.contato.whatsapp : '';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.classList.remove('is-error');

    var ok = true;
    ['nome', 'email', 'tel'].forEach(function (id) {
      var input = document.getElementById(id);
      var field = input.closest('.field');
      var valid = input.value.trim().length > 0 &&
        (id !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim()));
      field.classList.toggle('has-error', !valid);
      if (!valid) ok = false;
    });

    if (!ok) {
      status.textContent = 'Confira os campos destacados.';
      status.classList.add('is-error');
      return;
    }

    var f = new FormData(form);
    var texto = encodeURIComponent(
      'Olá, ' + (D.nome || 'Mercado Rocha') + '! Meu nome é ' + f.get('nome') +
      ' (' + f.get('assunto') + ').\nTelefone: ' + f.get('tel') +
      '\nE-mail: ' + f.get('email') + '\n\n' + f.get('msg')
    );
    window.open('https://wa.me/' + numero + '?text=' + texto, '_blank');

    status.textContent = 'Tudo certo! Abrimos o WhatsApp para você enviar.';
    form.reset();
  });

  form.addEventListener('input', function (e) {
    var field = e.target.closest('.field');
    if (field) field.classList.remove('has-error');
  });

  /* =========================================================
     5. Animacao na rolagem
     ========================================================= */

  var revealables = document.querySelectorAll(
    '.card, .dept, .prod, .info, .contato__form, .destaque, .photo-box, .hero__stats'
  );

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    revealables.forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  } else {
    revealables.forEach(function (el) { el.classList.add('reveal', 'is-visible'); });
  }
})();
