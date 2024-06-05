
var tabs = document.querySelectorAll(".tabs_wrap ul li");
var managers = document.querySelectorAll(".manager");
var copywriters = document.querySelectorAll(".copywriter");
var videographers = document.querySelectorAll(".videographer");
var developers = document.querySelectorAll(".developer");
var designers = document.querySelectorAll(".designer");
var contentops = document.querySelectorAll(".contentop");
var all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab)=>{
tab.addEventListener("click", ()=>{
tabs.forEach((tab)=>{
    tab.classList.remove("active");
})
tab.classList.add("active");
var tabval = tab.getAttribute("data-tabs");

all.forEach((item)=>{
    item.style.display = "none";
})

if(tabval == "manager"){
    managers.forEach((manager)=>{
        manager.style.display = "block";
    })
}
else if(tabval == "copywriter"){
    copywriters.forEach((copywriter)=>{
        copywriter.style.display = "block";
    })
}
else if(tabval == "videographer"){
    videographers.forEach((videographer)=>{
        videographer.style.display = "block";
    })
}
else if(tabval == "developer"){
    developers.forEach((developer)=>{
        developer.style.display = "block";
    })
}
else if(tabval == "designer"){
    designers.forEach((designer)=>{
        designer.style.display = "block";
    })
}
else if(tabval == "contentop"){
    contentops.forEach((contentop)=>{
        contentop.style.display = "block";
    })
}
else{
    all.forEach((item)=>{
        item.style.display = "block";
    })
}

})
})
// Wrap the entire script in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const productsPerPage = 4;
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // Function to show the slide with pagination
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.add('hidden');
            if (i >= index && i < index + productsPerPage) {
                slide.classList.remove('hidden');
            }
        });
    }

    // Function to show the next slide
    function showNextSlide() {
        currentIndex = (currentIndex + productsPerPage) % slides.length;
        showSlide(currentIndex);
    }

    // Function to show the previous slide
    function showPrevSlide() {
        currentIndex = (currentIndex - productsPerPage + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Function to start the carousel
    function startCarousel() {
        showSlide(currentIndex); // Show the initial slide
    }

    // Initialize the carousel by calling startCarousel
    startCarousel();

    // Event listeners for next and previous buttons
    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);
});
