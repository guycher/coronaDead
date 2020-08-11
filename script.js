function fillTable() {
    fetch('coronaDead1.json')
     .then(results => results.json())
     .then(mydata => {
        //console.log(mydata)
        $('#table').bootstrapTable({
            data: mydata
        })
     })
}

async function testFetch() {
   const result = await fetch('coronaDead1.json')
   const mydata = await result.json()
   $('#table').bootstrapTable({
        data: mydata
   })
}

//fillTable()
testFetch()

$(function () {
  $('[data-toggle="popover"]').popover()
});

$("popover-dismiss").popover(
{
    trigger: "focus"
});

$('#popoverOption').popover(
{
    trigger: "hover"
});