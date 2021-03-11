// DEFINIZIONE VARIABILI IN USO TRAMITE SELEZIONE $
var hamburger = $("i.fas.fa-bars");
var hamburgerMenu = $(".hamburger-menu");
var exit = $("i.fas.fa-times");

// EVENTO APERTURA IN FADE-IN AL CLICK DELL'HAMBURGER-MENU
hamburger.click(
function()
{
  hamburgerMenu.fadeIn(1200);
}

);

// EVENTO CHIUSURA IN FADE-OUT DEL MENU A TENDINA AL CLICK DELLA X
exit.click(
function()
{
  hamburgerMenu.fadeOut(1200);
}


);
