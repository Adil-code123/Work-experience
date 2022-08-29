
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;


nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    console.log('shush')
    fun3 ()
    fun2 ()
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

const txt1 = document.getElementById('lastyeartax')
        const txt2 = document.getElementById('TDS')
        const txt3 = document.getElementById('REMARKS')

        const out = document.getElementById('txt')
        const out1 = document.getElementById('txt1')
        const out2 = document.getElementById('txt2')
        const out3 = document.getElementById('txt3')
        const out4 = document.getElementById('txt4')
        const out5 = document.getElementById('txt5')
        const out6 = document.getElementById('txt6')
        const out7 = document.getElementById('txt7')
        const out8 = document.getElementById('txt8')



const inp1 = document.getElementById('name')
const inp2 = document.getElementById('PAN')
const inp3 = document.getElementById('ADD')
const inp4 = document.getElementById('place')
const inp5 = document.getElementById('PIN')
const inp6 = document.getElementById('emid')


function fun2 () {

  

  var inp1val = inp1.value
  var inp2val = inp2.value
  var inp3val = inp3.value
  var inp4val = inp4.value
  var inp5val = inp5.value
  var inp6val = inp6.value

  var ar = [];
  ar = [...inp1val]
  console.log(ar)
  sessionStorage.setItem("ar", JSON.stringify(ar));
  console.log(inp5val)
  console.log(inp6val)
  console.log(inp4val)
  console.log(inp3val)
  console.log(inp2val)
  console.log(inp1val)

  
  
  sessionStorage.setItem('inp1val',inp1val)
  sessionStorage.setItem('inp2val',inp2val)
  sessionStorage.setItem('inp3val',inp3val)
  sessionStorage.setItem('inp4val',inp4val)
  sessionStorage.setItem('inp5val',inp5val)
  
  

}

function fun3 () {
  
  

  var txt1val = txt1.value
  var txt2val = txt2.value

  console.log(txt1val)

  sessionStorage.setItem('txt1val',txt1val)



  console.log(txt1val)

  if (txt1val === '0' ) {
    Balance = "Enter text in page before"
  }
  else {
    var Balance = txt1val - txt2val

  }
  

  
  var june15 = Balance * 0.15
  var Q1 = txt1val * 0
  var sept15 = (Balance * 0.45) - Q1
  var Q2 = txt1val * 0
  var dec15 = (Balance * 0.75) - Q1 - Q2
  var Q3 = txt1val * 0
  var mar15 = Balance - Q1 - Q2 - Q3
  var Q4 = txt1val * 0

  sessionStorage.setItem('Balance',Balance)

  
  

  console.log (  Balance )
  console.log (  june15)
  console.log (  Q1)
  console.log (  sept15)
  console.log (  Q2)
  console.log (  dec15)
  console.log (  Q3)
  console.log (  mar15) 

  

 
  out.innerHTML = Balance
  out1.innerHTML = june15
  out2.innerHTML = Q1
  out3.innerHTML = sept15
  out4.innerHTML = Q2
  out5.innerHTML = dec15
  out6.innerHTML = Q3
  out7.innerHTML = mar15
  out8.innerHTML =  Q4

  


} 


function relocate() {
  location.href = 'table.html'
  console.log('hello')
  var fav = sessionStorage.getItem('fav')
  console.log(fav)
}

















  