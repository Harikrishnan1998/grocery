
function ajax(){
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
   
    if(this.readyState==4 &&  this.status==200){
        
        var response = JSON.parse( this.responseText);
        
        var jgro = response.grocery;
        
        var output = "";
        for(var i=0;i<jgro.length;i++){
            output += "<tr>";
            output += "<th>"+jgro[i].slno+"</th>";
            output += "<th>"+jgro[i].name+"</th>";
            output += "<th>"+jgro[i].quantity+"</th>";
            output += "<th>"+jgro[i].unit+"</th>";
            output += "<th>"+jgro[i].dept+"</th>";
            output += "<th>"+jgro[i].notes+"</th>";
            output += "<tr>";

            
        }
        document.getElementById("demo").innerHTML=output;
    }


}
xhttp.open("GET","grocery.json",true);
xhttp.send();
}

