$(document).ready(function() {
  "use strict";
  var
    grid = $(".grid");
  buildGrid(grid);
});


function buildGrid(grid) {
  "use strict";
  for (var i = 0; i < 16 * 16; i += 1) {
    var newElement = $("<div class='square'></div>");
    newElement.appendTo(grid);
    console.log("added square");
  }
}
