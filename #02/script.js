let btn = document.querySelector("#burger");
let divs = document.querySelectorAll(".line.no-animation");

btn.addEventListener("click", () => {
	divs.forEach((div) => {
		div.classList.remove("no-animation");
		div.classList.toggle("animation");
	});
});
