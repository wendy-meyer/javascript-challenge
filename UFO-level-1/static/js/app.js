// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select(".filters");
button.on("change", inputElement);

function inputElement() {
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime")
  // Get the value property of the input element
  var inputValue = inputElement.property("value")
  
  console.log(inputValue)
  filterTable(inputValue)
};

function filterTable(inputValue) {
  var filtered = tableData;
  var filteredData = filtered.filter(tableData => tableData.datetime === inputValue);
  runEnter(filteredData);
}

// Complete the event handler function for the form
function runEnter(tableData) {
    tbody.html("")
    //Display table
    tableData.forEach((sighting) => {
        var row = tbody.append("tr")
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td")
          cell.text(value)
        })
    })
};
runEnter(tableData);