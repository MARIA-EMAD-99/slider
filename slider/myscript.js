function chanagewidg(event){
    var myImg = event.target;
   myImg.style.width = "105%";
}

function returnwidth(event){
    var myImg = event.target;
   myImg.style.width = "100%";
}




let slideindex = [1, 1];
let slideId = ["section1"];
showSlides(1, 0);

function plusSlides(n, no) {
  showSlides(slideindex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]); // Fix: use slideId[no]
  let slidesLength = x.length; // Store the length for better performance

  if (n > slidesLength) {
    slideindex[no] = 1;
  }    
  if (n < 1) {
    slideindex[no] = slidesLength;
  }
  for (i = 0; i < slidesLength; i++) {
    x[i].style.display = "none";  
  }
  x[slideindex[no] - 1].style.display = "block";  
}




