function closeAndOpen(elem){
	var a,b;
	if (elem.id == "cross1") {
		a = document.getElementById('work1');
		b = getComputedStyle(a,null);
		if (b.visibility== 'visible') {
		a.style.visibility = 'hidden';
		elem.style.marginLeft = 0;	
		} else {
			a.style.visibility = 'visible';
			elem.style.marginLeft = 165;
		
		}
	}
	else if (elem.id == "cross2") {
		a = document.getElementById('work2');
		b = getComputedStyle(a,null);
		if (b.visibility== 'visible') {
		a.style.visibility = 'hidden';
		elem.style.marginLeft = 0;	
		} else {
			a.style.visibility = 'visible';
			elem.style.marginLeft = 165;
		
		}
	}
	else if (elem.id == "cross3") {
		a = document.getElementById('work3');
		b = getComputedStyle(a,null);
		if (b.visibility== 'visible') {
		a.style.visibility = 'hidden';
		elem.style.marginLeft = 0;	
		} else {
			a.style.visibility = 'visible';
			elem.style.marginLeft = 165;
		
		}
	}
}

function openPopUp(){
	var a = document.getElementById("PopUp");
	a.style.display = "block";
	a.style.height = "100%";
	a.style.width = "100%";
	a.style.zIndex = 4;
	a.style.position = "fixed";
	a.style.backgroundColor = "rgba(0,0,0,0.5)";

	var b = document.getElementById("childPopUp");
	b.style.width = '40%';
	b.style.height = '40%';
	b.style.backgroundColor = "white";
	b.style.display = "block";
	b.style.marginLeft = "auto"
	b.style.marginRight = "auto"
	b.style.marginTop = "300px"

}

function closePopUp(){
	var a = document.getElementById("PopUp");
	a.style.display = "none";	
}