


let spoiler2 = document.querySelectorAll('.open-spoiler');

for (let i = 0; i < spoiler2.length; i++) {
    spoiler2[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let content = this.nextElementSibling();
        if (content.style.display) {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    })
}

var checkbox = document.querySelectorAll('.calc__switch-block');

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function () {
        this.classList.toggle('color');

    })
}


