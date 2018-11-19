message = document.getElementById("message"),
ConnectionStatus = document.getElementById("status"),
source;

function makeConnection() {
  source = new EventSource("http://localhost:3000");

  souce.onopen = function(event) {
    console.log("The connection is open");
  };

  source.onmessage = function(event) {
    var data = JSON.parse(even.data);
    var inputCell = document.getElementById("messageDisplay");
    inputCell.innerHTML = data;
    console.log("message = " + event.data);
  };

  source.addEventListener("dummy", function(event) {
    console.log("dummy message = " + event.data);
  })

  source.onerror = function(event) {
    console.log("An error was detected.");
  };

};

if (!!window.EventSource) {
  makeConnection();
} else {
  console.log("This browser does not support the EventSource feature");
};
