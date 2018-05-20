function grow(){
	var row = document.getElementById("rows").value;
	var col = document.getElementById("columns").value;
	var put_img = document.getElementById("garden");

	if(put_img.hasChildNodes()){
		put_img.removeChild(put_img.childNodes[0]);
	}

	var table = document.createElement('table');
	table.style.borderCollapse = "collapse";
	for(var i=0;i<row;i++){
		var tr = document.createElement("tr");
		for(var j=0;j<col;j++){
			var td = document.createElement('td');
			td.style.width = "100px";
			td.style.height = "100px";
			var img = document.createElement('img');
			if(Rand()==1){
				img.src = "img/roseee.jpg";	
			}else{
				img.src = "img/Daffodil.jpg";
			}			
			img.style.width = "100%";
			img.style.height = "100%";
			td.appendChild(img);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}

	put_img.appendChild(table);
}
function Rand(){
	var rand = Math.random();
	if(rand<=0.5){
		return 1;
	} else if(rand<=1){
		return 2;
	}
}