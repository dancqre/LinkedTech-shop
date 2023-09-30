
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
const buyItemBtns = document.querySelectorAll('.buy__btn')
const shopBacketText = document.querySelector('.shoobacket__text')
const shopBacketBuy = document.querySelector('.shopbacket__buy')
const shopBacketPrice = document.querySelector('.shopbacket__price')
const shopBacketBtn = document.querySelector('.shopbacket__btn')
const shopBacketAfterBuyText = document.querySelector('.shoobacket__text-buy')


shopBacketBtn.addEventListener('click', function(){
	shopBacketArea.innerHTML = '<div class="shoobacket__text-buy ">Thank you for your order :)</div>';
})
let totalShopBacketPrice = 0

buyItemBtns.forEach(function (buyItemBtn) {

  buyItemBtn.addEventListener('click', function (event) {
  
	const clickedItem = this.closest('.buy__item');

	if(shopBacketArea.children.length > 0){
		shopBacketText.classList.add('none')
		shopBacketBuy.classList.remove('none')
	} 
	 const productInfo = {
        imgSrc: clickedItem.querySelector('.buy__item-img').getAttribute('src'),
        title: clickedItem.querySelector('.buy__name').innerText,
        price: clickedItem.querySelector('.price').innerText,
    };

	 const numericPrice = parseFloat(productInfo.price.replace('$', '').trim())
	 totalShopBacketPrice += numericPrice

	 
	const buyContent = 
					`<div class="buy__item-backet resent special">
					<div class="img__item"><img src="${productInfo.imgSrc}" class="buy__item-img zoom" alt=""></div>
					<h4 class="buy__name">${productInfo.title}</h4>
					<div class="price-wrapper__backet">
						<p class="price price-wrapper2">${productInfo.price} </p>
					</div>
				</div>`;
	shopBacketArea.insertAdjacentHTML('beforeend', buyContent)
	shopBacketPrice.innerText = `$ ${totalShopBacketPrice.toFixed(2)}`
	
  });
});
	