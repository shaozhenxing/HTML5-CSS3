function json2url(json){
	json.t=Math.random();
	
	var arr=[];
	for(var name in json){
		arr.push(name+'='+json[name]);
	}
	return arr.join('&');
}
function ajax(json){
	var timer=null;
	json=json || {};
	if(!json.url)return;
	json.type=json.type || 'get';
	json.data=json.data || {};
	json.timeout=json.timeout || 3000;
	json.dataType=json.dataType || 'strive';
	
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	switch(json.type.toLowerCase()){
		case 'get':
			oAjax.open('GET',json.url+'?'+json2url(json.data),true);
			oAjax.send();
			break;
		case 'post':
			oAjax.open('POST',json.url,true);
			oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			oAjax.send(json2url(json.data));
			break;
	}
	
	//加载
	json.fnLoading && json.fnLoading();
	
	
	
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			
			json.complete && json.complete();
			
			clearTimeout(timer);
			if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
				if(json.dataType=='xml'){
					json.success && json.success(oAjax.responseXML);
				}else{
					json.success && json.success(oAjax.responseText);	
				}
			}else{
				json.error && json.error(oAjax.status);
			}
		}
	};
	
	//网络超时
	timer=setTimeout(function(){
		alert('网络有问题');
		oAjax.onreadystatechange=null;
	},json.timeout);
}














