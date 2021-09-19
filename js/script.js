$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight: true,
        speed:900,
        // swipe:false, 
    });
});

$("#TestInput").keypress(function (e) { // override keypress of " or '
    if (e.which == 13 || e.which == 34 || e.which == 39) {
        return false;
    }
})
.bind("paste", function (e) {// forbid paste
    e.preventDefault();
})

.change(function(){
 var value = $(this).val();
    //and then I use this value for my operations
});


let iconMenu = document.querySelector('.icon');
let menuBody = document.querySelector('.nav');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		// document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}
