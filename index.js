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
    <p class="text-xs text-gray-500 uppercase mb-1 bg-blue-200 rounded-full w-2/10 p-1">
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
      <span class="text-yellow-500 text-sm">
         ${data.rating.rate} (${data.rating.count})
      </span>
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
