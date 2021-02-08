

var callname = $('#call__form-name');
var callphone = document.getElementById('call__form-phone');

$('.call-form-btn').on('click', function(e){
    if(callname.val() != '' && callphone.inputmask.unmaskedvalue() != ''){
        e.preventDefault();
        sendCallForm();
        $('.modal-check').addClass('active');
        return false
    }
});


function sendCallForm(){
    var callnameVal = callname.val();
    var callphoneVal = callphone.inputmask.unmaskedvalue();
    $.ajax({
        url: "/phpexport/callexport.php",
        method: "POST",
        data: {
            callname: callnameVal,
            callphone: callphoneVal
        }
    });
};

var furniturephone = document.getElementById('mob');

$('.time__sub-btn').on('click', function(e){
    if(furniturephone.inputmask.unmaskedvalue() != ''){
        e.preventDefault();
        sendFurnitureForm();
        $('.modal-check').addClass('active');
        return false
    }
    
});

function sendFurnitureForm(){
    
    var furniturephoneVal = furniturephone.inputmask.unmaskedvalue();
    $.ajax({
        url: "/phpexport/furnitureexport.php",
        method: "POST",
        data: {
            furniturephone: furniturephoneVal
        }
    });
};


$('.type-radio').on('click', function(){
    $(this).parents('.calc__row-wrap').attr('value', $(this).text()) 
});
$('.select__item').on('click', function(){
    $(this).parents('.select__body').attr('value', $(this).text()) 
});
$('.window-radio').on('click', function(){
    $(this).parents('.calc__second-wrap').attr('value', $(this).find('p').text()) 
});
$('.pane-radio').on('click', function(){
    $(this).parents('.calc-fourth').attr('value', $(this).text()) 
});


var calcFirst = $('.calc__row-wrap');
var calcSecond = $('.select__body');
var calcThird = $('.calc__second-wrap');
var calcFourth = $('.calc-fourth');
var calcFifth = $('.calc-windowsill');
var calcSix = $('.calc-color');
var calcSeven = $('.calc-mont');
var calcName = $('.calc-name');
var calcphone = document.getElementById('mobile');

$('.calc__sub-btn').on('click', function(e){
    if(calcName.val() != '' && calcphone.inputmask.unmaskedvalue() != ''){
        e.preventDefault();
        sendCalcForm();
        $('.modal-check').addClass('active');
        return false
    }
    
});


function sendCalcForm(){
    var calcFirstVal = calcFirst.attr('value');
    var calcSecondVal = calcSecond.attr('value');
    var calcThirdVal = calcThird.attr('value');
    var calcFourthVal = calcFourth.attr('value');
    var calcFifthVal = calcFifth.attr('value');
    var calcSixVal = calcSix.attr('value');
    var calcSevenVal = calcSeven.attr('value');
    var calcNameVal = calcName.val();
    var calcPhoneVal = calcphone.inputmask.unmaskedvalue();
    $.ajax({
        url: "/phpexport/calcexport.php",
        method: "POST",
        data: {
            calcfirst : calcFirstVal,
            calcsecond : calcSecondVal,
            calcthird : calcThirdVal,
            calcfourth : calcFourthVal,
            calcfifth : calcFifthVal,
            calcsix : calcSixVal,
            calcseven : calcSevenVal,
            calcname : calcNameVal,
            calcphone: calcPhoneVal
        }
    });
};

var measureName = $('#username');
var measurephone = document.getElementById('phone-num');

$('.form__sub-btn').on('click', function(e){
    if(measureName.val() != '' && measurephone.inputmask.unmaskedvalue() != ''){
        e.preventDefault();
        sendMeasureForm();
        $('.modal-check').addClass('active');
        return false
    }
});

function sendMeasureForm(){
    
    var measureNameVal = measureName.val();
    var measurePhoneVal = measurephone.inputmask.unmaskedvalue();
    
    $.ajax({
        url: "/phpexport/measureexport.php",
        method: "POST",
        data: {
            measurename : measureNameVal,
            measurephone: measurePhoneVal
        }
    });
    
};

var modalmeasureName = $('#name-modal');
var modalmeasurephone = document.getElementById('phone-modal');

