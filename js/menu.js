  //  console.log(document.querySelector('.menu'));
        //  document.querySelector('.menu').classList.add('is-active');
    
        // console.log(window.matchMedia('screen and (max-width:767px)'));
        const ipad =  window.matchMedia('screen and (max-width:767px)');
        const menu =  document.querySelector('.menu');
        // console.log(menu);
        const burgerButton = document.querySelector('#burger-menu');
        // console.log(burgerButton);
        ipad.addListener(validation);


            function validation(event) {
                if (event.matches) {
                    burgerButton.addEventListener('click', showHide);
                }
                else{
                    burgerButton.removeEventListener('click', showHide);
                }
             }
    
             validation(ipad);
    
            function showHide() {
                if (menu.classList.contains('is-active')) {
                    menu.classList.remove('is-active');
                }
                else {
                    menu.classList.add('is-active');
                }
            }