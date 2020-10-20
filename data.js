$.getJSON("https://api.covid19api.com/summary", function(data){
	var date = data.Date ;
	var country = data.Countries;		

	var table = document.getElementById("mydata");
		for(i=0;i<country.length;i++){
			var row= ` <tr>
							<td>${data.Countries[i].Country}</td>
					   </tr>
					 `
			table.innerHTML += row;
			
		}
	});
