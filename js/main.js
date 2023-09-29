
const filterBox = document.querySelectorAll('.buy__item');
const list  = document.querySelectorAll('.filter-li');


list.forEach((li) => {
  li.addEventListener('click', function () {
    list.forEach((btn) => {
      btn.classList.remove('activated');
    });
    this.classList.add('activated');
  });
});
 
document.querySelector('.filter').addEventListener('click', event => {
	if (event.target.tagName !== 'LI') return false;
	let filterClass = event.target.dataset['f'];
	
	filterBox.forEach( elem => {
		elem.classList.remove('hide');
		if (!elem.classList.contains(filterClass)){
			elem.classList.add("hide");

		}
	})

});


//Shop backet

const shopBacket = document.querySelector('.shop__backet')
const shopBacketArea = document.querySelector('.shopbacket__area')

shopBacket.addEventListener('click', function(){
	shopBacketArea.classList.toggle('activatedB');
})

//Buy function

const buyItem = document.querySelectorAll('.buy__item')
const buyItemBtn = document.querySelectorAll('.buy__btn')

buyItemBtn.addEventListener('click', function(){
	
	const buyContent = `<div class="buy__item resent special">
					<p class="buy__item-about">Get up to 30% off Today Only!</p>
					<div class="img__item"><img src="./img/images/buy2.png" class="buy__item-img zoom" alt=""></div>
					<ul class="hover__nav none">
						<li class="hover__nav-img"><img src="./img/icons/buy1logo.svg" alt=""></li>
						<li class="hover__nav-img"><img src="./img/icons/buy2logo.svg" alt=""></li>
						<li class="hover__nav-img"><img src="./img/icons/buy3logo.svg" alt=""></li>
						<li class="hover__nav-img"><img src="./img/icons/buy4logo.svg" alt=""></li>
					</ul>
					<h4 class="buy__name">Black iPhone Speaker</h4>
					<div class="price-wrapper">
						<p class="price price-wrapper2">$ 219.99</p>
						<p class="price closed">$ 219.99</p>
					</div>
					<div class="stars">
						<img src="./img/icons/stars.svg" alt="">
						<button class="buy__btn">buy</button>
					</div>
				</div>`
})
