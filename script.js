(function () {
  'use strict';

  var header = document.getElementById('header');
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  document.getElementById('ano').textContent = new Date().getFullYear();

  var fallbacks = {
    'images/produtos/banana.png': '🍌',
    'images/produtos/picanha.png': '🥩',
    'images/produtos/leite.png': '🥛',
    'images/produtos/pao.png': '🍞',
    'images/produtos/ovos.png': '🥚',
    'images/produtos/laranja.png': '🍊'
  };
  document.querySelectorAll('.logo-box img, .photo-box img, .prod__img img').forEach(function (img) {
    img.addEventListener('error', function () {
      var box = img.parentElement;
      var src = img.getAttribute('src');
      img.classList.add('is-missing');
      if (fallbacks[src]) {
        box.textContent = fallbacks[src];
        return;
      }
      var ph = document.createElement('span');
      ph.className = 'logo-box__hint';
      ph.innerHTML = 'Coloque a imagem em<br><code>' + src + '</code>';
      box.insertBefore(ph, box.firstChild);
    });
  });

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

  var revealables = document.querySelectorAll(
    '.card, .dept, .prod, .info, .contato__form, .logo-box, .photo-box, .hero__stats'
  );
  revealables.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  }

  var form = document.getElementById('contatoForm');
  var status = document.getElementById('formStatus');

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
      'Olá, Mercado Rocha! Meu nome é ' + f.get('nome') + ' (' + f.get('assunto') + ').\n' +
      'Telefone: ' + f.get('tel') + '\nE-mail: ' + f.get('email') + '\n\n' + f.get('msg')
    );
    window.open('https://wa.me/551140028922?text=' + texto, '_blank');

    status.textContent = 'Tudo certo! Abrimos o WhatsApp para você enviar.';
    form.reset();
  });

  form.addEventListener('input', function (e) {
    var field = e.target.closest('.field');
    if (field) field.classList.remove('has-error');
  });
})();
