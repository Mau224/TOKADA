'use strict';
let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-open');
    }


    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-open');
    }
};

select();


const inputs = document.querySelectorAll('.swaper');

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', function () {
            if (inputs[i].checked) {
                inputs[i].setAttribute('value', 'да');
            } else {
                inputs[i].setAttribute('value', 'нет');
            }
        })
    }
});

// let removeBtn = document.querySelector('.header__link-action');
// if (window.innerWidth < 870) {
//     removeBtn.classList.remove('js-open-modal');
// } else  {
//     removeBtn.classList.add('js-open-modal');
// }

// // const container = document.querySelector('.container');
//
// inputs.forEach(el => {
//     el.addEventListener('click', () => {
//         // container.textContent = '';
//         let inputCh = document.querySelectorAll('.swaper:checked');
//
//         inputCh.forEach(el_checked => {
//             if (this.checked) {
//                 inputCh.setAttribute('value', 'lf');
//             }
//         });
//     });
// });




!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');


    /* Перебираем массив кнопок */
    modalButtons.forEach(function(item){

        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener('click', function(e) {

            e.preventDefault();

            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach


    closeButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready

let modalZamer = document.querySelector('.header__mob-avatar');
const overlay = document.querySelector('.overlay-menu');
const burger = document.querySelector('.header__burger');
const body = document.querySelector('.body');
const closeModalZamer = document.querySelectorAll('.close_modal_window');
const megaBlock = document.querySelector('.header__mega-menu-block ');
const megaBlockText = document.querySelector('.header__mega-menu-block-text');
const megaBlockLinks = document.querySelector('.header__main-list-hover-links');
const linkPrice = document.querySelector('.what-price');
const modalTel = document.querySelector('.overlay-mob-tel');
const modalTelBtn = document.querySelector('.header__link-call-mob ');

closeModalZamer.forEach(function(item){
    item.addEventListener('click', function (){
        body.style.overflow = 'auto';
        overlay.classList.remove('active');
        burger.classList.remove('active');
        megaBlock.classList.remove('active');
        megaBlockText.classList.remove('active');
        megaBlockLinks.classList.remove('active');
    })
})


if(window.innerWidth < 870) {
    modalZamer.addEventListener('click',function (){
        overlay.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('dis');
        modalTel.classList.remove('active');
        modalTelBtn.classList.remove('active');
    })

    linkPrice.addEventListener('click',function (){
        overlay.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('dis');
        // body.style.overflow = 'auto';
    })
}

(function () {
    const burger = document.querySelector('.header__burger');
    const burgerWrap = document.querySelector('.header__burger-mega-block');
    const tabDis = document.querySelector('.header__link-call-mob');
    const body = document.querySelector('.body');
    const overlay = document.querySelector('.overlay-menu');
    const menuText = document.querySelector('.header__mega-menu-block-text');
    const mainList = document.querySelector('.header__main-list-hover-links');
    const megaList = document.querySelector('.header__mega-menu-block');
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        overlay.classList.toggle('active');
        menuText.classList.toggle('active');
        mainList.classList.toggle('active');
        megaList.classList.toggle('active');
        burgerWrap.classList.toggle('active');
        body.classList.toggle('dis');

        if (burger.classList.contains('active')) {
            body.style.overflow = 'hidden';
            tabDis.addEventListener('click', function (){
                burger.classList.remove('active');
                overlay.classList.remove('active');
            })
        } else {
            body.style.overflow = 'auto';
        }
    });
}());

(function () {
    const burger = document.querySelector('.header__link-call-mob');
    const tabDis = document.querySelector('.header__burger');
    const body = document.querySelector('.body');
    const overlay = document.querySelector('.overlay-mob-tel');
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('dis');

        if (burger.classList.contains('active')) {
            body.style.overflow = 'hidden';
            tabDis.addEventListener('click', function (){
                burger.classList.remove('active');
                overlay.classList.remove('active');
            })
        } else {
            body.style.overflow = 'auto'
        }
    });
}());

(function () {
    const action = document.querySelector('.header__link-action');
    const headercontainer = document.querySelector('.header__container');
    const body = document.querySelector('.body');
    const overlay = document.querySelector('.overlay-menu');
    const burger = document.querySelector('.header__burger');
    action.addEventListener('click', function () {
        action.classList.add('active');
        headercontainer.classList.add('active');
        body.classList.add('dis');
        overlay.classList.remove('active');
        burger.classList.remove('active');
    });
}());

(function () {
    const action = document.querySelector('.header__link-action');
    const headercontainer = document.querySelector('.header__container');
    const closeaction = document.querySelector('.close__action ');
    const body = document.querySelector('.body');
    closeaction.addEventListener('click', function () {
        action.classList.remove('active');
        headercontainer.classList.remove('active');
        body.classList.remove('dis');
    });
}());

//блок окна акций на мобильном
let actionLink = document.querySelector('.header__link-action');

if (window.innerWidth < 870) {
    actionLink.classList.remove('js-open-modal');
} else {
    actionLink.classList.add('js-open-modal');
}

//метрика
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(70714834, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});
