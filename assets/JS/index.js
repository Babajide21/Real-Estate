const headtext = document.querySelector(".headtext");
const links = document.querySelector("#links")
// const headerHeight = headtext.offsetHeight;
let lastscroll = window.scrollY
window.addEventListener("scroll", function(){
  let currentscroll = window.scrollY
  if (currentscroll > lastscroll) {
    headtext.classList.add("hidden")
  }else if (currentscroll < lastscroll) {
    headtext.classList.remove("hidden")
  }
  if (currentscroll > 50) {
    headtext.style.background = "rgb(24, 150, 150)"
  }else{
    headtext.style.background ="none"
  }
  lastscroll = currentscroll
})
const swiper = new Swiper(".property-carousel", {
            loop: true,
            speed: 2000,
            spaceBetween: 20,
            autoplay: {
                delay: 10,
                disableOnInteraction: false,
            },
            // freeMode: {
            //     enabled: true,
            //     momentum: false,
            // },
            slidesPerView: "auto",
            grabCursor: true,
            // navigation: {
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            // },
});


const swiper2 = new Swiper(".review-carousel", {
    loop: true,
    speed: 3000,
    spaceBetween: 20,
    autoplay: {
      delay: 300,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    grabCursor: true,
    // breakpoints: {
    //   640: { slidesPerView: 1.2 },
    //   768: { slidesPerView: 2 },
    //   1024: { slidesPerView: 3 },
    // }
 });


// const teamMembers = [
// 	{ name: "Emily Kim", role: "Founder" },
// 	{ name: "Michael Steward", role: "Creative Director" },
// 	{ name: "Emma Rodriguez", role: "Lead Developer" },
// 	{ name: "Julia Gimmel", role: "UX Designer" },
// 	{ name: "Lisa Anderson", role: "Marketing Manager" },
// 	{ name: "James Wilson", role: "Product Manager" }
// ];

// const cards = document.querySelectorAll(".card");
// const dots = document.querySelectorAll(".dot");
// const memberName = document.querySelector(".member-name");
// const memberRole = document.querySelector(".member-role");
// const leftArrow = document.querySelector(".nav-arrow.left");
// const rightArrow = document.querySelector(".nav-arrow.right");
// let currentIndex = 0;
// let isAnimating = false;

// function updateCarousel(newIndex) {
// 	if (isAnimating) return;
// 	isAnimating = true;

// 	currentIndex = (newIndex + cards.length) % cards.length;

// 	cards.forEach((card, i) => {
// 		const offset = (i - currentIndex + cards.length) % cards.length;

// 		card.classList.remove(
// 			"center",
// 			"left-1",
// 			"left-2",
// 			"right-1",
// 			"right-2",
// 			"hidden"
// 		);

// 		if (offset === 0) {
// 			card.classList.add("center");
// 		} else if (offset === 1) {
// 			card.classList.add("right-1");
// 		} else if (offset === 2) {
// 			card.classList.add("right-2");
// 		} else if (offset === cards.length - 1) {
// 			card.classList.add("left-1");
// 		} else if (offset === cards.length - 2) {
// 			card.classList.add("left-2");
// 		} else {
// 			card.classList.add("hidden");
// 		}
// 	});

// 	dots.forEach((dot, i) => {
// 		dot.classList.toggle("active", i === currentIndex);
// 	});

// 	memberName.style.opacity = "0";
// 	memberRole.style.opacity = "0";

// 	setTimeout(() => {
// 		memberName.textContent = teamMembers[currentIndex].name;
// 		memberRole.textContent = teamMembers[currentIndex].role;
// 		memberName.style.opacity = "1";
// 		memberRole.style.opacity = "1";
// 	}, 300);

// 	setTimeout(() => {
// 		isAnimating = false;
// 	}, 800);
// }

// leftArrow.addEventListener("click", () => {
// 	updateCarousel(currentIndex - 1);
// });

// rightArrow.addEventListener("click", () => {
// 	updateCarousel(currentIndex + 1);
// });

// dots.forEach((dot, i) => {
// 	dot.addEventListener("click", () => {
// 		updateCarousel(i);
// 	});
// });

// cards.forEach((card, i) => {
// 	card.addEventListener("click", () => {
// 		updateCarousel(i);
// 	});
// });

// document.addEventListener("keydown", (e) => {
// 	if (e.key === "ArrowLeft") {
// 		updateCarousel(currentIndex - 1);
// 	} else if (e.key === "ArrowRight") {
// 		updateCarousel(currentIndex + 1);
// 	}
// });

// let touchStartX = 0;
// let touchEndX = 0;

// document.addEventListener("touchstart", (e) => {
// 	touchStartX = e.changedTouches[0].screenX;
// });

// document.addEventListener("touchend", (e) => {
// 	touchEndX = e.changedTouches[0].screenX;
// 	handleSwipe();
// });

// function handleSwipe() {
// 	const swipeThreshold = 50;
// 	const diff = touchStartX - touchEndX;

// 	if (Math.abs(diff) > swipeThreshold) {
// 		if (diff > 0) {
// 			updateCarousel(currentIndex + 1);
// 		} else {
// 			updateCarousel(currentIndex - 1);
// 		}
// 	}
// }

// updateCarousel(0);