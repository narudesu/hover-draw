$(document).ready(function() {
  "use strict";
  var
    grid = $(".grid");
  buildGridA(grid, 5, 4);
});


function buildGridA(grid, x, y) {
  "use strict";
  for (var i = 0; i < x * y; i += 1) {
    // fill the grid with squares
    var newElement = $("<div></div>");
    newElement.addClass('square');
    newElement.appendTo(grid);
  }
  var gridWidth = $(".grid").outerWidth();
  var squareWidth = gridWidth / x;
  $(".square")
    .outerWidth(squareWidth)
    .outerHeight(squareWidth);
  console.log(gridWidth);
}
