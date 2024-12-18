// function logout() {
//     const isLogout = confirm("Are you sure you want to logout?");
//     if (isLogout) {
//         alert("Succefully logged off")
//         window.location.href = "signup.html"
//     } else {
//         window.location.href = "home.html"
//     }

// }


function logout() {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to log out from your account.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, log out!',
        cancelButtonText: 'No, stay logged in!',
        reverseButtons: true,  // Reverses the order of buttons
        showClass: {
            popup: 'animate__animated animate__fadeInUp animate__slow'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutDown animate__slow'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Successfully logged off, show a success message
            Swal.fire({
                title: 'Logged Off!',
                text: 'You have successfully logged out.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                // Redirect to signup or login page after confirmation
                window.location.href = 'signup.html';
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // User chose to stay logged in, redirect to home page
            Swal.fire('Cancelled', 'You are still logged in.', 'info').then(() => {
                window.location.href = 'home.html';
            });
        }
    });
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


const products = document.querySelectorAll('.aside-images .first-image');
products.forEach(product => {
    product.addEventListener('click', function () {
        openModel(product);
    });
}  );


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




// function addToCart() {
//     const product = {
//         image: document.getElementById('modelImage').src,
//         title: document.getElementById('modelTitle').innerText,
//         description: document.getElementById('modelDescription').innerText,
//         price: document.getElementById('modelPrice').innerText,
//         rating: document.getElementById('modelRating').innerText,
//     };
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
//     cart.push(product);
    
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`item is added to the cart`)
//     window.location.href = 'home.html';
// }

// function addToCart() {
//     const product = {
//         image: document.getElementById('modelImage').src,
//         title: document.getElementById('modelTitle').innerText,
//         description: document.getElementById('modelDescription').innerText,
//         price: document.getElementById('modelPrice').innerText,
//         rating: document.getElementById('modelRating').innerText,
//     };

//     // Retrieve the cart from localStorage, or initialize an empty array if not found
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Add the new product to the cart
//     cart.push(product);

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));
//     Swal.fire({
//         title: 'Item Added!',
//         text: 'Your item has been successfully added to the cart.',
//         icon: 'success',
//         confirmButtonText: 'OK',
//         showClass: {
//             popup: 'animate__animated animate__fadeInUp animate__fast'
//         },
//         hideClass: {
//             popup: 'animate__animated animate__fadeOutDown animate__fast'
//         }
//     }).then(() => {
//         window.location.href = 'home.html';
//     });
// }


function updateCartCount() {
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartCount = document.getElementById('cartCount'); 

    cartCount.textContent = `(${cart.length})`;
}

function addToCart() {
    const product = {
        image: document.getElementById('modelImage').src,
        title: document.getElementById('modelTitle').innerText,
        description: document.getElementById('modelDescription').innerText,
        price: document.getElementById('modelPrice').innerText,
        rating: document.getElementById('modelRating').innerText,
    };

  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));


    updateCartCount();

    Swal.fire({
        title: "Item Added to Cart",
        text: "Your item has been added to the cart.",
        icon: "success",
        confirmButtonText: "OK"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "home.html";
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});





document.getElementById('addToCartBtn').addEventListener('click', addToCart);


