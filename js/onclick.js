window.onload=function(){
	var oL2=document.getElementById('l2');
	var oHide=document.getElementById('hide');
	oL2.onclick=function(){
		if(oHide.style.display=='block'){
			oHide.style.display='none'
		}else{
			oHide.style.display='block';
		}
	}
}
	