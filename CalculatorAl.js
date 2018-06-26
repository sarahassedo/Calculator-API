function addNumber(x){
		document.getElementById("text1").value+=x;
}

// function Equal(){
// 	var x = document.getElementById("text1").value;
// 	document.getElementById("text1").value = eval(x);
// }
	
function Reset(){
	document.getElementById("text1").value = "";
}

// var infosElt = document.getElementById("infos");

function Equal(){
	var tdor = document.getElementById('text1');
	var operation = $("#text1").val();
	// tdor.addEventListener("submit", function (e) {
    // e.preventDefault();
	var API_URL = "https://www.calcatraz.com/calculator/api?c="
	var encodedOperation = encodeURI(operation);
	var url = API_URL + encodedOperation;
	console.log(url);

	$.ajax({
  	url: 'http://www.calcatraz.com/calculator/api?c=',
  	data: {
    	c: encodedOperation
  	},
  	type: 'GET',
  	contentType: 'jsonp',
  	success: function(data) {
     $("#text1").val(data);

  	},
 	 error: function(request, error, exception) {
    	console.log(error + '---' + exception + '---' + request);
    	console.log(request);
  	
	}

});

}