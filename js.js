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
