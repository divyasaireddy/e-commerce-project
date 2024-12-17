function logout() {
    const isLogout = confirm("Are you sure you want to logout?");
    if (isLogout) {
        alert("Succefully logged off")
        window.location.href = "signup.html"
    } else {
        window.location.href = "home.html"
    }

}

//search and filter products
document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase(); 
    const products = document.querySelectorAll('.aside-images .first-image'); 
    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        const productDescription = product.querySelector('p').innerText.toLowerCase(); 
        if (productName.includes(query) || productDescription.includes(query)) {
            product.style.display = 'block'; 
        } else {
            product.style.display = 'none'; 
        }
    });
});


//categorizing the type of product
document.querySelectorAll('.category-section a').forEach(categoryLink => {
    categoryLink.addEventListener('click', function (event) {
        event.preventDefault(); 

        const selectedCategory = this.getAttribute('data-category');
        const products = document.querySelectorAll('.aside-images .first-image');

        products.forEach(product => {
            if (product.getAttribute('data-category') === selectedCategory || selectedCategory === 'all') {
                product.style.display = 'block';
            } else {
                product.style.display = 'none'; 
            }
        });
    });
});

//open of card when we click on it
function openModel(product) {
    const model = document.getElementById('productModel');
    const modelImage = document.getElementById('modelImage');
    const modelTitle = document.getElementById('modelTitle');
    const modelDescription = document.getElementById('modelDescription');
    const modelPrice = document.getElementById('modelPrice');
    const modelRating = document.getElementById('modelRating');

    const imgSrc = product.querySelector('img').src;
    const title = product.querySelector('h3').innerText;
    const description = product.querySelector('p').innerText;
    const price = product.querySelector('.price').innerText;
    const rating = product.querySelector('.rating').innerText;

    modelImage.src = imgSrc;
    modelTitle.innerText = title;
    modelDescription.innerText = description;
    modelPrice.innerText = `${price}`;
    modelRating.innerText = `${rating}`;

    model.style.display = 'flex';
}

function closeModel() {
    const model = document.getElementById('productModel');
    model.style.display = 'none';
}

const products = document.querySelectorAll('.aside-images .first-image');
products.forEach(product => {
    product.addEventListener('click', function () {
        openModel(product);
    });
});




function addToCart() {
    const product = {
        image: document.getElementById('modelImage').src,
        title: document.getElementById('modelTitle').innerText,
        description: document.getElementById('modelDescription').innerText,
        price: document.getElementById('modelPrice').innerText,
        rating: document.getElementById('modelRating').innerText,
        buynow:document.getElementById('buyNowBtn').innerText,
    };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.push(product);
    
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`item is added to the cart`)
    window.location.href = 'home.html';
}

document.getElementById('addToCartBtn').addEventListener('click', addToCart);


