// Get references to page elements
var $messageText = $("#messageText");
var $submitBtn = $("#submitAdmin");

// The API object contains methods for each kind of request we'll make
var API = {
  sendMessage: function(message) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(message),
      url: "api/message", 
      type: "POST"
    })    // console.log("lauch sendMessage")
    // return $.ajax({
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   type: "POST",
    //   url: "api/message",
    //   data: message
    // });
  },
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var availText = $messageText.val().trim();
  console.log("Avail text = " + availText );
  // var message = $messageText.val().trim();
  var message = {
    data: $messageText.val().trim()
  };
  console.log("message = " + message );
  // console.log("message = " + JSON.parse(message) );
  console.log("message = " + JSON.stringify(message) );


  if (!(message)) {
    console.log("You must enter a message.");
    // alert("You must enter an example text and description!");
    return;
  }

  API.sendMessage(message).then(function() {
    // refreshExamples();
    $("#messageText").empty;
  });

  $messageText.val("");
  // $exampleDescription.val("");
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
