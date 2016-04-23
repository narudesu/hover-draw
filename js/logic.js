$(document).ready(function() {
  "use strict";
  buildGridA(5, 4);
  buildGridB(5, 4);
  buildGridC(5, 4);
});


function buildGridA(x, y) {
  "use strict"; // this grid generation method uses floats
  var grid = $(".grid#1");
  for (var i = 0; i < x * y; i += 1) {
    // fill the grid with squares
    var square = $("<div></div>");
    square.addClass('square');
    square.appendTo(grid);
  }
  var gridWidth = $(".grid#1").outerWidth();
  var squareWidth = gridWidth / x;
  $(".grid#1 > .square")
    .outerWidth(squareWidth)
    .outerHeight(squareWidth);
  // $("head").append("<style id='computedCSS'>.square { width:" + squareWidth + "px; height:" + squareWidth + "px; }</style>")

}

function buildGridB(x, y) {
  "use strict"; // this grid generation method uses a table
  var table = $(".grid#2 > table");
  for (var i = 0; i < y; i++) {
    // creates the table rows
    var tr = $("<tr></tr>");
    for (var j = 0; j < x; j++) {
      var td = $("<td></td>");
      var square = $("<div></div>");
      square.addClass('square');
      square.appendTo(td);
      td.appendTo(tr);
    }
    tr.appendTo(table);
  }
  var gridWidth = $(".grid#2").outerWidth();
  var squareWidth = gridWidth / x;
  $(".grid#2 > table > tbody > tr > td > .square")
    .outerWidth(squareWidth)
    .outerHeight(squareWidth);
}
