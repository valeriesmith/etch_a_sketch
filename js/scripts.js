
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
	if (!gridSizeRegex.test(sizeInput)) {
		alert("you must put in a number");
		$("#gridsize").val("");
		event.preventDefault();
		console.log("boo")
		return
	} else {
		populateGrid(sizeInput);
	}	
};

// function changeClass() {
// 	$(".box_inactive").click(function() {
// 		console.log($(this.className));
// 		$(this).attr("class", "box_active");
// 	});
// }

function changeClass() {
	$(".box_inactive").on("mouseover", function() {
		$(this).attr("class", "box_active");
	});
}

$("form").on("submit", function(event) {
	event.preventDefault();
	checkValidNum($("input:text").val());
});







