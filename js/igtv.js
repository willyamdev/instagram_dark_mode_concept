let postsContainer = document.querySelector("#posts-container");

let igtvState = true;
let igtvButton = document.querySelector(".bg-igtv-user");
let igtvContainer = document.querySelector(".igtv-container");
let contentContainer = document.querySelector(".content-page");
// let categoryContainer = document.querySelector("#category-container");

igtvButton.addEventListener('click', (e) => {
    if (igtvState) {
        igtvContainer.classList.remove("d-lg-flex")
        // igtvContainer.className = "primary-color expand-height igtv-container d-none";
        contentContainer.className = "col-lg-9 secundary-color expand-height content-page";

        postsContainer.classList.remove("posts-container-grid-not-expanded")
        postsContainer.classList.add("posts-container-grid-expanded")

        // let newCategory = document.createElement("div");
        // newCategory.className = "category-cell";
        
        // let newCategory2 = document.createElement("div");
        // newCategory2.className = "category-cell";
        
        // let nameCategory = document.createElement("h5");
        // nameCategory.innerHTML = "Money";

        // let nameCategory2 = document.createElement("h5");
        // nameCategory2.innerHTML = "City";
        
        // newCategory.appendChild(nameCategory);
        // newCategory2.appendChild(nameCategory2);

        // categoryContainer.appendChild(newCategory);
        // categoryContainer.appendChild(newCategory2);

    } else {
        igtvContainer.classList.add("d-lg-flex");
        // igtvContainer.className = "col-lg-3 d-none d-md-flex primary-color expand-height igtv-container";
        contentContainer.className = "col-lg-6 secundary-color expand-height content-page";

        postsContainer.classList.remove("posts-container-grid-expanded")
        postsContainer.classList.add("posts-container-grid-not-expanded")

        // categoryContainer.removeChild(categoryContainer.lastChild);
        // categoryContainer.removeChild(categoryContainer.lastChild);

        // storiesContainer.removeChild(storiesContainer.lastChild);
        // storiesContainer.removeChild(storiesContainer.children[3]);
    }

    igtvState = !igtvState;
});