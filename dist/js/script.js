// modal company

function companyModal () {
    let companyClosed = document.querySelector('.company__closed'),
        companyOpen = document.querySelector('.company__open'),
        companyContainer = document.querySelector('.company__container');

    companyOpen.addEventListener('click', function () {
        companyContainer.classList.add('company__container--active');
    });
    companyClosed.addEventListener('click', function() {
        companyContainer.classList.remove('company__container--active')
    });
}

companyModal();

// modal adress

function adressModal () {
    let adressBtn = document.querySelectorAll('.adress__btn'),
        adress = document.querySelector('.adress'),
        adressClosed = document.querySelector('.adress__closed');

    for (let i = 0; adressBtn.length > i; i++) {
        adressBtn[i].addEventListener('click', function () {
            adress.classList.add('adress--active');
        });
        adressClosed.addEventListener('click', function(){
            adress.classList.remove('adress--active');
        });
    }
}

adressModal();

// burger 

function burger () {
    let headerBurger = document.querySelector('.header__burger'),
        haderNav = document.querySelector('.hader__nav');

    headerBurger.addEventListener('click', function() {
        haderNav.classList.toggle('hader__nav--active');
    });
}

burger ()