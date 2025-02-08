 const b = document.querySelector("body");

 window.addEventListener('resize', function() {
	if (window.innerWidth <= 2240) {
		b.classList.add('body__scroll');
	} else {
		b.classList.remove('body__scroll');
	}
});


const textElement = document.querySelector("body");
textElement.style.transition = "opacity 2s";
textElement.style.opacity = 0.3;

window.addEventListener("load", function() {
    textElement.style.opacity = 1;
});