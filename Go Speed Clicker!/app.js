/*Make a site that tracks how many times the user has clicked anywhere on the page (or a specific button if you prefer) and displays that click count to the user. Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.*/
let currentCount = localStorage.getItem("count")

const btn = document.getElementById("button")

btn.addEventListener('click', function(){
    localStorage.setItem("count", currentCount++)

    btn.textContent = `Click Here: ${currentCount}`
});




