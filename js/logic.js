$(document).ready(function() {
  "use strict";
  buildGridInlineBlock(5, 4); // TODO: Have fun. Hover.
});


function buildGridFloat(x, y) {
  "use strict"; // this grid generation method uses floats
  var grid = $(".grid-float");
  for (var i = 0; i < x * y; i += 1) {
    // fill the grid with squares
    var square = $("<div></div>");
    square.addClass('square');
    square.appendTo(grid);
  }
  var gridWidth = $(".grid-float").outerWidth();
  var squareWidth = gridWidth / x;
  $(".grid-float > .square")
    .outerWidth(squareWidth)
    .outerHeight(squareWidth);
  // $("head").append("<style id='computedCSS'>.square { width:" + squareWidth + "px; height:" + squareWidth + "px; }</style>")

}

function buildGridTable(x, y) {
  "use strict"; // this grid generation method uses a table
  var table = $("<table></table>");
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
  table.appendTo(".grid-table");
  var gridWidth = $(".grid-table").outerWidth();
  var squareWidth = gridWidth / x;
  $(".grid-table > table > tbody > tr > td > .square")
    .outerWidth(squareWidth)
    .outerHeight(squareWidth);
}

function buildGridInlineBlock(x, y) {
  "use strict"; // this grid generation method uses display: inline-block
  var grid = $(".grid-inline-block");
  for (var i = 0; i < x * y; i += 1) {
    // fill the grid with squares
    var square = $("<div></div>");
    square.addClass('square');
    square.appendTo(grid);
  }
  var gridWidth = $(".grid-inline-block").outerWidth();
  var squareWidth = gridWidth / x;
  $(".grid-inline-block > .square")
    .outerWidth(squareWidth)
    .outerHeight(squareWidth);
  // $("head").append("<style id='computedCSS'>.square { width:" + squareWidth + "px; height:" + squareWidth + "px; }</style>")

}
