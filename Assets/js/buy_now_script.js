// KULANG PA NG JS FOR ADDING CART //


// CHANIA //
// PRODUCTS ===============================================================================
// Select filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".products-container .product");

// Define the filterCards function
const filterCards = e => {
    // Remove the "active" class from the previously active button
    document.querySelector(".filter_buttons button.active").classList.remove("active");
    // Add the "active" class to the clicked button
    e.target.classList.add("active");

    // Get the category name to filter
    const categoryName = e.target.dataset.name;

    // Iterate over each filterable card
    filterableCards.forEach(product => {
        const productCategories = product.dataset.name.split(", "); // Split categories by comma and space
        // Check if the product belongs to the selected category
        if (productCategories.includes(categoryName)) {
            product.classList.remove("hide");
        } else {
            product.classList.add("hide");
        }
    });
};

// By default, make the first button active and show its corresponding cards
filterButtons[0].classList.add("active");

// Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));

let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .product").forEach(product=>{
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute("data-name");
        previewBox.forEach(preview =>{
            let target = preview.getAttribute("data-target");
            if(name == target){
                preview.classList.add("active");
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector(".fa-times").onclick = () =>{
        close.classList.remove("active");
        previewContainer.style.display = 'none';
    }
})
