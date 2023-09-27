
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
