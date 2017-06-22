(function(){
	/*品质优选页面头部商家信息部分控制开始*/
		var shop_info=document.getElementById('shop-search').getElementsByClassName('shop-info-wrapper')[0];
		if(window.addEventListener){
			shop_info.addEventListener('mouseover',function(e){
				var shop_detail=document.getElementById('shop-search').getElementsByClassName('shop-detail-wrapper')[0];
				shop_info.style.backgroundColor='#f6f6f6';
				shop_detail.style.display='block';
			});

			shop_info.addEventListener('mouseout',function(e){
				var shop_detail=document.getElementById('shop-search').getElementsByClassName('shop-detail-wrapper')[0];
				shop_info.style.backgroundColor='#fff';
				shop_detail.style.display='none';
			});
		}
	/*品质优选页面头部商家信息部分控制结束*/

	/*头部搜索框控制开始*/
		var search=document.getElementsByClassName('form-wrapper')[0].getElementsByTagName('input')[0];
		if(window.addEventListener){
			search.addEventListener('focus',function(e){
				var data_value=search.getAttribute('data-value');
				if(search.value===data_value){
					search.value='';
				}
			});
			search.addEventListener('blur',function(e){
				var value=search.value;
				var data_value=search.getAttribute('data-value');
				if(!value.replace(/^\s*((.|\n)*\S)?\s*$/,'$1')){
					search.value=data_value;
				}
			});
		}else if(window.attachEvent){
			search.attachEvent('onfocus',function(e){
				var data_value=search.getAttribute('data-value');
				if(search.value===data_value){
					search.value='';
				}
			});
			search.attachEvent('onblur',function(e){
				var value=search.value;
				var data_value=search.getAttribute('data-value');
				if(!value.replace(/^\s*((.|\n)*\S)?\s*$/,'$1')){
					search.value=data_value;
				}
			});
		}
	/*头部搜索框控制结束*/
})();