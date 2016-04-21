var commandEntries = [
  {
    "title" : "grep",
    "syntax" : "grep [OPTIONS] PATTERN [FILE...]",
    "example" : "grep milk shoppinglist.txt",
    "description" : "grep searches the named input FILEs for lines containing a match to the given PATTERN."
  },
  {
    "title": "grep",
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

$(document).ready(function() {
  $(".cmdresult").append({
    
  });
  $("#topbutton").click(function() {
    var searchEntered = $("#topsearch").val();
    console.log("click test");
    $(".cmdresult").hide();
    $("#topsearch h3:contains('" + searchEntered + "')").show();
  });
});
