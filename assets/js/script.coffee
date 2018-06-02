---
---
for elem in document.querySelectorAll('.materialboxed')
  M.Materialbox.init elem

getActiveElement = (id) ->
  document.getElementById id

options =
  getActiveElement: getActiveElement
  activeClass: 'show-up'

for elem in document.querySelectorAll('.scrollspy')
  M.ScrollSpy.init elem, options
