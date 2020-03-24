---
---
{% include_relative _konami.coffee %}

document.addEventListener 'keydown', (event) ->
  return if event.isComposing or event.keyCode is 229
  Konami.registerKeydown event, -> console.log 'KONAMI CODE UNLOCKED'

  gameOptions = document.getElementById 'game-menu'
  highlightedClass = 'option--highlighted'
  currentOption = gameOptions.getElementsByClassName(highlightedClass).item 0
  switch event.keyCode
    when 40
      if currentOption.nextElementSibling
        currentOption.classList.toggle highlightedClass
        currentOption.nextElementSibling.classList.toggle highlightedClass
    when 38
      if currentOption.previousElementSibling
        currentOption.classList.toggle highlightedClass
        currentOption.previousElementSibling.classList.toggle highlightedClass
    when 13
      currentOption.getElementsByTagName('a').item(0).click()
    else
      console.log event.keyCode
