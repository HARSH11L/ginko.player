const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    nav.style.display = open ? 'flex' : '';
    if (open) {
      nav.style.position = 'absolute';
      nav.style.top = '76px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.padding = '18px 20px';
      nav.style.background = '#fff9e9';
      nav.style.borderBottom = '3px solid #111';
      nav.style.flexDirection = 'column';
      nav.style.alignItems = 'stretch';
      nav.style.zIndex = '30';
    }
  });
}

document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  if (nav) nav.classList.remove('open');
}));

// Subtle pointer tilt for the release cards. Disabled on touch/small screens.
if (window.matchMedia('(pointer:fine) and (min-width:900px)').matches) {
  document.querySelectorAll('.release-grid article, .trust-card, .feature').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(700px) rotateX(${y * -2}deg) rotateY(${x * 2}deg) translateY(-2px)`;
    });
    card.addEventListener('pointerleave', () => card.style.transform = '');
  });
}
