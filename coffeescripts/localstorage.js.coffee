root = exports ? this

if Modernizr.localstorage
	class root.Storage
		constructor: ->
			console.log "storage established"
		set: (key, value) ->
			localStorage.setItem key, JSON.stringify value
		remove: (key) ->
			localStorage.removeItem key
		get: (key) ->
			JSON.parse localStorage.getItem key
else
	error "this browser does not support local storage"