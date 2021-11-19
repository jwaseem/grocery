function load(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        // console.log(response);
        var ab = response.items;
        console.log(ab);
        

        // var output="";
        // document.getElementById("grocery").innerHTML = "<tr><th>" + "slno" + "</th><th>"+ "name" +"</th><th>" + "quantity" + "</th><th>" + "unit" + "</th><th>" + "department" + "</th><th>" + "notes" +"</th></tr>";
        // for(var i=0;i<ab.length;i++){
            // output += "<tr><td>" + ab[i].slno +"</td><td>" + ab[i].name +"</td><td>" + ab[i].quantity +"</td><td>" + ab[i].unit +"</td><td>" + ab[i].department +"</td><td>" + ab[i].notes +"</td></tr>";
            document.getElementById("grocery").innerHTML =`<tr>
            <th scope="col">slno</th>
            <th scope="col">item name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit</th>
            <th scope="col">Department</th>
            <th scope="col">Notes</th>
          </tr>
          <tr>
            <td>${ab[0].slno}</td>
            <td>${ab[0].name}</td>
            <td>${ab[0].quantity}</td>
            <td>${ab[0].unit}</td>
            <td>${ab[0].department}</td>
            <td>${ab[0].notes}</td>
          </tr>
          <tr>
            <td>${ab[1].slno}</td>
            <td>${ab[1].name}</td>
            <td>${ab[1].quantity}</td>
            <td>${ab[1].unit}</td>
            <td>${ab[1].department}</td>
            <td>${ab[1].notes}</td>
            
          </tr>
          <tr>
            <td>${ab[2].slno}</td>
            <td>${ab[2].name}</td>
            <td>${ab[2].quantity}</td>
            <td>${ab[2].unit}</td>
            <td>${ab[2].department}</td>
            <td>${ab[2].notes}</td>
          
          </tr>
          <tr>
            <td>${ab[3].slno}</td>
            <td>${ab[3].name}</td>
            <td>${ab[3].quantity}</td>
            <td>${ab[3].unit}</td>
            <td>${ab[3].department}</td>
            <td>${ab[3].notes}</td>
            
          </tr>
          <tr>
            <td>${ab[4].slno}</td>
            <td>${ab[4].name}</td>
            <td>${ab[4].quantity}</td>
            <td>${ab[4].unit}</td>
            <td>${ab[4].department}</td>
            <td>${ab[4].notes}</td>
            
          </tr>
          <tr>
            <td>${ab[5].slno}</td>
            <td>${ab[5].name}</td>
            <td>${ab[5].quantity}</td>
            <td>${ab[5].unit}</td>
            <td>${ab[5].department}</td>
            <td>${ab[5].notes}</td>
            
          </tr>
          <tr>
            <td>${ab[6].slno}</td>
            <td>${ab[6].name}</td>
            <td>${ab[6].quantity}</td>
            <td>${ab[6].unit}</td>
            <td>${ab[6].department}</td>
            <td>${ab[6].notes}</td>
            
          </tr>
          <tr>
            <td>${ab[7].slno}</td>
            <td>${ab[7].name}</td>
            <td>${ab[7].quantity}</td>
            <td>${ab[7].unit}</td>
            <td>${ab[7].department}</td>
            <td>${ab[7].notes}</td>
            
          </tr>
          <tr>
            <td>${ab[8].slno}</td>
            <td>${ab[8].name}</td>
            <td>${ab[8].quantity}</td>
            <td>${ab[8].unit}</td>
            <td>${ab[8].department}</td>
            <td>${ab[8].notes}</td>
            
          </tr>
          <tr>
            <td>${ab[9].slno}</td>
            <td>${ab[9].name}</td>
            <td>${ab[9].quantity}</td>
            <td>${ab[9].unit}</td>
            <td>${ab[9].department}</td>
            <td>${ab[9].notes}</td>
            
          </tr>`;
          
        
     
            

      

        
      }
    };
    xhttp.open("GET", "list.json", true);
    xhttp.send();
  }