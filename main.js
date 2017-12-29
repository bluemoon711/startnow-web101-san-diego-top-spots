$(document).ready(function() {
// write your code here

    $.getJSON("data.json", function(json) {
        $.each(json, function(index, value) {
            var table = $('table')[0];

            //create row for table
            var tr = document.createElement("tr");

            //create column for row
            var td = document.createElement("td");

            //create text node with name
            var txt = document.createTextNode(value.name);

            //Append text node to column
            td.appendChild(txt);

            //append column to row
            tr.appendChild(td);

            td = document.createElement("td");
            txt = document.createTextNode(value.description);
            td.appendChild(txt);
            tr.appendChild(td);

            td = document.createElement("td");
            txt = document.createTextNode(value.location);

            //create button
            var button = document.createElement("a");
            //add text to button
            txt = "Open in Google Maps";
            button.innerText = txt;

            //build link
            var link = 'https://www.google.com/maps/search/'+ value.location[0] + ',+' + value.location[1];

            button.setAttribute('href', link);
            td.appendChild(button);
            tr.appendChild(td);

            table.appendChild(tr);

      

        })    
    });
});

 

