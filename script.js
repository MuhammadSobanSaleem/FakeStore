fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('products-container');

    data.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.image}" alt="${product.title}" width="100">
        <p>${product.price} USD</p>
      `;

      container.appendChild(productCard);
    });
  });
