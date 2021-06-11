
function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll= function() {myFunction()};
}

const bars =document.querySelector('.bars');
const nav = document.querySelector('.navbar');
console.log(bars);
bars.addEventListener('click',function(){
    if(nav.classList.contains('active')){
        nav.classList.remove('active');
        enableScrolling();
    }
    else{
        nav.classList.add('active');
       
        disableScrolling();
        
    }
 })

 window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".topbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");

  } else {
    navbar.classList.remove("sticky");
  }
}

$('.slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
 
});

$('[name=tabs]').each(function(i,d){
  var p = $(this).prop('checked');
//   console.log(p);
  if(p){
    $('.tabtle').eq(i)
      .addClass('on');
  }    
});  

$('[name=tabs]').on('change', function(){
  var p = $(this).prop('checked');
  
  // $(type).index(this) == nth-of-type
  var i = $('[name=tabs]').index(this);
  
  $('.tabtle').removeClass('on');
  $('.tabtle').eq(i).addClass('on');
});


AOS.init({
  delay : 300,
  once :true,


});

