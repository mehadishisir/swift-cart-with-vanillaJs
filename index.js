const loadProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      allProducts = data;
      trendingDisplay(data.slice(0, 3));
    });
};
const trendingDisplay = (products) => {
  console.log(products);
  const trendingContainer = document.getElementById("trending-container");
  trendingContainer.innerHTML = "";
  //   const threeData = products.slice(0, 3);
  //   console.log(threeData);
  for (let data of products) {
    const dataDiv = document.createElement("div");

    dataDiv.className =
      "bg-white shadow-lg rounded-xl p-5 flex flex-col hover:shadow-2xl transition";

    dataDiv.innerHTML = `
    <!-- Image -->
    <div class="flex justify-center mb-4">
      <img src="${data.image}" 
           alt="${data.title}" 
           class="h-40 object-contain">
    </div>

    <!-- Category -->
    <p class="text-xs text-gray-500 uppercase mb-1 bg-blue-200 rounded-full w-3/10 p-2">
      ${data.category}
    </p>

    <!-- Title -->
    <h3 class="font-semibold text-lg mb-2">
      ${data.title}
    </h3>

    <!-- Description -->
    <p class="text-sm text-gray-600 mb-3">
      ${data.description.substring(0, 100)}...
    </p>

    <!-- Price + Rating -->
    <div class="flex justify-between items-center mt-auto">
      <span class="text-blue-600 font-bold text-lg">
        $${data.price}
      </span>
    <div class="flex items-center gap-1 text-sm text-yellow-500">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" viewBox="0 0 24 24">
    <path d="M12 .587l3.668 7.431L24 9.588l-6 5.847 1.417 8.249L12 18.896 4.583 23.684 6 15.435 0 9.588l8.332-1.57L12 .587z"/>
  </svg>

  <!-- Rating text -->
  <span>${data.rating.rate} (${data.rating.count})</span>
</div>
    </div>

    <!-- Button -->
 <div class='flex justify-between'>   <button class="bg-white text-black btn btn-sm btn-primary mt-4">
  Details
</button>

    <button class="btn btn-sm btn-primary mt-4">
      Add to Cart
    </button></div>
  `;

    trendingContainer.append(dataDiv);
  }
};
const showAllProducts = () => {
  trendingDisplay(allProducts);
};

loadProducts();
