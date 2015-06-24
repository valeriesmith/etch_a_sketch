
function populateGrid(gridSize) {
	console.log("inside populate")
	console.log(gridSize)
	for (i = 1; i <= gridSize; i ++) {
		$("#gridtable").append("<tr id=row" + i + "></tr>");
		for (j = 1; j <= gridSize; j ++) {
			$("#row" + i).append("<td>" + i +"." + j + "</td>");
		}
	}
}

$("form").on("submit", function(event) {
	var sizeInput = $("input:text").val();
	var gridSizeRegex = /^\d*$/;
	if (!gridSizeRegex.test(sizeInput)) {
		alert("you must put in a number");
		$("#gridsize").val("");
		event.preventDefault();
	} else {
		gridSize = sizeInput;
		event.preventDefault();
		populateGrid(gridSize)
	}	
});

// console.log(gridSize)

// $( document ).ready(populateGrid(4));




