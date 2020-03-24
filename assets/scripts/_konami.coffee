Konami =
  CODE: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  hits: 0
  registerKeydown: (event, callback) ->
    return @hits = 0 if event.keyCode isnt @CODE[@hits]
    if ++@hits is @CODE.length
      callback()
      @hits = 0
