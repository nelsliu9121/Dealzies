root = exports ? this

class root.Card
	constructor: (data)->
		@id = "card_" + generateId(15)
		@data = data
		@element = null
		@drawElement()
	drawElement: ->
		@element = $ "<div id=\"#{@id}\" class=\"card draggable\" draggable=\"true\">"
		image_tag = "<img src=\"#{@data.image}\" />"
		title_tag = "<h3><a href=\"#{@data.link}\">#{@data.title}</a></h3>"
		price_tag = "<span>#{@data.price}</span>"
		desc_tag = "<p>#{@data.desc}</p>"
		@element.append [image_tag, title_tag, price_tag, desc_tag]
		@element.appendTo("div#cards").draggable()
	generateId = (length = 5) ->
		id = ""
		possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
		while id.length < length
			id += possibleChars.charAt Math.floor Math.random() * possibleChars.length
		id