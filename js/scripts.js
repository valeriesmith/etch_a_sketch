function initialize() {
	changeClass();
	swapForm();
	resetGrid();
}


$("form").on("submit", function(event) {
	event.preventDefault();
	if ($(".box").length != 0) {
		console.log("already started") 
	} else {
		checkValidNum($("input:text").val());
	};	
});


function populateGrid(gridSize) {
	console.log(gridSize)
	for (i = 1; i <= gridSize; i ++) {
		$("#gridtable").append("<tr id=row" + i + "></tr>");
		for (j = 1; j <= gridSize; j ++) {
			$("#row" + i).append("<td><div class=\"box\"></div></td>");
		}
	}
	initialize();
}

function checkValidNum(sizeInput) {
	var sizeInput = $("input:text").val();
	var gridSizeRegex = /^\d*$/;
	if (!gridSizeRegex.test(sizeInput) || sizeInput == "" || sizeInput < 1)  {
		alert("you must put in a number greater than 0");
		$("#gridsize").val("");
		event.preventDefault();
		return
	} else {
		populateGrid(sizeInput);
	}	
};

function changeClass() {
	$(".box").on("mouseover", function() {
		$(this).css("background-color", makeRandomColor());
	});
}

function makeRandomColor() {
	color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	return color
}

function swapForm() {
	$(".initialgrid").css("display","none");
	$(".modifygrid").css("display","inline");
}


function resetGrid() {
	$("#modify").on("click", function(event) {
		event.preventDefault();
		$(".initialgrid").css("display","inline");
		$(".modifygrid").css("display","none");
		$("#gridsize").val("");	
		$("#gridtable").children().remove();
	});
}