$('.modal-measure').on('click', function(e){
    if(modalmeasureName.val() != '' && modalmeasurephone.inputmask.unmaskedvalue() != ''){
        e.preventDefault();
        sendModalMeasureForm();
        $('.modal').removeClass('active');
        $('.modal-check').addClass('active');
        return false
    }
    
});

function sendModalMeasureForm(){
    
    var modalmeasureNameVal = modalmeasureName.val();
    var modalmeasurePhoneVal = modalmeasurephone.inputmask.unmaskedvalue();
    
    $.ajax({
        url: "/phpexport/modalmeasureexport.php",
        method: "POST",
        data: {
            modalmeasurename : modalmeasureNameVal,
            modalmeasurephone: modalmeasurePhoneVal
        }
    });
};

var modalcallname = $('#name-modal-call');
var modalcallphone = document.getElementById('phone-modal-call');

$('.modal-call-btn').on('click', function(e){
    if(modalcallname.val() != '' && modalcallphone.inputmask.unmaskedvalue() != ''){
        e.preventDefault();
        sendModalCallForm();
        $('.modal').removeClass('active');
        $('.modal-check').addClass('active');
        return false
    }
    
});


function sendModalCallForm(){
    var modalcallnameVal = modalcallname.val();
    var modalcallphoneVal = modalcallphone.inputmask.unmaskedvalue();
    $.ajax({
        url: "/phpexport/modalcallexport.php",
        method: "POST",
        data: {
            modalcallname: modalcallnameVal,
            modalcallphone: modalcallphoneVal
        }
    });
};

var modaldirname = $('#name-modal-dir');
var modaldirmail = $('#email-dir');
var modaldirmessage = $('#message-dir');

$('.director-sub-btn').on('click', function(e){
    
    if(modaldirname.val() != '' && modaldirmail.val() != '' && modaldirmessage.val() != ''){
        e.preventDefault();
        sendModalDirForm();
        $('.modal').removeClass('active');
        $('.modal-check').addClass('active');
        return false 
    }
    
});


function sendModalDirForm(){
    var modaldirnameVal = modaldirname.val();
    var modaldirmailVal = modaldirmail.val();
    var modaldirmessageVal = modaldirmessage.val();
    $.ajax({
        url: "/phpexport/modaldirexport.php",
        method: "POST",
        data: {
            modaldirname: modaldirnameVal,
            modaldirmail: modaldirmailVal,
            modaldirmessage: modaldirmessageVal,
        }
    });
};

var modalvacname = $('#name-modal-vacancies');
var modalvacphone = document.getElementById('phone-modal-vacancies');
var modalvacmessage = $('#vac-message');

$('.vac-sub-btn').on('click', function(e){
        if(modalvacname.val() != '' && modalvacphone.inputmask.unmaskedvalue() != '' && modalvacmessage.val() != ''){

            e.preventDefault();
            sendModalVacForm();
            $('.modal').removeClass('active');
            $('.modal-check').addClass('active');
            return false
        }
});


function sendModalVacForm(){
    var modalvacnameVal = modalvacname.val();
    var modalvacphoneVal = modalvacphone.inputmask.unmaskedvalue();
    var modalvacmessageVal = modalvacmessage.val();
    
    $.ajax({
        url: "/phpexport/modalvacexport.php",
        method: "POST",
        data: {
            modalvacname: modalvacnameVal,
            modalvacphone: modalvacphoneVal,
            modalvacmessage: modalvacmessageVal,
        }
    });
};

var questioncallname = $('#question-name');
var questioncallphone = document.getElementById('question-phone');

$('.action__sub-btn').on('click', function(e){
    if(questioncallname.val() != '' && questioncallphone.inputmask.unmaskedvalue() != ''){
        e.preventDefault();
        sendQuestionCallForm();
        $('.modal-check').addClass('active');
        return false
    }
    
});


function sendQuestionCallForm(){
    var questioncallnameVal = questioncallname.val();
    var questioncallphoneVal = questioncallphone.inputmask.unmaskedvalue();
    $.ajax({
        url: "/phpexport/questioncallexport.php",
        method: "POST",
        data: {
            questioncallname: questioncallnameVal,
            questioncallphone: questioncallphoneVal
        }
    });
};