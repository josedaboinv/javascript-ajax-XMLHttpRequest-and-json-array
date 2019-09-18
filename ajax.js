   	
var idsr; 	
	 idsr=1; // any value, for example to consult in DB
	
	 
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) 
	{		
		// convert json Response from PHP File to Array
		var data = JSON.parse(this.responseText);									

		alert('this is my title: '+ data["title"] + ' and my number:' + data["id"]  );		
		
	};
	xmlhttp.open("GET","response.php?idsr="+idsr,true);
	xmlhttp.send();			
