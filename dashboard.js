const sideMenu = document.querySelector(".sidebar2");
const menuBtn = document.getElementById("menu-bnt");
const closeBtn = document.querySelector("#close-btn2");
const themeToggler = document.querySelector(".theme-toggle");

menuBtn.addEventListener('click', () => {
	sideMenu.style.display = "block";
})

closeBtn.addEventListener('click', () =>{
	sideMenu.style.display = "none";
});
		
themeToggler.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme-variables');
	themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
	themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
