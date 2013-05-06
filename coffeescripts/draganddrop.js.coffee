root = exports ? this

if Modernizr.draganddrop
	$.fn.extend
		draggable: ->
			this.each ->
				$("img", this).on "dragstart", (evt) ->
					false
				$(this).on "dragstart", (evt) ->
					$(this).addClass "drag"
					evt.originalEvent.dataTransfer.effectAllowed = 'copyMove'
					evt.originalEvent.dataTransfer.setData 'text', $(this).attr 'id'
				$(this).on "dragenter", (evt) ->
					evt.preventDefault()
					$(this).addClass "dragover"
				$(this).on "dragleave", (evy) ->
					$(this).removeClass "dragover"
				$(this).on "dragend", (evt) ->
					evt.preventDefault()
					$(this).removeClass "dragover drag"
					false
		undraggable: ->
			this.each ->
				$(this).off "dragstart drag dragenter dragover dragleave dragend"
		droppable: ->
			this.each ->
				$(this).on "dragover", (evt) ->
					$(this).addClass "drop"
					evt.preventDefault()
					evt.originalEvent.dataTransfer.dropEffect = 'copy'
					false
				$(this).on "drop", (evt) ->
					evt.stopPropagation()
					element_id = evt.originalEvent.dataTransfer.getData 'text'
					$(this).removeClass("drop dragover").append $("\##{element_id}").detach().addClass "saved"
					false
		undroppable: ->
			this.each ->
				$(this).off "dragover drop"
else
	error "this browser does not support drag and drop"