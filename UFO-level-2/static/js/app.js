// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// Select the button
var button = d3.select(".filters");
// Create event handlers 
button.on("change", inputElement);

function inputElement() {
  var inputs = {datetime: "", city:"", state:"", country:"", shape:""}
  Object.entries(inputs).forEach(([key,value])=> {
    var inputItem = d3.select(`#${key}`)
    var inputValue = inputItem.property("value")
    //Test for fields that weren't filled out
    if (inputValue) {
      inputs[key]=inputValue;
    }
    else {
      delete inputs[key];
    }
  });
  console.log(inputs);
  filterTable(inputs)
}
function filterTable(inputs) {

  var filtered = tableData;
  Object.entries(inputs).forEach(([key,value]) => {
    filtered = filtered.filter(data => data[key] === value);
  });
  runEnter(filtered);
}
// Complete the event handler function for the form
function runEnter(tableData) {
    tbody.html("");
    //Show the table 
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
}
runEnter(tableData);