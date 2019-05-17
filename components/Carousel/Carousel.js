/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
	constructor(carousel) {
		this.carousel = carousel;
		this.images = this.carousel.querySelectorAll('img');
		this.leftBtn = this.carousel.querySelector('.left-button');
		this.rightBtn = this.carousel.querySelector('.right-button');
		this.currentIndex = 0;
		this.images[this.currentIndex].classList.add('active');

		this.leftBtn.addEventListener('click', () => this.slideLeft());
		this.rightBtn.addEventListener('click', () => this.slideRight());
	}

	animateEffect() {
		TweenMax.from('.slide', 1, { x: '1184px' });
	}

	slideLeft() {
		this.currentIndex--;
		if (this.currentIndex <= this.images.length - 1 && this.currentIndex !== -1) {
			this.images.forEach(image => {
				image.classList.remove('active');
			});
			this.animateEffect();
			this.images[this.currentIndex].classList.add('active');
		} else {
			this.currentIndex = this.images.length - 1;
			this.images.forEach(image => {
				image.classList.remove('active');
			});

			this.animateEffect();
			this.images[this.currentIndex].classList.add('active');
		}
	}

	slideRight() {
		this.currentIndex++;
		if (this.currentIndex <= this.images.length - 1) {
			this.images.forEach(image => {
				image.classList.remove('active');
			});
			this.animateEffect();
			this.images[this.currentIndex].classList.add('active');
		} else {
			this.images.forEach(image => {
				image.classList.remove('active');
			});
			this.currentIndex = 0;

			this.animateEffect();
			this.images[this.currentIndex].classList.add('active');
		}
	}
}

const carousel = document.querySelector('.carousel');
new Carousel(carousel);
