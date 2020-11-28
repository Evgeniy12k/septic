"use strict";
const togglePopUp = () => {
    const popupCall = document.querySelector('.popup-call');
      let callBtn = document.querySelectorAll('.call-btn');
      let discountBtn = document.querySelectorAll('.discount-btn');
      let  popupDiscount = document.querySelector('.popup-discount');
   
        // первое модальное окно
      callBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        if(window.innerWidth > 768){
            popupCall.style.opacity = '0'; 
            let n = 0;
            const timer = setInterval(() => { 
                n += 0.1;
                popupCall.style.opacity = `${n}`;
    //  останавливаем таймер
                if (popupCall.style.opacity === '1') {
                    clearInterval(timer);
                }

            }, 40);
            popupCall.style.display = 'block';
            
        }else{
            popupCall.style.display = 'block';
            popupCall.style.opacity = '1';
        }
    });
}); 
const formName = document.getElementById('name_1'),
formPhone = document.getElementById('phone_1');


// закрытие окна
popupCall.addEventListener('click', (event) => {
    let target = event.target;

   
    if(target.classList.contains('popup-close', 'popup-call popup')){
        if(window.innerWidth > 768){
            popupCall.style.opacity = '1';
            let n = 1;
            const timer = setInterval(() => {
                n-= 0.1;
                popupCall.style.opacity = `${n}`;

                if (popupCall.style.opacity === '-0.1') {
                    // очищение полей
                    formName.value = '';
                    formPhone.value = '';
                    popupCall.style.display = 'none';
                    clearInterval(timer);
                }

            }, 40);
            
        }else{
            popupCall.style.display = 'none';
        }
    }else {
        target = target.closest('.popup-content');
        if(!target){
            popupCall.style.display = 'none';
            formName.value = '';
             formPhone.value = '';
        }
    }
});

// обработка кнопки Заказать со скидкой(2- модальное)

discountBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        if(window.innerWidth > 768){
            popupDiscount.style.opacity = '0'; 
            let n = 0;
            const timer = setInterval(() => { 
                n += 0.1;
                popupDiscount.style.opacity = `${n}`;
    //  останавливаем таймер
                if (popupDiscount.style.opacity === '1') {
                    clearInterval(timer);
                }

            }, 40);
            popupDiscount.style.display = 'block';
            
        }else{
            popupDiscount.style.display = 'block';
            popupDiscount.style.opacity = '1';
        }
    });
}); 
const formName1 = document.getElementById('name_1'),
formPhone1 = document.getElementById('phone_1');


// закрытие окна
popupDiscount.addEventListener('click', (event) => {
    let target = event.target;

   
    if(target.classList.contains('popup-close', 'popup-call popup')){
        if(window.innerWidth > 768){
            popupDiscount.style.opacity = '1';
            let n = 1;
            const timer = setInterval(() => {
                n-= 0.1;
                popupDiscount.style.opacity = `${n}`;

                if (popupDiscount.style.opacity === '-0.1') {
                    // очищение полей
                    formName.value = '';
                    formPhone.value = '';
                    popupDiscount.style.display = 'none';
                    clearInterval(timer);
                }

            }, 40);
            
        }else{
            popupDiscount.style.display = 'none';
        }
    }else {
        target = target.closest('.popup-content');
        if(!target){
            popupDiscount.style.display = 'none';
            formName1.value = '';
             formPhone1.value = '';
        }
    }
});



// аккрдеон
let panelBody = document.querySelectorAll('.panel-body');
const accardion = document.querySelectorAll('.panel-default')
accardion.forEach ((elem) =>{
    elem.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target);
         if (target.classList.classList('panel-collapse in')){
            target.classList.remove('panel-collapse  in');
            panelBody.style.display = 'none';
        }
    //      else{
    //         target.classList.remove('panel-collapse collapse in');

    //      }
    //      target.classList.add(' panel-collapse collapse in');
    //      panelBody.style.display = 'block';
    // })

})
});

// check Третье модально окно
let check = document.querySelector('.check-btn'),
        popupCheck = document.querySelector('.popup-check');

    check.addEventListener('click', () => {
        
        if(popupCheck.style.opacity === '0'){
             
            let n = 0;
            const timer = setInterval(() => { 
                n += 0.1;
                popupCheck.style.opacity = `${n}`;
    //  останавливаем таймер
                if (popupCheck.style.opacity === '1') {
                    clearInterval(timer);
                }

            }, 40);
            popupCheck.style.display = 'block';
            
        }else{
            popupCheck.style.display = 'block';
            popupCheck.style.opacity = '1';
        }
    });

    const formName2 = document.getElementById('name_1'),
formPhone2 = document.getElementById('phone_1');
    // закрываем модалку
    popupCheck.addEventListener('click', (event) => {
        let target = event.target;
    
       
        if(target.classList.contains('popup-close', 'popup-call popup')){
            if(window.innerWidth > 768){
                popupCheck.style.opacity = '1';
                let n = 1;
                const timer = setInterval(() => {
                    n-= 0.1;
                    popupCheck.style.opacity = `${n}`;
    
                    if ( popupCheck.style.opacity === '-0.1') {
                        // очищение полей
                        formName2.value = '';
                        formPhone2.value = '';
                        popupCheck.style.display = 'none';
                        clearInterval(timer);
                    }
    
                }, 40);
                
            }else{
                popupCheck.style.display = 'none';
            }
        }else {
            target = target.closest('.popup-check popup');
            if(!target){
                popupCheck.style.display = 'none';
                formName2.value = '';
                 formPhone2.value = '';
            }
        }
    });









}




    

togglePopUp();