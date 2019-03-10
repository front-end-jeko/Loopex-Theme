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

  

    