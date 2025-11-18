const mainImage=document.getElementById("main-image");
const images=document.querySelectorAll(".images div img");
const countMinus=document.getElementById("minus");
const countPlus=document.getElementById("plus");
const count=document.querySelector(".count span");
const addToCart=document.getElementById("cart");

images[0].parentElement.style.borderColor="var(--orange)"
images[0].style.opacity="0.3";
let currentImageDisplayed=images[0];

images.forEach(image=>{
    image.addEventListener("click",()=>{
        if(currentImageDisplayed!=image)
        {
            currentImageDisplayed.parentElement.style.borderColor="transparent";
            currentImageDisplayed.style.opacity="1";
            currentImageDisplayed=image;
            image.parentElement.style.borderColor="var(--orange)";
            image.style.opacity="0.3";
            mainImage.src=image.src;
            console.log(mainImage.src)
        }
    });
})

countMinus.addEventListener("click",()=>{
    let intCount=parseInt(count.textContent);
    if(intCount>0)
    {
        intCount--;
        count.textContent=String(intCount);
    }
});

countPlus.addEventListener("click",()=>{
    let intCount=parseInt(count.textContent);
    intCount++;
    count.textContent=String(intCount);
})