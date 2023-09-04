var ColorPicked = "lightcoral";

function change_color(currentsquare) {
  currentsquare.style.backgroundColor = ColorPicked;
}

function change_picked_color(color) {
  ColorPicked = color;
}

function Reset() {
    var ColorDivs = document.getElementsByClassName("Color_grid_item");
    for (var i = 0; i < ColorDivs.length; i++) {
      ColorDivs[i].style.backgroundColor = "antiquewhite";
    }
  }