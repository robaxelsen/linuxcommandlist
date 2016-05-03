
//TODO: Add about and contact page in dropdown-menu titled Menu
//TODO: Create logo
//TODO: Decide on whether or not to keep more info button/icons
//TODO: Decide on whther or not to use bootflat
//TODO: #topsearch is not styled good for mobile, and does not work well as a dropdown element. Put it under navbar instead.

// JSON object for the linux command entries
var commandEntries = [
  {
    "title" : "grep",
    "syntax" : "grep [OPTIONS] PATTERN [FILE...]",
    "example" : "grep milk shoppinglist.txt",
    "description" : "grep searches the named input FILEs for lines containing a match to the given PATTERN."
  },
  {
    "title": "ls",
    "syntax" : "ls [OPTION]... [FILE]...",
    "example": "ls -lah",
    "description": "List information about the FILEs (the current directory by default)."
  },
  {
    "title": "cut",
    "syntax" : "cut [OPTION]... [FILE]...",
    "example": "cut -c2 test.txt",
    "description": "Print selected parts of lines from each FILE to standard output."
  },
  {
    "title": "cat",
    "syntax" : "cat [OPTION]... [FILE]...",
    "example": "cat shoppinglist.txt",
    "description": "Concatenate FILE(s) to standard output."
  },
  {
    "title": "wc",
    "syntax" : "wc [OPTION]... [FILE]...",
    "example": "wc shoppinglist.txt",
    "description": " Print newline, word, and byte counts for each FILE, and a total line if more than one FILE is specified."
  }
];

// jQuery function to make jQuery fire when document is ready
$(document).ready(function() {

  // Lists all items in commandEntries object, in given html format
  commandEntries.forEach( function(item) {
    $(".toprow").append('<div class="col-md-3 cmdresult"><div class="thumbnail"><div class="caption"><h3 class="">' + item.title + '</h4><p><strong>' + item.syntax + '</strong></p><p><strong>Example:</strong> ' + item.example + '</p><p>' + item.description + '</p> <a href="#" class="btn btn-default btn-xs pull-right" role="button"><i class="glyphicon glyphicon-edit"></i></a>  <a href="#" class="btn btn-default btn-xs" role="button">More Info</a></div></div></div>');
  });

  // Function to fire when keypress Enter is done in input field
  $("input").on("keydown",function search(e) {
    if(e.keyCode == 13) {
      // Prevent default form submit behavior
      event.preventDefault();
      // Hides all current displayed results, then shows only the ones with title matching search value
      var searchEntered = $("#topsearch").val();
      $(".cmdresult").hide();
      $(".cmdresult:contains('" + searchEntered + "')").show();
    }
  });

  // http://brm.io/jquery-match-height/ jQuery plugin to make sure .cmdresult divs have equal heights
  $(function() {
    // apply your matchHeight on DOM ready (they will be automatically re-applied on load or resize)
    // get test settings
    var byRow = $('body').hasClass('test-rows');
    // apply matchHeight to each item container's items
    $('.toprow').each(function() {
      $(this).children('.cmdresult').matchHeight({
        byRow: byRow
      });
    });
  });

});
