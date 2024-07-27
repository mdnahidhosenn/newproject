
displayItemOnHomePage()

function displayItemOnHomePage() {
  let itemsContainerElement = document.querySelector('.pro-container');

  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';

  items.forEach(item => {
    innerHtml += ` <div class="pro">
        <img src="${item.image}" alt="">
        <div class="des">
          <span>${item.company}</span>
          <h5>${item.item_name}</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
      </div>
    </div>
`;
  });

  itemsContainerElement.innerHTML = innerHtml;
}


displayItemOnHomePage2();

function displayItemOnHomePage2() {
  let itemsContainerElement = document.querySelector('.pro-container2');

  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';

  NewArrivals.forEach(item => {
    innerHtml += ` <div class="pro">
        <img src="${item.image}" alt="">
        <div class="des">
          <span>${item.company}</span>
          <h5>${item.item_name}</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
      </div>
    </div>
`;
  });

  itemsContainerElement.innerHTML = innerHtml;
};
let bar = document.getElementById('bar');
let nav = document.getElementById(' navbar');

// if (bar) {
//   bar.addEventListener('click',  ()=> {
//     nav.classList.add('active');
//   })
// }

bar.addEventListener('click', function () {
 nav.classList.add('active')
})

