import '../fonts/fonts.scss';
import '../scss/style.scss';
import $ from 'jquery';


// open all popup by one code
let openPopup = document.querySelectorAll('.open__popup');
openPopup.forEach(click => {
    click.addEventListener('click', e => {
        document.querySelectorAll('.loopex__popup-close').forEach(mypopup => {
            if(click.getAttribute('data-popup') ===  mypopup.getAttribute('data-popup')){
                mypopup.classList.toggle('active');
            }
        });

        e.stopPropagation();
        e.preventDefault();
    });
});



// close popup by esc 
let popups = document.querySelectorAll('.loopex__popup-close');
popups.forEach(popup => {
    document.addEventListener('keydown', e => {
        if (e.keyCode == 27 || e.which == 27) {
            popup.classList.remove('active');
        }
    });
});



// stoppropagation stop
$('.stopPropagation').click(e => {
    e.stopPropagation();
});

$(window).on('click', () => {
    $('.xlp__window').removeClass('active');
    $('.header__li').removeClass('active');
});


// stop propagation all popup
document.querySelectorAll('.loopex__popup').forEach(popup => {
    popup.addEventListener('click', e => {
        e.stopPropagation();
    });
});


// close popups by x icon
let closePopup = document.querySelectorAll('.loopex__popup-close');
closePopup.forEach(close => {
    close.addEventListener('click', function() {
        this.parentElement.parentElement.classList.remove('active');
    });
});


// close popups by document click
document.addEventListener('click', e => {
    document.querySelectorAll('.loopex__popup-close').forEach(pop => {
        if(pop.classList.contains('active')){
            pop.classList.remove('active');
        } 
    });
});






// close dropdown contents by click document
document.addEventListener('click', e =>{
    document.querySelectorAll('.dropdown__close').forEach(dropdown => {

        let previous = dropdown.previousElementSibling.parentElement;

        if(previous.classList.contains('active') === true){
            previous.classList.remove('active');         
        }
    });
});





// popups
let atags = document.querySelectorAll('.atag');
atags.forEach(a => {
    var dataId = a.getAttribute('data-id');

    a.addEventListener('click', () => {
        document.querySelectorAll('.loopex__popup-container').forEach(pop => {
            if(pop.classList.contains(dataId) === true){
                pop.classList.add('active');
            } else if (pop.classList.contains('active') === true){
                pop.classList.remove('active');           
            }
        });
    });
});
    

// tabs
$(function () {
    $('.marketplace__body').hide();
    
    $('.marketplace__body:first').show();
    
    $('.marketplace__li:first').addClass('active');
    
    $('.marketplace__li').click(function () {
    
        $('.marketplace__li').removeClass('active');
    
        $(this).addClass('active');
    
        var currentTab = $(this).attr('href');
    
        $('.marketplace__body').hide();
    
        $(currentTab).show();
    
        return false;
    });
});


$(function () {
    $('.about__loopex-left, .tabparent__child').hide();
    
    $('.about__loopex-left:first, .tabparent__child:first').show();
    
    $('.about__li:first, .loopex__tablink:first').addClass('active');
    
    $('.about__li, .loopex__tablink').click(function () {
    
        $('.about__li, .loopex__tablink').removeClass('active');
    
        $(this).addClass('active');
    
        var currentTab = $(this).attr('href');
    
        $('.about__loopex-left, .tabparent__child').hide();
    
        $(currentTab).show();
    
        return false;
    });
});




// password eye visibility
let eyeIcon = document.querySelectorAll('.password__eye');
eyeIcon.forEach(eye => {
    eye.addEventListener('click', showpass);

    function showpass(){
        eye.classList.toggle('show');

        if(eye.classList.contains('show') == true){
            var input = eye.previousElementSibling;
            input.type = 'text';
        
        } else {
            var input = eye.previousElementSibling;
            input.type = 'password';
        }
    }
});





// dropdown menus show and hide
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(drop =>{

    drop.addEventListener('click', e => {
        drop.classList.toggle('active');
      
        if(drop.classList.contains('active') == true) {
            
            for(var i = 0; i < dropdowns.length; i++){
                dropdowns[i].classList.remove('active');
            }
            
            drop.classList.toggle('active'); 
        }
        e.stopPropagation();
    });
});









// countdown

// Set the date we're counting down to
let countDownDate = new Date("oct 5, 2020 15:37:25").getTime();

  // Update the count down every 1 second
  let x = setInterval(() => {

    // Get todays date and time
    let now = new Date().getTime();
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    let mydays = document.querySelector(".timer__number.days").innerHTML = days;
    let myhours = document.querySelector(".timer__number.hours").innerHTML = hours;
    let myminutes = document.querySelector(".timer__number.minutes").innerHTML = minutes;
    let myseconds = document.querySelector(".timer__number.seconds").innerHTML = seconds;


    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".available__time").innerHTML = "EXPIRED";
    }
  }, 1000);






//   slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$('#nextsliderbtn').click(() => plusSlides(1));
$('#prevsliderbtn').click(() => plusSlides(-1));

var dots = $('.sliderDots');

$(dots[0]).click(() => currentSlide(1));
$(dots[1]).click(() => currentSlide(2));
$(dots[2]).click(() => currentSlide(3));
$(dots[3]).click(() => currentSlide(4));