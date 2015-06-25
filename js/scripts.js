
function populateGrid(gridSize) {
	console.log("inside populate")
	console.log(gridSize)
	for (i = 1; i <= gridSize; i ++) {
		$("#gridtable").append("<tr id=row" + i + "></tr>");
		for (j = 1; j <= gridSize; j ++) {
			$("#row" + i).append("<td><div class=\"box_inactive\"></div></td>");
		}
	}
	changeClass();
}

function checkValidNum(sizeInput) {
	var sizeInput = $("input:text").val();
	var gridSizeRegex = /^\d*$/;
	if (!gridSizeRegex.test(sizeInput) || $("#gridsize").val(""))  {
		alert("you must put in a number");
		$("#gridsize").val("");
		event.preventDefault();
		console.log("boo")
		return
	} else {
		populateGrid(sizeInput);
	}	
};

function changeClass() {
	$(".box_inactive").on("mouseover", function() {
		$(this).attr("class", "box_active");
	});
}

// TODO - function for swapping out the form once the grid is populated.

// TODO - make the colors change randomly on mouseover

$("form").on("submit", function(event) {
	event.preventDefault();
	if ($(".box_inactive").length != 0) {
		console.log("already started") 
	} else {
		checkValidNum($("input:text").val());
	};	
});







