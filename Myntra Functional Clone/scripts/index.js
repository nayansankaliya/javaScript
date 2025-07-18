let itemsContainerElement = document.querySelector('.items-container');

let innerHTML = '';
items.forEach(item => {
    innerHTML += `
            <div class="item-container">
                <img class="item-img" src="${item.image}" alt="item-img">
                <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
                <div class="company-name"> ${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price"> Rs.${item.current_price}</span>
                    <span class="original-price">Rs.${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag">Add to Bag</button>
            </div>`;
});

itemsContainerElement.innerHTML = innerHTML;