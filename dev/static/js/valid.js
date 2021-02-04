let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let selector2 = document.querySelector('input[type="tel"]');

selector2.addEventListener('input', function(){
  console.log(selector2.value)


  const re = /^\d*(\.\d+)?$/

  console.log(selector2.value.match(/[0-9]/g).length)


  console.log(selector2.value.replace(/[0-9]/g, "0"));

});


let validEmail = document.querySelectorAll('input[type="email"]');

let im2 = new Inputmask("*{3,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{3,20}[.*{2,6}][.*{1,2}].*{2,20}[.*{2,6}][.*{1,2}]");
im2.mask(validEmail);

let validEmail2 = document.querySelector('input[type="email"]');

validEmail2.addEventListener('input', function(){
  console.log(selector2.value)


  const re2 = /^\d*(\.\d+)?$/

  console.log(validEmail2.value.match(/[0-9]/g).length)


  console.log(validEmail2.value.replace(/[0-9]/g, "0"));
});


(function (){

//корректировки для спойлера в услугах

  let plusService = document.querySelector('.service__plus-open');
  let linkServie = document.querySelector('.service__item-lin-title');
  plusService.addEventListener('click', function () {
    linkServie.classList.toggle('active');
  })
})

