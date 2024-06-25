document.addEventListener("DOMContentLoaded", function() {
    const categoryList = document.querySelector(".category-list");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let scrollAmount = 0;
    const scrollMax = categoryList.scrollWidth - categoryList.clientWidth;
    const scrollStep = categoryList.clientWidth / 4;

    rightArrow.addEventListener("click", function() {
        if (scrollAmount < scrollMax) {
            scrollAmount += scrollStep;
            categoryList.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    });

    leftArrow.addEventListener("click", function() {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            categoryList.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    });
});
