$(function () {
    $('#table').bootstrapTable({
        data: mydata
    });
});


var $table = $('#table');
    var mydata = []
    mydata = fetch('coronaDead1.json')
        .then(results => results.json())
        .then(console.log)


/*

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "coronaDead1.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    alert(lines);
}
*/
