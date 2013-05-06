root = exports ? this

class root.Drawer
	constructor: (makeNew = false)->
		@id = "drawer_" + generateId(15)
		@cards = []
		@element = null
		@drawElement()
		makeNewDrawer @element if makeNew
	addCard: (card) ->
		@cards.push card
	removeCard: (card) ->
		@cards.splice (if typeof card == "number" then card else @cards.indexOf card), 1
	getCard: (id) ->
		if typeof id == "number"
			@cards[id]
		else
			@cards.filter ->
				this if this["id"] == id
	drawElement: ->
		@element = $("<div id=" + @id + " class=\"drawer droppable\"></div>").appendTo("div#drawers").dropp
	updateElement: ->
		@element
	alignElement: (index, total) ->
		windowWidth = $(window).width()
		devidedSpace = 1140 / total
		spacePushed = devidedSpace * index
		totalPushed = (windowWidth - 1140) / 2 + spacePushed + (devidedSpace - 300) / 2
		@element.css "left", totalPushed
	makeNewDrawer = (element) ->
		element.addClass "new_drawer"
		element.one "click", (evt) ->
			drawers.push new Drawer true
			drawers.forEach (drawer, index) ->
				drawer.alignElement index, drawers.length
			$(evt.target).removeClass "new_drawer"
	generateId = (length = 5) ->
		id = ""
		possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
		while id.length < length
			id += possibleChars.charAt Math.floor Math.random() * possibleChars.length
		id