const productCardTemplate = (item) => {
  return ` <article class="product-card--listing">
          <header>
            <img
              class="product-card_media"
              src="${item.thumbnail}"
              alt="${item.title}"
            />
            <h3 class="product-card_title">${item.title}</h3>
          </header>
          <main class="product-card--listing_main">
            <ul class="product-card--listing_details-list">
              <li class="product-card--listing_details-list_price">
                Price: <span class="priceReal">${item.price} $</span>
              </li>
            </ul>
            <p class="description">
              ${item.description}
            </p>
          </main>
          <footer class="product-card--listing_footer">
            <form class="product-card--listing_form">
              <label>
                Units:
                <input type="number" min="1" max="5" value="1" />
              </label>

              <div class="product-card--listing_form_links">
                <button
                  type="submit"
                  class="product-card--listing_footer_submit"
                >
                  Buy
                </button>
                <a href="#" class="product-card--listing_footer_details"
                  >Details</a
                >
              </div>
            </form>
          </footer>
        </article>`;
};

const fetchProductsListing = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const response = await data.json();
  const list = response;
  const productListingContainer = document.querySelector(
    ".product-listing-container"
  );

  productListingContainer.innerHTML = "";

  productListingContainer.innerHTML = list.products
    .map(productCardTemplate)
    .join("");
};

fetchProductsListing();
