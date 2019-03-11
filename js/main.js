// open all popup by one code
var openPopup = document.querySelectorAll('.open__popup');
openPopup.forEach(function(click){
    click.addEventListener('click', function(e){
        document.querySelectorAll('.loopex__popup-close').forEach(function(mypopup){
            if(click.getAttribute('data-popup') ===  mypopup.getAttribute('data-popup')){
                mypopup.classList.toggle('active');
            }
        });

        e.stopPropagation();
        e.preventDefault();
    });
});


// stoppropagation stop
$('.stopPropagation').click(function(e){
    e.stopPropagation();
});


// stop propagation all popup
document.querySelectorAll('.loopex__popup-container .loopex__popup').forEach(function(popup){
    popup.addEventListener('click', function(e){
        e.stopPropagation();
    });
});


// close popups by x icon
var closePopup = document.querySelectorAll('.popup__close');
closePopup.forEach(function(close){
    close.addEventListener('click', function(){
        this.parentElement.parentElement.classList.remove('active');
    });
});


// close popups by document click
document.addEventListener('click', function(){
    document.querySelectorAll('.loopex__popup-close').forEach(function(pop){
        if(pop.classList.contains('active')){
            pop.classList.remove('active');
        }
    });
});




// popups
var atags = document.querySelectorAll('.atag');
atags.forEach(function(a){
    var dataId = a.getAttribute('data-id');

    a.addEventListener('click', function(){
        document.querySelectorAll('.loopex__popup-container').forEach(function(pop){
            if(pop.classList.contains(dataId) === true){
                var newPopup = pop.classList.add('active');
            } else if (pop.classList.contains('active') === true){
                pop.classList.remove('active');           
            }
        });
    });
});
    
    



// slider
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






// tabs
$(document).ready(function () {
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



// password eye visibility
var eyeIcon = document.querySelectorAll('.password__eye');
eyeIcon.forEach(function(eye){
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





// time
// Set the date we're counting down to
var countDownDate = new Date("jun 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  var mydays = document.querySelector(".timer__number.days").innerHTML = days;
  var myhours = document.querySelector(".timer__number.hours").innerHTML = hours;
  var myminutes = document.querySelector(".timer__number.minutes").innerHTML = minutes;
  var myseconds = document.querySelector(".timer__number.seconds").innerHTML = seconds;


  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".available__time").innerHTML = "EXPIRED";
  }
}, 1000);