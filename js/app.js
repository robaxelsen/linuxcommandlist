$(document).ready(function() {
  $("#topbtn").click(function() {
    var searchEntered = $("#topsearch").val();
    console.log("click test");
    $(".cmdresult").hide();
    $("#topsearch h3:contains('" + searchEntered + "')").show();
  });
});
