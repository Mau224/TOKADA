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
        this.parentElement.classList.toggle('is-active');
    }


    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};

select();



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


(function () {
    const burger = document.querySelector('.header__burger');
    const body = document.querySelector('.body');
    const overlay = document.querySelector('.overlay-menu');
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('dis');
    });
}());

(function () {
    const burger = document.querySelector('.header__link-call-mob');
    const body = document.querySelector('.body');
    const overlay = document.querySelector('.overlay-mob-tel');
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('dis');
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