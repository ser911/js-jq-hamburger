var hamburger = $("i.fas.fa-bars");
var hamburgerMenu = $(".hamburger-menu");
var exit = $("i.fas.fa-times");

hamburger.click(
function()
{
  hamburgerMenu.fadeIn(1200);
}

);

exit.click(
function()
{
  hamburgerMenu.fadeOut(1200);
}


);
