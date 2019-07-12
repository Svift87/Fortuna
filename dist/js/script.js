window.addEventListener('DOMContentLoaded', function () {
    // modal company

    function companyModal () {
        let companyClosed = document.querySelector('.company__closed'),
            companyOpen = document.querySelector('.company__open'),
            companyContainer = document.querySelector('.company__container');

        if (companyOpen != undefined) {
            companyOpen.addEventListener('click', function () {
                companyContainer.classList.add('company__container--active');
            });
            companyClosed.addEventListener('click', function() {
                companyContainer.classList.remove('company__container--active')
            });
        }    
    }

    companyModal();

    // modal adress

    function adressModal () {
        let adressBtn = document.querySelectorAll('.adress__btn'),
            adress = document.querySelector('.adress'),
            adressClosed = document.querySelector('.adress__closed');

        if (adress != undefined) {
            for (let i = 0; adressBtn.length > i; i++) {
                adressBtn[i].addEventListener('click', function () {
                    adress.classList.add('adress--active');
                });
                adressClosed.addEventListener('click', function(){
                    adress.classList.remove('adress--active');
                });
            }
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

    // tabe

    function tabe() {
        let partnersBlockTabs = document.querySelector('.partners__block-tabs'),
            partnersBlockContainers = document.querySelector('.partners__block-containers');

        if (partnersBlockTabs != undefined) {
            let partnersTab = partnersBlockTabs.querySelectorAll('.partners__tab'),
                partnersBlockContainer = partnersBlockContainers.querySelectorAll('.partners__block-container');

            for (let i = 0; partnersTab.length > i; i++) {
                partnersTab[i].addEventListener('click', function(){
                    for (let a = 0; partnersTab.length > a; a++) {
                        partnersTab[a].classList.remove('partners__tab--active');
                        partnersBlockContainer[a].classList.remove('partners__block-container--active');
                    }
                    partnersTab[i].classList.add('partners__tab--active');
                    partnersBlockContainer[i].classList.add('partners__block-container--active');
                })
            }
        }
        
    }

    tabe()

    // modal adress room

    function adressModalRoom () {
        let roomBntPopap = document.querySelectorAll('.room__bnt-popap'),
            roomHiden = document.querySelector('.room__hiden'),
            adressClosed = document.querySelector('.adress__closed');

        if (roomHiden != undefined) {
            for (let i = 0; roomBntPopap.length > i; i++) {
                roomBntPopap[i].addEventListener('click', function () {
                    roomHiden.classList.add('room__hiden--active');
                });
                adressClosed.addEventListener('click', function(){
                    roomHiden.classList.remove('room__hiden--active');
                });
            }
        }
        
    }

    adressModalRoom();

    // popap  Request

    function popapRequest () {
        let requestPopap = document.querySelector('.request-popap'),
            headerCashback = document.querySelector('.header__cashback'),
            requestClosed = document.querySelector('.request__closed');

        if (headerCashback != undefined) {
            headerCashback.addEventListener('click', function() {
                requestPopap.classList.add('active');
            })
            requestClosed.addEventListener('click', function() {
                requestPopap.classList.remove('active');
            })
        }        
    }
    
    popapRequest ();

    // popap booking

    function popapBooking () {
        let bookingPopap = document.querySelector('.booking-popap'),
            uncertaintyCashback = document.querySelector('.uncertainty__cashback'),
            bookingClosed = document.querySelector('.booking__closed');

        if (uncertaintyCashback != undefined) {
            uncertaintyCashback.addEventListener('click', function() {
                bookingPopap.classList.add('active');
            })
            bookingClosed.addEventListener('click', function() {
                bookingPopap.classList.remove('active');
            })
        }        
    }
    
    popapBooking ();

    // booking plus input

    function bookingPlus () {
        let bookingTop = document.getElementById('bookingBlockTop'),
            goodsTypeEl = bookingTop.querySelector('.goods-type__el'),
            bookingBtnPlus = bookingTop.querySelector('.booking__btn-plus'),
            newType = goodsTypeEl.outerHTML;

        bookingBtnPlus.addEventListener('click', function(){
            goodsTypeEl.insertAdjacentHTML('afterEnd', newType);
        })
    }

    bookingPlus ();
})