$(document).ready(function() {
  $(addressForm).submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var address = $("input#address").val();
    var phone = $("input#phone").val();
    var email = $("input#email").val();

    $("#nameList").append("<li>name</li>"); //workshopping this line to register variable
    $("#contactDetails").append(address);
    $("#contactDetails").append(phone);
    $("#contactDetails").append(email);

    $("#nameList").show();
    $("#contactDetails").hide();
  })

  $("#nameList")
})