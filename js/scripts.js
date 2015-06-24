
function populateGrid(gridSize) {
	for (i = 1; i <= gridSize; i ++) {
		$("#gridtable").append("<tr id=row" + i + "></tr>");
		for (j = 1; j <= gridSize; j ++) {
			$("#row" + i).append("<td>" + i +"." + j + "</td>");
		}
	}
}

var gridSize = 4

$( document ).ready(populateGrid(4));




