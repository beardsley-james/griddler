function drawGrid(height, width, binaryArray, clueArray){
	
	var table = "";
	
	if (clueArray) {
		table += drawColumnHeaders(clueArray[0])
	}
	
	for (var y=0; y < height; y++) {
		
		var row = "";
		var clue;
		
		if (!binaryArray){
			for (var x=0; x<width; x++) {
				row += "0"
			}
		} else {row = binaryArray[y]}
		
		if (clueArray){
			clue = clueArray[1][y]
		}
		
		table += drawTableRow(y, width, row, clue);
	}
	
	return table
};

function drawTableRow(y, width, binaryString, clue){
	var row = "<tr>";
	
	if (clue) {
		row += drawRowHead(clue, y)
	}
	
	for (var x=0; x < width; x++) {
		var val=(binaryString[x] || 0);
		row += drawTableCell(x, y, val)
	}
	
	row += "</tr>"
	
	return row;
};

function drawTableCell(x, y, val){
	var cell = "<td class='";
	cell += "row" + y + " ";
	cell += "col" + x + " ";
	cell += generateClassFromValue(val);
	cell += "'></td>";
	return cell
}

function drawColumnHeaders(clueArray){
	var width = clueArray.length;
	var clueRow = "<tr class='clueRow'><td class='drawSelector'><span id='palette'></span></td>";
	for (x = 0; x < width; x++) {
		clueRow += drawColumnHead(clueArray[x], x)
	}
	clueRow += "</tr>"
	return clueRow
}

function drawColumnHead(clue, x){
	var clueCell = "<td class='colHead col" + x + "'>"
	for (y=0; y < clue.length; y++) {
		clueCell += "<span id='col" + x + "head" + y + "'>";
		clueCell += clue[y];
		clueCell += "</span>";
		if (y < clue.length - 1) {clueCell += "</br>"}
	}
	clueCell += "</td>";
	return clueCell
}

function drawRowHead(clue, y){
	var clueCell = "<td class='rowHead row" + y + "'>";
	for (x=0; x < clue.length; x++){
		clueCell += "<span id='row" + y + "head" + x + "'>";
		clueCell += clue[x];
		clueCell += "</span>"
	}
	clueCell += "</td>";
	return clueCell
};
