let totalcount = 0;
let countEl = document.getElementById("clicked-on-price");
let addedToCartEl = document.getElementById("added-to-cart");
let listOfItems = document.getElementById("list-of-items");
let cartHeadingElText;
let TotalPrice = 0;
let TotalPriceDisplay;

function showCartAndIncrement(num) {
  var cart = document.getElementById("cart");
  cartHeadingElText = document.getElementById("item" + num).innerText;
  console.log("Checking:" + cartHeadingElText);
  cart.style.display = "block";
  totalcount += 1;
  console.log(totalcount);
  let priceid = "price" + num;
  let itemElCost = document.getElementById(priceid).innerText;
  itemElCost = itemElCost.replace(/\$/g, "");
  console.log(itemElCost);
  itemElCost = parseInt(itemElCost);
  let itemElCost1 = 0;
  itemElCost1 += itemElCost;
  console.log("cost:" + itemElCost1);
  appendItemToShoppingListEl(itemElCost1, num);
}

function appendItemToShoppingListEl(itemPrice, num) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<div class="x-container"><span onclick="handleCancel(this, ${itemPrice})" class="x-mark">&#10006</span></div>${cartHeadingElText}: ${itemPrice}`;
  listItem.id = `item${num}`;
  listOfItems.appendChild(listItem);
  displayTotalPrice(itemPrice);
}

function handleCancel(element, itemPrice) {
  const listItem = element.closest("li");
  const canceledItemId = listItem.id;
  console.log("Canceled item id:", canceledItemId);
  listOfItems.removeChild(listItem);
  displayTotalPrice(-itemPrice);
}

function displayTotalPrice(itemPrice) {
  TotalPrice += itemPrice;
  console.log("Total price:", TotalPrice);
  countEl.innerText = TotalPrice;
}

function hideCart() {
    cart.style.display = "none";
}






const menuItems = document.querySelectorAll('.menu li a');


menuItems.forEach(item => {
  item.addEventListener('click', () => {
    
    menuItems.forEach(item => {
      item.parentNode.classList.remove('active');
    });

    
    item.parentNode.classList.add('active');
  });
});


menuItems[0].parentNode.classList.add('active');

