for (let elem of document.querySelectorAll('.materialboxed')) {
  M.Materialbox.init(elem);
}

for (let elem of document.querySelectorAll('.scrollspy')) {
  M.ScrollSpy.init(elem, { activeClass: 'show-up' });
}
