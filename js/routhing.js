
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

		var oList =document.getElementById('list');
		var oLi= oList.getElementsByTagName('li');
		var oDian =document.getElementById('dian');
		var oEm=oDian.getElementsByTagName('em');
		var oBox=document.getElementById('box');
		var oPrev =document.getElementById('prev');
		var oNext =document.getElementById('next');
		var num=0;
		var timer=null;
		
		function tab(){
			oList.style.left=-num*oLi[0].offsetWidth+'px';
				for(var i=0;i<oEm.length;i++){
					oEm[i].className="";
				}
				oEm[num].className = 'active';
		}
		for(var i=0;i<oEm.length;i++){
			   oEm[i].index=i;
			oEm[i].onclick = function(){
				num=this.index;//箭头关联
				tab();
			}

			//右边箭头关联点
			oNext.onclick = function(){
				num++;
				if(num==oEm.length){
					num=0;
				}
				tab()
			 }
			 //左边箭头
			oPrev.onclick=function(){
				num--;
				if(num==-1){
					num=oEm.length-1;
				}
				tab();
			}
		}
		timer=setInterval(function(){
			num++;
				if(num==oEm.length){
					num=0;
				}
				tab()
		},3000)

		oBox.onmouseover=function(){
			clearInterval(timer);
		}
		oBox.onmouseout=function(){
			clearInterval(timer);
			timer=setInterval(function(){
			num++;
				if(num==oEm.length){
					num=0;
				}
				tab()},3000)
		}



}