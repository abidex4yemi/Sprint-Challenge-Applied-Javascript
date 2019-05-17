class Carousel {
	constructor(carouselImgs) {
		this.carouselImgs = carouselImgs;
		this.currentIndex = 0;
		this.leftBtn = document.querySelector('.left-button');
		this.rightBtn = document.querySelector('.right-button');

		this.leftBtn.addEventListener('click', () => this.changeImg());
		this.rightBtn.addEventListener('click', () => this.changeImg());
	}

	changeImg() {
		this.currentIndex++;
		let next;

		if (this.currentIndex < this.carouselImgs.length) {
			this.carouselImgs.forEach(carouselImg => {
				carouselImg.classList.remove('active');
			});

			next = this.carouselImgs[this.currentIndex];
			next.classList.add('active');
		} else {
			this.currentIndex = 0;
			this.carouselImgs.forEach(carouselImg => {
				carouselImg.classList.remove('active');
			});

			next = this.carouselImgs[this.currentIndex];
			next.classList.add('active');
		}
	}
}

const carouselImg = Array.from(document.querySelectorAll('.carousel img'));
const instance = new Carousel(carouselImg);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
