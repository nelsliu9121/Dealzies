root = exports ? this

root.error = (msg) ->
	error = "<div class=\"error\">#{msg}</div>"
	$("section#main").prepend error

root.store = new Storage()
root.drawers = []

drawers.push new Drawer()
drawers.push new Drawer true
drawers.forEach (drawer, index) ->
	drawer.alignElement index, drawers.length

$(".draggable").draggable()
$(".droppable").droppable()