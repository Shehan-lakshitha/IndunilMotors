//contact us popup window
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');


window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block"
    },3000)
    
}

close.addEventListener('click', () =>{
    popup.style.display = "none";
})

//image slider
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

//manual navigation
var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) =>{
            btn.classList.remove('active');
        });
    });


    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn,i) =>{
    btn.addEventListener("click",() =>{
        manualNav(i);
        currentSlide = i;
    });
});

//for autoplay slider
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeslide) => {
                activeslide.classList.remove('active');
                
            });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;
        
        if(slides.length == 1){
            i = 0;
        }
        if(i >= slides.length){
            return;
        }
        repeater();
        },10000);
    }
    repeater();
}
repeat();





















































