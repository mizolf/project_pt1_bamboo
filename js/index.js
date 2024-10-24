document.addEventListener("DOMContentLoaded",()=>{
    const slideButtons = document.querySelectorAll(".slide-button");
    const imageList=document.querySelector(".image-list");
    const images=document.querySelectorAll(".image-item");

    const imageWidth = images[0].clientWidth;
    const gap = parseFloat(getComputedStyle(imageList).gap);
    const scrollStep=imageWidth+gap;

    slideButtons.forEach(button => {
        button.addEventListener("click", ()=>{
            const direction = button.id === "previous-slide" ? -1 : 1;
            const scrollAmount=  scrollStep*direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });

    const centerImageIndex=2;
    const scrollPosition = (imageWidth + gap) * centerImageIndex - (imageList.clientWidth / 2) + (imageWidth / 2);
    imageList.scrollLeft=scrollPosition;
});