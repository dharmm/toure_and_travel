// let navbar = document.querySelector('.header .flex .navbar');
// document.querySelector('#menu-btn').onclick = ()=>{
//     navbar.classList.toggle('active');
// }
// window.onscroll=()=>{
//     navbar.classList.remove('active');
// }
// document.querySelectorAll('input[type="number"]'.fonrEach(inputNumber => {
//     inputNumber.oninput = () =>{
//         if(inputNumber.value.lenght > inputNumber.maxLenght) inputNumber.value 
//         = inputNumber.value.slice(0,inputNumber.maxLenght);
//     };
// }));


let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

AOS.init({
   duration: 400,
   delay: 200,
});